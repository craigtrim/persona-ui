# Persona-UI Architecture Overview

This document is written for future Claude sessions to understand the persona-ui codebase structure, data flow, and component relationships.

## Application Purpose

This is a BFI-2 (Big Five Inventory-2) personality configuration UI. Users adjust 5 personality domains via sliders, and the UI displays corresponding personality summaries and persona prompts that can be used to configure AI chatbot personas.

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
│       ├── FRONT: headlineSummary + taglineSummary
│       └── BACK: Persona Prompt
└── DomainSlider (x5)
    ├── FRONT: Domain slider + 3 FacetBar components
    └── BACK: Domain description + keywords
```

---

## 1. EMOJI HEADER

**Component**: `PersonaSummary.svelte`

**Visual**: A row of 5 emojis at the top of the page, sticky positioned.

**Data Source**: Derived store `emojiSummary` in `src/lib/stores/personality.ts`

**How It Works**:
```typescript
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

**Emoji Gradients** (defined in `DOMAINS` array):
- Agreeableness: 🧊 ❄️ 🌥️ 🌤️ ☀️
- Conscientiousness: 🌀 😅 ⚖️ 📊 🎯
- Extraversion: 🌑 🌒 🌓 🌔 🌕
- Negative Emotionality (displayed as "Emotional Stability"): 😰 😟 😐 🙂 😌
- Open-Mindedness: 📦 📐 🔍 🎨 🌈

---

## 2. PROMPT PANEL

**Component**: `PersonaSummary.svelte`

**Visual**: A flippable card below the emoji header.

### 2a. FRONT FACE - Personality Summaries

Displays two text blocks:
- **Top (headlineSummary)**: More serious/descriptive, larger font, white text
- **Bottom (taglineSummary)**: Punchier/italic, smaller font, gray text

**Data Sources**:
- `src/lib/data/shared/summaries_headline.json` → headlineSummary
- `src/lib/data/shared/summaries_tagline.json` → taglineSummary

**JSON Key Format**: `"A1,C2,E3,N4,O5"` (score string)

**Lookup Logic**:

```typescript
// headlineSummary: Pick the LONGEST entry from the array (stable, deterministic)
let headlineSummary = $derived.by(() => {
    const summaries = summariesHeadline[$scoreString] || [fallbackV2];
    return summaries.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
});

// taglineSummary: Pick RANDOM entry, biased toward shorter texts
// (to complement the longer headlineSummary)
let taglineSummary = $derived.by(() => {
    // Weighted random selection favoring shorter texts
    // ... see component for full implementation
});
```

**Fallback Values**:
- headline: `"Balanced approach to most situations, adapting as needed"`
- tagline: `"A unique blend of traits defying easy categorization"`

### 2b. BACK FACE - Persona Prompt

**Data Source**: `src/lib/data/shared/persona_prompts.json`

**JSON Key Format**: Same `"A1,C2,E3,N4,O5"` score string

**Lookup**:
```typescript
let personaPrompt = $derived(
    personaPrompts[$scoreString] || fallbackPrompt
);
```

**Generation Script**: `persona-api/scripts/generators/persona_prompts/gen_persona_prompts.py`
- Reads all `training_data/*.jsonl` files
- Groups by score combination
- Picks one random prompt per combo (seeded for reproducibility)
- Outputs to `persona-ui/src/lib/data/shared/persona_prompts.json`

---

## 3. SCORE STRING FORMAT

**⚠️ CRITICAL**: The order is `A,C,E,N,O` (N before O).

This is defined in `personality.ts`:

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
- `shared/summaries_tagline.json`
- `shared/summaries_headline.json`
- `shared/persona_prompts.json`

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

**Domain Configuration** (personality.ts):

| Domain | ID | Facets | Inverted? |
|--------|----|--------|-----------|
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

**Data Source**: `src/lib/data/shared/domain_descriptions.json`

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

**Lookup** (DomainSlider.svelte):
```typescript
let textEntry = $derived.by(() => {
    const key = `${config.id}_${facetScores[0]}_${facetScores[1]}_${facetScores[2]}`;
    const texts = domainDescriptions[key];
    if (!texts) return null;

    const entries = Object.entries(texts);
    // Pick a random entry
    const [description, keywords] = entries[Math.floor(Math.random() * entries.length)];
    return { description, keywords };
});
```

**Generation Source**: `persona-api/persona_api/data/text/<domain>/<f1>/<f2>/<f3>.json`
- Generated by `generators/domain/gen_domain_descriptions.py`
- Bundled into `domain_descriptions.json` for the UI

---

## 5. DATA FILE SUMMARY

### Data Directory Structure

