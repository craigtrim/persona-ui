# Persona-UI Architecture Overview

This document is written for future Claude sessions to understand the persona-ui codebase structure, data flow, and component relationships.

## Application Purpose

This is a BFI-2 (Big Five Inventory-2) personality configuration UI. Users adjust 5 personality domains via sliders, and the UI displays corresponding personality summaries and system prompts that can be used to configure AI chatbot personas.

## Repository Locations

- **UI Codebase**: `/Users/craigtrim/git/graffl/persona-ui/` (SvelteKit)
- **API/Data Codebase**: `/Users/craigtrim/git/graffl/persona-api/` (Python)

---

## UI Component Hierarchy

```
+page.svelte
├── ArchetypePanel (desktop only, left sidebar)
├── MobileArchetypeDrawer (mobile only, bottom drawer)
├── PersonaSummary
│   ├── Emoji Header (sticky)
│   └── Prompt Panel (flippable)
│       ├── FRONT: v2Summary + v1Summary
│       └── BACK: System Prompt
└── DomainSlider (x5)
    ├── FRONT: Domain slider + 3 FacetBar components
    └── BACK: Domain description + keywords
```

---

## 1. EMOJI HEADER

**Component**: `PersonaSummary.svelte` (lines 77-80)

**Visual**: A row of 5 emojis at the top of the page, sticky positioned.

**Data Source**: Derived store `emojiSummary` in `src/lib/stores/personality.ts`

**How It Works**:
```typescript
// personality.ts lines 206-211
export const emojiSummary = derived(domainScores, ($scores) => {
    return DOMAINS.map((d) => {
        const score = Math.round($scores[d.id]);
        return d.emojiGradient[score] || d.emojiGradient[3];
    }).join('');
});
```

**Data Flow**:
1. `facetScores` store holds 3 facet values per domain (integers 1-5)
2. `domainScores` derived store averages the 3 facets, rounds to nearest 0.5
3. `emojiSummary` maps each rounded domain score to an emoji via `emojiGradient`

**Emoji Gradients** (defined in `DOMAINS` array, lines 19-81):
- Agreeableness: 🧊 ❄️ 🌥️ 🌤️ ☀️
- Conscientiousness: 🌀 😅 ⚖️ 📊 🎯
- Extraversion: 🌑 🌒 🌓 🌔 🌕
- Negative Emotionality (displayed as "Emotional Stability"): 😰 😟 😐 🙂 😌
- Open-Mindedness: 📦 📐 🔍 🎨 🌈

---

## 2. PROMPT PANEL

**Component**: `PersonaSummary.svelte` (lines 82-113)

**Visual**: A flippable card below the emoji header.

### 2a. FRONT FACE - Personality Summaries

Displays two text blocks:
- **Top (v2Summary)**: More serious/descriptive, larger font, white text
- **Bottom (v1Summary)**: Punchier/italic, smaller font, gray text

**Data Sources**:
- `src/lib/data/personality_summaries_v2.json` → v2Summary
- `src/lib/data/personality_summaries.json` → v1Summary

**JSON Key Format**: `"A1,C2,E3,N4,O5"` (score string)

**Lookup Logic** (PersonaSummary.svelte lines 32-68):

```typescript
// v2Summary: Pick the LONGEST entry from the array (stable, deterministic)
let v2Summary = $derived.by(() => {
    const summaries = personalitySummariesV2[$scoreString] || [fallbackV2];
    return summaries.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
});

// v1Summary: Pick RANDOM entry, biased toward shorter texts
// (to complement the longer v2Summary)
let v1Summary = $derived.by(() => {
    // Weighted random selection favoring shorter texts
    // ... see component for full implementation
});
```

**Fallback Values**:
- v2: `"Balanced approach to most situations, adapting as needed"`
- v1: `"A unique blend of traits defying easy categorization"`

### 2b. BACK FACE - System Prompt

**Data Source**: `src/lib/data/system_prompts.json`

**JSON Key Format**: Same `"A1,C2,E3,N4,O5"` score string

