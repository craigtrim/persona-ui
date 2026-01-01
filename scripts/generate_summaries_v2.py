#!/usr/bin/env python3
"""
Generate personality summaries for all Big Five domain score combinations using Ollama.

V2: Uses behavioral descriptions from persona_api data files to ground the summaries.
No emojis in prompts. Uses mistral-nemo model.

Output format: A1,C2,E3,N4,O5: ["summary1", "summary2", ...]
"""

import json
import itertools
import requests
import random
from pathlib import Path

# Path to persona_api text data
DATA_PATH = Path(__file__).parent.parent.parent / "persona-api" / "persona_api" / "data" / "text"

# Domain definitions (no emojis)
DOMAINS = {
    "A": {
        "id": "agreeableness",
        "name": "Agreeableness",
        "low": "cold, harsh, blunt",
        "high": "warm, compassionate, cooperative",
    },
    "C": {
        "id": "conscientiousness",
        "name": "Conscientiousness",
        "low": "chaotic, disorganized, spontaneous",
        "high": "focused, organized, disciplined",
    },
    "E": {
        "id": "extraversion",
        "name": "Extraversion",
        "low": "reserved, quiet, solitary",
        "high": "energetic, outgoing, talkative",
    },
    "N": {
        "id": "negative_emotionality",
        "name": "Emotional Stability",
        "low": "anxious, reactive, worried",
        "high": "calm, stable, resilient",
    },
    "O": {
        "id": "open_mindedness",
        "name": "Open-Mindedness",
        "low": "conventional, practical, traditional",
        "high": "creative, imaginative, curious",
    },
}

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "mistral-nemo:latest"


def get_score_string(scores: dict[str, int]) -> str:
    """Get the score string like A1,C2,E3,N4,O5."""
    return ",".join(f"{d}{scores[d]}" for d in ["A", "C", "E", "N", "O"])


def describe_score(domain_key: str, score: int) -> str:
    """Get a plain-text description for a domain at a given score level."""
    d = DOMAINS[domain_key]
    if score == 1:
        return f"very {d['low']}"
    elif score == 2:
        return f"somewhat {d['low']}"
    elif score == 3:
        return f"moderate/balanced"
    elif score == 4:
        return f"somewhat {d['high']}"
    else:  # score == 5
        return f"very {d['high']}"


def load_domain_data(domain_id: str, score: int) -> dict | None:
    """Load behavioral data for a domain at a given score (using same score for all facets)."""
    file_path = DATA_PATH / domain_id / str(score) / str(score) / f"{score}.json"
    if file_path.exists():
        with open(file_path) as f:
            return json.load(f)
    return None


def get_sample_behaviors(domain_id: str, score: int, max_samples: int = 2) -> list[str]:
    """Get sample behavioral descriptions for a domain at a given score."""
    data = load_domain_data(domain_id, score)
    if not data or "texts" not in data:
        return []

    texts = list(data["texts"].keys())
    if len(texts) > max_samples:
        texts = random.sample(texts, max_samples)
    return texts


def get_sample_keywords(domain_id: str, score: int, max_keywords: int = 5) -> list[str]:
    """Get sample keywords for a domain at a given score."""
    data = load_domain_data(domain_id, score)
    if not data or "texts" not in data:
        return []

    all_keywords = set()
    for keywords in data["texts"].values():
        all_keywords.update(keywords)

    # Filter out non-ASCII keywords (some have encoding issues)
    clean_keywords = [k for k in all_keywords if all(ord(c) < 128 for c in k)]

    if len(clean_keywords) > max_keywords:
        clean_keywords = random.sample(clean_keywords, max_keywords)
    return clean_keywords


def build_prompt(scores: dict[str, int]) -> str:
    """Build the Ollama prompt for a given score combination."""
    score_str = get_score_string(scores)

    # Build trait descriptions
    trait_lines = []
    behavior_lines = []
    keyword_lines = []

    for domain_key in ["A", "C", "E", "N", "O"]:
        domain = DOMAINS[domain_key]
        score = scores[domain_key]
        desc = describe_score(domain_key, score)
        trait_lines.append(f"- {domain['name']}: {score}/5 ({desc})")

        # Get sample behaviors and keywords
        behaviors = get_sample_behaviors(domain["id"], score, max_samples=1)
        keywords = get_sample_keywords(domain["id"], score, max_keywords=4)

        if behaviors:
            behavior_lines.append(f"  {domain['name']}: {behaviors[0][:100]}...")
        if keywords:
            keyword_lines.append(f"  {domain['name']}: {', '.join(keywords)}")

    traits_text = "\n".join(trait_lines)
    behaviors_text = "\n".join(behavior_lines) if behavior_lines else "  (none available)"
    keywords_text = "\n".join(keyword_lines) if keyword_lines else "  (none available)"

    return f"""Generate exactly 5 short personality descriptions for someone with these Big Five traits:

{traits_text}

Sample behavioral indicators:
{behaviors_text}

Associated keywords:
{keywords_text}

RULES:
1. Each description must be ONE sentence, 8-15 words
2. Use gender-neutral language (they/their or no pronouns)
3. NO emojis, NO metaphors about weather/journeys/rainbows
4. Focus on observable behaviors and tendencies, not abstract characterizations
5. Each description should feel distinct from the others
6. Descriptions should reflect the COMBINATION of all five traits together

GOOD examples (for different trait combos):
- "Blunt feedback delivered quietly, then back to solo work"
- "Friendly but scattered, always running five minutes late"
- "Reserved perfectionist who triple-checks everything in silence"
- "Warm and spontaneous, thrives in group brainstorms"

BAD examples (too vague/fortune-cookie):
- "A creative soul navigating life's chaos"
- "Someone who finds beauty in unexpected places"
- "An individual who marches to their own beat"

Output ONLY a JSON array of 5 strings, nothing else:
["description1", "description2", "description3", "description4", "description5"]"""


