# Future Ideas

## Themed Personality Summaries

The personality summaries displayed in the Prompt Panel could be themed to match the selected archetype set. Instead of generic descriptions, each set would have its own flavor text that matches the world/theme.

### How It Works

The `personality_summaries.json` and `personality_summaries_v2.json` files currently contain generic personality descriptions keyed by score string (e.g., "A2,C5,E2,N2,O2").

For themed sets, we would create additional JSON files per set:
- `personality_summaries_green_ember.json`
- `personality_summaries_v2_green_ember.json`

The UI would select the appropriate file based on the active archetype set.

### Example: A2,C5,E2,N2,O2 (Low Agreeableness, High Conscientiousness, Low Extraversion, Low Neuroticism, Low Openness)

**Generic:**
> "Punctual but reserved, prefers structured discussions over spontaneity"
> *"A perfectionist with a sharp tongue and frosty demeanor"*

**Green Ember:**
> "Maintains citadel-like discipline, speaks in measured commands rather than idle chatter"
> *"Blade-forged perfectionist, cold as castle stone"*

### Thematic Elements by Set

**Green Ember vocabulary:**
- Citadels, warrens, training grounds
- Blades, bows, battle
- The resistance, loyalty, duty
- Raptors, wolves (threats)
- The mending, healing arts
- Green ember (hope, heritage)

**Future sets could include:**
- Norse mythology: Asgard, fate, runes, sagas, honor
- Roman mythology: Senate, legions, virtus, fides, glory
- Greek mythology: Oracle, labyrinth, fate, hubris, heroes

### Implementation Notes

1. Create themed JSON files for each set
2. Modify `PersonaSummary.svelte` to select JSON based on `$archetypeSetId`
3. Generate themed summaries via LLM with world-specific prompts
4. Keep generic as fallback if themed entry doesn't exist