**Lookup** (line 72):
```typescript
let systemPrompt = $derived(
    systemPrompts[$scoreString] || fallbackPrompt
);
```

**Generation Script**: `persona-api/scripts/consolidate_training_data.py`
- Reads all `training_data/*.jsonl` files
- Groups by score combination
- Picks one random prompt per combo (seeded for reproducibility)
- Outputs to `persona-ui/src/lib/data/system_prompts.json`

---

## 3. SCORE STRING FORMAT

**⚠️ CRITICAL**: The order is `A,C,E,N,O` (N before O).

This is defined in `personality.ts` lines 213-236:

```typescript
// ⚠️ JSON key order: A, C, E, N, O - DO NOT CHANGE
const jsonKeyOrder = [
    'agreeableness',
    'conscientiousness',
    'extraversion',
    'negative_emotionality',  // N comes before O
    'open_mindedness'
];
```

**Used By**:
- `personality_summaries.json`
- `personality_summaries_v2.json`
- `system_prompts.json`

If you change this order, lookups will fail and show fallback text.

---

## 4. DOMAIN PANELS (x5)

**Component**: `DomainSlider.svelte`

**Visual**: 5 flippable cards, one per BFI-2 domain.

### 4a. FRONT FACE - Sliders

Each domain panel contains:
- Header: Emoji + Domain Name + Score display
- Main slider: Range 1-5, step 0.5
- 3 Facet sliders (via `FacetBar.svelte`): Each is 1-5, integer only

**Domain Configuration** (personality.ts lines 19-81):

| Domain | ID | Facets | Inverted? |
|--------|----|----|-----------|
| Agreeableness | `agreeableness` | Compassion, Respectfulness, Trust | No |
| Conscientiousness | `conscientiousness` | Organization, Productiveness, Responsibility | No |
| Extraversion | `extraversion` | Sociability, Assertiveness, Energy_Level | No |
| Emotional Stability | `negative_emotionality` | Anxiety, Depression, Emotional_Volatility | **Yes** |
| Open-Mindedness | `open_mindedness` | Intellectual_Curiosity, Aesthetic_Sensitivity, Creative_Imagination | No |

**Inverted Domain Handling**:
- `negative_emotionality` is inverted for UI display
- UI score 5 (calm) = API score 1 (low negative emotionality)
- Conversion: `API = 6 - UI`

### 4b. BACK FACE - Domain Description + Keywords

**Data Source**: `src/lib/data/domain_texts.json`

**JSON Key Format**: `"<domain>_<facet1>_<facet2>_<facet3>"`
- Example: `"extraversion_2_3_4"`

**Structure**:
```json
{
    "extraversion_2_3_4": {
        "Description sentence about this facet combination": [
            "keyword1",
            "keyword2",
            "keyword3"
        ],
        "Another description": ["more", "keywords"]
    }
}
```

**Lookup** (DomainSlider.svelte lines 52-64):
```typescript
let textEntry = $derived.by(() => {
    const key = `${config.id}_${facetScores[0]}_${facetScores[1]}_${facetScores[2]}`;
    const texts = domainTexts[key];
    if (!texts) return null;

    const entries = Object.entries(texts);
    // Pick a random entry
    const [description, keywords] = entries[Math.floor(Math.random() * entries.length)];
    return { description, keywords };
});
```

**Generation Source**: `persona-api/persona_api/data/text/<domain>/<f1>/<f2>/<f3>.json`
- These files are generated by `gen_domain_text_structure.py`
- Bundled into `domain_texts.json` for the UI

---

## 5. DATA FILE SUMMARY