def call_ollama(prompt: str) -> list[str]:
    """Call Ollama API and parse the response."""
    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": MODEL,
                "prompt": prompt,
                "stream": False,
                "options": {"temperature": 0.7},
            },
            timeout=120,
        )
        response.raise_for_status()

        result = response.json()
        text = result.get("response", "").strip()

        # Try to parse JSON from the response
        start = text.find("[")
        end = text.rfind("]") + 1
        if start >= 0 and end > start:
            json_str = text[start:end]
            summaries = json.loads(json_str)
            if isinstance(summaries, list) and len(summaries) >= 5:
                # Filter out any that contain emojis
                clean = [s for s in summaries[:5] if not any(ord(c) > 127 for c in s)]
                if len(clean) >= 5:
                    return clean[:5]
                # If some had emojis, still return what we got
                return summaries[:5]

        print(f"  Warning: Could not parse response, raw: {text[:200]}")
        return []

    except requests.RequestException as e:
        print(f"  Error calling Ollama: {e}")
        return []
    except json.JSONDecodeError as e:
        print(f"  Error parsing JSON: {e}")
        return []


def generate_all_summaries(output_file: str, resume_from: str | None = None):
    """Generate summaries for all 3,125 combinations."""
    all_combos = list(itertools.product([1, 2, 3, 4, 5], repeat=5))
    total = len(all_combos)

    print(f"Generating summaries for {total} combinations...")
    print(f"Output file: {output_file}")
    print(f"Model: {MODEL}")
    print(f"Data path: {DATA_PATH}")
    print()

    # Load existing results if resuming
    results = {}
    if resume_from and Path(resume_from).exists():
        with open(resume_from) as f:
            results = json.load(f)
        print(f"Resumed from {len(results)} existing entries")

    # Process each combination
    for i, combo in enumerate(all_combos):
        scores = dict(zip(["A", "C", "E", "N", "O"], combo))
        score_str = get_score_string(scores)

        # Skip if already processed
        if score_str in results:
            continue

        print(f"[{i+1}/{total}] {score_str}")

        prompt = build_prompt(scores)
        summaries = call_ollama(prompt)

        if summaries:
            results[score_str] = summaries
            print(f"  + {len(summaries)} summaries")
        else:
            print(f"  x Failed")

        # Save progress every 10 combinations
        if (i + 1) % 10 == 0:
            with open(output_file, "w") as f:
                json.dump(results, f, indent=2, ensure_ascii=False)
            print(f"  Saved ({len(results)} entries)")

    # Final save
    with open(output_file, "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print()
    print(f"Done! Generated summaries for {len(results)} combinations")
    print(f"Total summaries: {len(results) * 5}")


def test_single(a: int, c: int, e: int, n: int, o: int):
    """Test generation for a single combination."""
    scores = {"A": a, "C": c, "E": e, "N": n, "O": o}
    score_str = get_score_string(scores)

    print(f"Testing: {score_str}")
    print()

    prompt = build_prompt(scores)
    print("Prompt:")
    print("-" * 60)
    print(prompt)
    print("-" * 60)
    print()

    summaries = call_ollama(prompt)
    if summaries:
        print("Generated summaries:")
        for i, s in enumerate(summaries, 1):
            print(f"  {i}. {s}")
    else:
        print("Failed to generate summaries")


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Generate personality summaries v2")
    parser.add_argument(
        "--test",
        nargs=5,
        type=int,
        metavar=("A", "C", "E", "N", "O"),
        help="Test with specific scores (e.g., --test 1 1 1 3 5)",
    )
    parser.add_argument(
        "--output",
        default="personality_summaries_v2.json",
        help="Output file path (default: personality_summaries_v2.json)",
    )
    parser.add_argument(
        "--resume",
        help="Resume from existing output file",
    )
    parser.add_argument(
        "--model",
        default="mistral-nemo:latest",
        help="Ollama model to use (default: mistral-nemo:latest)",
    )

    args = parser.parse_args()
    MODEL = args.model

    if args.test:
        test_single(*args.test)
    else:
        generate_all_summaries(args.output, args.resume)