```
src/lib/data/
├── shared/                           # Shared data files (fallback when per-archetype missing)
│   ├── summaries_tagline.json        # Punchy taglines for prompt panel front
│   ├── summaries_headline.json       # Serious headlines for prompt panel front
│   ├── persona_prompts.json          # Persona prompts for prompt panel back
│   ├── domain_descriptions.json      # Domain descriptions + keywords for domain panel back
│   ├── keyword_behaviors.json        # Focused behaviors for individual keywords
│   └── facet_keywords.json           # TF-IDF keywords per facet/score
├── archetypes.ts                     # Main archetype definitions & registry
├── norseMythologyArchetypes.ts       # Norse mythology archetype set
├── starWarsArchetypes.ts             # Star Wars archetype set
├── mcuArchetypes.ts                  # MCU archetype set
├── greekMythologyArchetypes.ts       # Greek mythology archetype set
├── romanMythologyArchetypes.ts       # Roman mythology archetype set
└── greenEmberArchetypes.ts           # Green Ember archetype set
```

### File Reference

| File | Purpose | Key Format | Generated By |
|------|---------|------------|--------------|
| `shared/persona_prompts.json` | Persona prompts for prompt panel back | `A1,C2,E3,N4,O5` | `gen_persona_prompts.py` |
| `shared/summaries_tagline.json` | Punchy summaries for prompt panel front | `A1,C2,E3,N4,O5` | Manual/LLM generated |
| `shared/summaries_headline.json` | Serious summaries for prompt panel front | `A1,C2,E3,N4,O5` | Manual/LLM generated |
| `shared/domain_descriptions.json` | Domain descriptions + keywords for domain panel back | `domain_f1_f2_f3` | `gen_domain_descriptions.py` |
| `shared/keyword_behaviors.json` | Focused behaviors for individual keywords | `domain.keyword` | `gen_keyword_behaviors.py` |
| `shared/facet_keywords.json` | TF-IDF keywords per facet/score | Nested structure | `analyze_facet_keywords.py` |
| `archetypes.ts` | Predefined archetype definitions | N/A | Manual |

---

## 6. ARCHETYPE SYSTEM

**Components**:
- `ArchetypePanel.svelte` (desktop, fixed left sidebar)
- `MobileArchetypeDrawer.svelte` (mobile, bottom pull-up drawer)

**Data Source**: `src/lib/data/archetypes.ts`

**Purpose**: Predefined personality profiles that set all 5 domain scores at once.

**Archetype Sets**:
- Norse Mythology (20 characters)
- Star Wars (25 characters)
- MCU (25 characters)
- Greek Mythology
- Roman Mythology
- Green Ember

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

### Script Directory Structure

```
scripts/
├── generators/
│   ├── persona_prompts/
│   │   └── gen_persona_prompts.py      # Bundle training JSONL → persona_prompts.json
│   ├── domain/
│   │   └── gen_domain_descriptions.py  # Create domain description JSON files
│   └── keywords/
│       └── gen_keyword_behaviors.py    # Generate focused behaviors for keywords
├── analyzers/
│   └── keywords/
│       └── analyze_facet_keywords.py   # TF-IDF keyword extraction
├── gen_behavioral_instructions.py      # Extract behavioral phrases from BFI-2 via Ollama
├── reorganize_behavioral_instructions.py  # Organize into per-facet files
├── gen_facet_data.py                   # Generate facet-level data
├── gen_score_coherence.py              # Score coherence generation
└── generate_training_data.py           # Generate training data JSONL files
```

### Script Reference

| Script | Purpose |
|--------|---------|
| `generators/persona_prompts/gen_persona_prompts.py` | Bundle training JSONL → shared/persona_prompts.json |
| `generators/domain/gen_domain_descriptions.py` | Create domain description JSON files |
| `generators/keywords/gen_keyword_behaviors.py` | Generate focused behaviors for individual keywords |
| `analyzers/keywords/analyze_facet_keywords.py` | TF-IDF keyword extraction |
| `gen_behavioral_instructions.py` | Extract behavioral phrases from BFI-2 via Ollama |
| `reorganize_behavioral_instructions.py` | Organize into per-facet files |
| `gen_facet_data.py` | Generate facet-level data |
| `generate_training_data.py` | Generate training data JSONL files |

---

## 9. CLICKABLE KEYWORDS

**Component**: `DomainSlider.svelte` (back face)

**Data Source**: `src/lib/data/shared/keyword_behaviors.json`

**Purpose**: When user clicks a keyword tag on domain panel back, the description text changes to show a focused behavior prompt for just that keyword.