| File | Purpose | Key Format | Generated By |
|------|---------|------------|--------------|
| `system_prompts.json` | Harmonized system prompts for prompt panel back | `A1,C2,E3,N4,O5` | `consolidate_training_data.py` |
| `personality_summaries.json` | Punchy summaries (v1) for prompt panel front | `A1,C2,E3,N4,O5` | Manual/LLM generated |
| `personality_summaries_v2.json` | Serious summaries (v2) for prompt panel front | `A1,C2,E3,N4,O5` | Manual/LLM generated |
| `domain_texts.json` | Domain descriptions + keywords for domain panel back | `domain_f1_f2_f3` | `gen_domain_text_structure.py` |
| `facet_keywords.json` | TF-IDF keywords per facet/score | Nested structure | `analyze_facet_keywords.py` |
| `archetypes.ts` | Predefined archetype definitions | N/A | Manual |

---

## 6. ARCHETYPE SYSTEM

**Components**:
- `ArchetypePanel.svelte` (desktop, fixed left sidebar)
- `MobileArchetypeDrawer.svelte` (mobile, bottom pull-up drawer)

**Data Source**: `src/lib/data/archetypes.ts`

**Purpose**: Predefined personality profiles that set all 5 domain scores at once.

**Key Functions**:
- `getArchetypesByDistance(scores)`: Returns archetypes sorted by distance from current scores
- `findBestArchetype(scores)`: Returns closest archetype
- `calculateMatchQuality(distance)`: Converts distance to 0-100% match

**Cipher Archetype**: Special archetype for "unique" profiles that don't match any predefined archetype (distance >= threshold).

---

## 7. STATE MANAGEMENT

**Primary Store**: `facetScores` (writable)
```typescript
Record<string, [number, number, number]>
// e.g., { agreeableness: [3, 4, 2], conscientiousness: [5, 5, 5], ... }
```

**Derived Stores**:
- `domainScores`: Average of facets per domain, rounded to 0.5
- `emojiSummary`: 5-emoji string
- `scoreString`: JSON lookup key (A1,C2,E3,N4,O5)
- `scoreStringDisplay`: Same format, for UI display

**Initialization**: On page load, a random archetype is selected and its trait values are used to initialize facet scores.

---

## 8. SCRIPTS REFERENCE (persona-api)

| Script | Purpose |
|--------|---------|
| `gen_behavioral_instructions.py` | Extract behavioral phrases from BFI-2 via Ollama |
| `reorganize_behavioral_instructions.py` | Organize into per-facet files |
| `gen_domain_text_structure.py` | Create domain text JSON files |
| `gen_facet_data.py` | Generate facet-level data |
| `analyze_facet_keywords.py` | TF-IDF keyword extraction |
| `consolidate_training_data.py` | Bundle training JSONL → system_prompts.json |
| `generate_training_data.py` | Generate training data JSONL files |
| `gen_keyword_prompts.py` | Generate focused prompts for individual keywords |

---

## 9. UPCOMING FEATURES

### Clickable Keywords (In Progress)

**Data File**: `persona-api/persona_api/data/keyword_prompts.json` (being generated)

**Purpose**: When user clicks a keyword on domain panel back, show a focused prompt for just that keyword instead of the harmonized multi-keyword prompt.

**Structure**:
```json
{
    "agreeableness": {
        "acknowledges feelings": "Always respond by validating and acknowledging...",
        "actively assists": "Always offer helpful suggestions and support..."
    },
    "extraversion": { ... }
}
```

**Generation**: `gen_keyword_prompts.py` queries Ollama for each unique keyword.

---

## 10. DEPLOYMENT

- **Hosting**: GitHub Pages
- **Domain**: botprofile.work (custom domain via Cloudflare)
- **Build**: `npm run build` → static files in `/build`
- **Deploy**: Push to master triggers `.github/workflows/deploy.yml`

---

## 11. CRITICAL WARNINGS

1. **Score String Order**: MUST be A,C,E,N,O. See comments in `personality.ts` lines 213-224.

2. **Inverted Domain**: `negative_emotionality` is inverted. UI 5 = API 1.

3. **JSON Key Mismatches**: If you see fallback text like "Balanced approach to most situations", the score string order is wrong or the JSON file is missing entries.

4. **Archetype Initialization**: App starts with a random archetype. The `initialArchetypeId` is exported so ArchetypePanel can highlight it.
