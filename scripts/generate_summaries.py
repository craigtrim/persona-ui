#!/usr/bin/env python3
"""
Generate personality summaries for all Big Five emoji combinations using Ollama.

This script generates 5 punchy, gender-neutral personality summaries for each
of the 3,125 possible domain score combinations (5^5).

Output format: A1,C2,E3,N4,O5: ["summary1", "summary2", ...]
"""

import json
import itertools
import requests
from pathlib import Path

# Domain definitions matching the UI
DOMAINS = {
    "A": {
        "name": "Agreeableness",
        "low": "Cold/Harsh",
        "high": "Warm/Compassionate",
        "emojis": {1: "🧊", 2: "❄️", 3: "🌥️", 4: "🌤️", 5: "☀️"},
    },
    "C": {
        "name": "Conscientiousness",
        "low": "Chaotic/Disorganized",
        "high": "Focused/Organized",
        "emojis": {1: "🌀", 2: "😅", 3: "📝", 4: "📋", 5: "🎯"},
    },
    "E": {
        "name": "Extraversion",
        "low": "Reserved/Introverted",
        "high": "Energetic/Outgoing",
        "emojis": {1: "🌑", 2: "🌒", 3: "🌓", 4: "🌔", 5: "🌕"},
    },
    "N": {
        "name": "Emotional Stability",
        "low": "Anxious/Reactive",
        "high": "Calm/Stable",
        "emojis": {1: "😰", 2: "😟", 3: "😐", 4: "🙂", 5: "😌"},
    },
    "O": {
        "name": "Open-Mindedness",
        "low": "Conventional/Practical",
        "high": "Creative/Imaginative",
        "emojis": {1: "📦", 2: "📐", 3: "🔍", 4: "🎨", 5: "🌈"},
    },
}

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "qwen2.5:7b"


def get_emoji_string(scores: dict[str, int]) -> str:
    """Get the emoji string for a given score combination."""
    return "".join(DOMAINS[d]["emojis"][scores[d]] for d in ["A", "C", "E", "N", "O"])


def get_score_string(scores: dict[str, int]) -> str:
    """Get the score string like A1,C2,E3,N4,O5."""
    return ",".join(f"{d}{scores[d]}" for d in ["A", "C", "E", "N", "O"])


def describe_score(domain: str, score: int) -> str:
    """Get a description for a domain at a given score level."""
    d = DOMAINS[domain]
    if score == 1:
        return f"very {d['low']}"
    elif score == 2:
        return f"somewhat {d['low']}"
    elif score == 3:
        return f"balanced {d['name']}"
    elif score == 4:
        return f"somewhat {d['high']}"
    else:  # score == 5
        return f"very {d['high']}"


def build_prompt(scores: dict[str, int]) -> str:
    """Build the Ollama prompt for a given score combination."""
    emoji_str = get_emoji_string(scores)
    score_str = get_score_string(scores)

    descriptions = [describe_score(d, scores[d]) for d in ["A", "C", "E", "N", "O"]]

    return f"""Generate exactly 5 punchy, gender-neutral personality summaries for someone with these Big Five traits:

Scores: {score_str}
Emojis: {emoji_str}

Trait breakdown:
- Agreeableness: {descriptions[0]}
- Conscientiousness: {descriptions[1]}
- Extraversion: {descriptions[2]}
- Emotional Stability: {descriptions[3]}
- Open-Mindedness: {descriptions[4]}

Rules:
1. Each summary must be ONE sentence, under 15 words
2. Use gender-neutral language (they/them, "someone who", or no pronouns)
3. Be witty and evocative, not clinical
4. Capture the essence of ALL five traits together
5. Vary the style: some playful, some poetic, some blunt

Good examples:
- "The brutally honest creative who loses their keys daily"
- "A distant dreamer with zero filter and a messy desk"
- "Cold takes, hot ideas, total chaos"
- "An aloof artist who gives you raw, unfiltered takes but can't stay organized"

Output ONLY a JSON array of 5 strings, nothing else:
["summary1", "summary2", "summary3", "summary4", "summary5"]"""


def call_ollama(prompt: str) -> list[str]:
    """Call Ollama API and parse the response."""
    try:
        response = requests.post(
            OLLAMA_URL,
            json={
                "model": MODEL,
                "prompt": prompt,
                "stream": False,
                "options": {"temperature": 0.8},
            },
            timeout=120,
        )
        response.raise_for_status()

        result = response.json()
        text = result.get("response", "").strip()

        # Try to parse JSON from the response
        # Handle cases where model might add extra text
        start = text.find("[")
        end = text.rfind("]") + 1
        if start >= 0 and end > start:
            json_str = text[start:end]
            summaries = json.loads(json_str)
            if isinstance(summaries, list) and len(summaries) >= 5:
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
    # Generate all score combinations
    all_combos = list(itertools.product([1, 2, 3, 4, 5], repeat=5))
    total = len(all_combos)  # 3125

    print(f"Generating summaries for {total} combinations...")
    print(f"Output file: {output_file}")
    print(f"Model: {MODEL}")
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

        emoji_str = get_emoji_string(scores)
        print(f"[{i+1}/{total}] {score_str} {emoji_str}")

        prompt = build_prompt(scores)
        summaries = call_ollama(prompt)

        if summaries:
            results[score_str] = {
                "emojis": emoji_str,
                "summaries": summaries,
            }
            print(f"  ✓ Generated {len(summaries)} summaries")
        else:
            print(f"  ✗ Failed to generate summaries")

        # Save progress every 10 combinations
        if (i + 1) % 10 == 0:
            with open(output_file, "w") as f:
                json.dump(results, f, indent=2, ensure_ascii=False)
            print(f"  Saved progress ({len(results)} entries)")

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
    emoji_str = get_emoji_string(scores)

    print(f"Testing: {score_str} {emoji_str}")
    print()

    prompt = build_prompt(scores)
    print("Prompt:")
    print("-" * 40)
    print(prompt)
    print("-" * 40)
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

    parser = argparse.ArgumentParser(description="Generate personality summaries")
    parser.add_argument(
        "--test",
        nargs=5,
        type=int,
        metavar=("A", "C", "E", "N", "O"),
        help="Test with specific scores (e.g., --test 1 1 1 3 5)",
    )
    parser.add_argument(
        "--output",
        default="personality_summaries.json",
        help="Output file path (default: personality_summaries.json)",
    )
    parser.add_argument(
        "--resume",
        help="Resume from existing output file",
    )
    parser.add_argument(
        "--model",
        default="llama3.2",
        help="Ollama model to use (default: llama3.2)",
    )

    args = parser.parse_args()
    MODEL = args.model

    if args.test:
        test_single(*args.test)
    else:
        generate_all_summaries(args.output, args.resume)