**Data Structure**:
```json
{
    "agreeableness": {
        "acknowledges feelings": "Always respond by validating and acknowledging...",
        "actively assists": "Always offer helpful suggestions and support...",
        "disrespectful tone": "Avoid using any disrespectful or condescending language..."
    },
    "conscientiousness": { ... },
    "extraversion": { ... },
    "negative_emotionality": { ... },
    "open_mindedness": { ... }
}
```

**Behavior**:
- Click keyword → description changes to focused behavior, keyword highlighted
- Click same keyword again → returns to default description
- Click different keyword → switches to that keyword's behavior
- Change facet scores → selection cleared automatically

**Sound**: Uses `emojiPop` sound on keyword selection

**Generation Pipeline**:
1. Source data: `persona-api/persona_api/data/text/<domain>/**/*.json`
2. Script: `persona-api/scripts/generators/keywords/gen_keyword_behaviors.py`
3. Uses Ollama (qwen2.5:7b on sparx) to generate focused behaviors
4. Output: `persona-api/persona_api/data/keyword_behaviors.json`
5. Copied to: `persona-ui/src/lib/data/shared/keyword_behaviors.json`

**Stats**: 551 keywords across 5 domains (109 agreeableness, 103 conscientiousness, 123 extraversion, 120 negative_emotionality, 96 open_mindedness)

---

## 10. DEPLOYMENT

- **Hosting**: GitHub Pages
- **Domain**: botprofile.work (custom domain via Cloudflare)
- **Build**: `npm run build` → static files in `/build`
- **Deploy**: Push to master triggers `.github/workflows/deploy.yml`

---

## 11. SOUND EFFECTS

**File**: `src/lib/stores/sounds.ts`

**Implementation**: Uses native Web Audio API (no external dependencies). Sounds are synthesized client-side using oscillators and gain envelopes.

**Available Sounds**:

| Sound | Trigger | Freq/Duration | Description |
|-------|---------|---------------|-------------|
| `sliderTick` | Domain slider movement | 800Hz, 30ms | Square wave tick |
| `facetTap` | Facet bar slider movement | 1200Hz, 12ms | Higher, tighter tick |
| `cardFlip` | Flipping domain/prompt cards | 300→150Hz, 80ms | Sawtooth whoosh |
| `emojiPop` | Tapping emoji in gradient picker | 500→700Hz, 60ms | Sine pop |
| `archetypeSelect` | Selecting archetype from panel | 440→660Hz, 150ms | Sine chime |
| `perfectMatch` | (disabled) Easter egg | 523→784Hz, 300ms | Celebratory tone |

**Usage**:
```typescript
import { sfx } from '$lib/stores/sounds';

sfx.sliderTick();    // Play slider tick
sfx.cardFlip();      // Play card flip
sfx.archetypeSelect(); // Play archetype chime
```

**Sound Toggle**: User preference stored in localStorage as `soundEnabled`. Access via `soundEnabled` store:
```typescript
import { soundEnabled } from '$lib/stores/sounds';

soundEnabled.toggle(); // Toggle on/off
$soundEnabled         // Current state (boolean)
```

**Integration Points**:
- `DomainSlider.svelte`: `sliderTick` on domain slider input, `cardFlip` on flip button, `emojiPop` on keyword selection
- `FacetBar.svelte`: `facetTap` on facet slider input
- `PersonaSummary.svelte`: `cardFlip` on flip, `emojiPop` on emoji tap, `sliderTick` on gradient select
- `ArchetypePanel.svelte`: `archetypeSelect` on archetype/cipher selection
- `MobileArchetypeDrawer.svelte`: `archetypeSelect` on archetype/cipher selection

---

## 12. CRITICAL WARNINGS

1. **Score String Order**: MUST be A,C,E,N,O. See comments in `personality.ts`.

2. **Inverted Domain**: `negative_emotionality` is inverted. UI 5 = API 1.

3. **JSON Key Mismatches**: If you see fallback text like "Balanced approach to most situations", the score string order is wrong or the JSON file is missing entries.

4. **Archetype Initialization**: App starts with a random archetype. The `initialArchetypeId` is exported so ArchetypePanel can highlight it.

---

## 13. PER-ARCHETYPE DATA (Future)

The `shared/` directory serves dual purposes:
1. **Truly shared files**: Archetype-agnostic data like `domain_descriptions.json` and `keyword_behaviors.json`
2. **Default fallback files**: When per-archetype versions don't exist, these are used

Future per-archetype data structure:
```
src/lib/data/
├── norse/
│   └── persona_prompts.json    # Norse-flavored prompts
├── starwars/
│   └── persona_prompts.json    # Star Wars-flavored prompts
├── mcu/
│   └── (empty - falls back to shared)
└── shared/
    └── persona_prompts.json    # Default fallback
```

Loading logic: Check `data/{archetype-set}/` first, fall back to `data/shared/`.
