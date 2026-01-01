# Persona Builder

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.x-FF3E00?logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Svelte](https://img.shields.io/badge/Svelte-5.x-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interactive personality exploration tool built on the **Big Five Inventory-2 (BFI-2)** psychometric framework. Designed for generating and visualizing personality profiles for AI agents, chatbots, and adversarial testing scenarios.

<p align="center">
  <em>Part of the Persona suite. See also: <a href="../persona-api">persona-api</a></em>
</p>

## Purpose

While this application is designed to be engaging and interactive, its primary purpose is serious: **generating psychometrically-grounded personality configurations for AI systems**. Key use cases include:

- **Adversarial Testing**: Generate diverse personality profiles to stress-test chatbot behavior under varying emotional and behavioral configurations
- **Red Team Exercises**: Create antagonistic or edge-case personas for security and safety evaluations
- **Behavioral Consistency Validation**: Verify that AI agents maintain coherent personalities across extended interactions
- **Research**: Explore how personality dimensions map to observable behavioral patterns

## The Science

This tool is built on the **Big Five Inventory-2 (BFI-2)**, a scientifically validated personality assessment developed by Soto & John (2017). The BFI-2 measures five broad domains, each with three facets:

| Domain | Facets | What It Measures |
|--------|--------|------------------|
| **Agreeableness** | Compassion, Respectfulness, Trust | Interpersonal orientation and cooperation |
| **Conscientiousness** | Organization, Productiveness, Responsibility | Goal-directed behavior and self-discipline |
| **Extraversion** | Sociability, Assertiveness, Energy Level | Social engagement and positive emotionality |
| **Negative Emotionality** | Anxiety, Depression, Emotional Volatility | Tendency toward negative affect |
| **Open-Mindedness** | Aesthetic Sensitivity, Intellectual Curiosity, Creative Imagination | Openness to experience and ideas |

The domain correlations and facet interactions implemented here are based on peer-reviewed research, ensuring generated profiles reflect realistic personality structures rather than arbitrary combinations.

> **Note**: Summarizing decades of personality psychology into actionable system prompts inevitably involves simplification. We've prioritized empirical grounding over completeness, but acknowledge the inherent limitations of translating psychometric constructs into behavioral instructions.

## Archetypes

The application includes 20 pre-defined personality archetypes derived from the BFI-2 domain space. Each archetype represents a coherent configuration of trait levels (High, Medium, Low) that maps to recognizable behavioral patterns.

| Archetype | A | C | E | N | O | Description |
|-----------|:-:|:-:|:-:|:-:|:-:|-------------|
| **The Architect** | L | H | L | L | H | Methodical visionary, works alone on complex systems |
| **The Commander** | L | H | H | L | M | Decisive leader, results over feelings |
| **The Mediator** | H | M | L | M | H | Empathetic idealist, conflict-averse dreamer |
| **The Performer** | M | L | H | M | H | Creative extrovert, spontaneous entertainer |
| **The Analyst** | M | H | L | L | L | Systematic, traditional, solitary problem-solver |
| **The Caregiver** | H | H | M | L | M | Stable, reliable supporter of others |
| **The Adventurer** | L | L | H | L | H | Thrill-seeker, impulsive explorer |
| **The Stoic** | M | H | L | L | L | Calm, disciplined, emotionally reserved |
| **The Diplomat** | H | H | H | L | M | Charismatic peacemaker, organized networker |
| **The Rebel** | L | L | H | M | H | Nonconformist challenger, questions authority |
| **The Scholar** | M | H | L | M | H | Curious intellectual, systematic learner |
| **The Healer** | H | M | L | H | H | Deeply empathetic, emotionally attuned helper |
| **The Entrepreneur** | L | M | H | L | H | Bold risk-taker, opportunistic innovator |
| **The Sentinel** | H | H | L | M | L | Dutiful protector, tradition-keeper |
| **The Maverick** | L | L | M | L | H | Independent thinker, creative lone wolf |
| **The Host** | H | M | H | L | M | Warm social organizer, brings people together |
| **The Critic** | L | H | L | M | M | Sharp-eyed perfectionist, quality-focused |
| **The Dreamer** | M | L | L | M | H | Imaginative introvert, lives in ideas |
| **The Warrior** | L | H | H | L | L | Competitive achiever, direct and driven |
| **The Sage** | H | M | L | L | H | Wise counselor, thoughtful and open-minded |
| **The Cipher** | M | M | M | M | M | *Undefined combination (fallback for unique profiles)* |

**Legend**: A=Agreeableness, C=Conscientiousness, E=Extraversion, N=Negative Emotionality, O=Open-Mindedness
**Levels**: H=High (4-5), M=Medium (3), L=Low (1-2)

## Features

- **Interactive Sliders**: Adjust each of the 5 domains (with 3 facets each) to explore personality space
- **Real-Time Matching**: See which archetype best matches your current configuration with distance-based quality scores
- **System Prompt Generation**: Each personality configuration maps to a pre-computed system prompt for LLM instruction
- **Emoji Visualization**: Domain scores are represented with intuitive emoji gradients
- **Flip-Card UI**: Explore detailed facet descriptions and personality summaries

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Building

```bash
npm run build
npm run preview
```

## Data Sources

The personality summaries and system prompts were generated using the [persona-api](../persona-api) service, which leverages:

- The official BFI-2 60-item questionnaire
- An OWL ontology (`big5.owl`) encoding domain/facet relationships
- Pre-computed behavioral instructions for each score combination
- ML-generated personality text using Qwen 2.5 on NVIDIA infrastructure

## Architecture

```
src/
├── lib/
│   ├── components/          # Svelte components
│   │   ├── ArchetypePanel   # Left sidebar with archetype list
│   │   ├── DomainSlider     # 3D flip slider for each domain
│   │   ├── FacetBar         # Individual facet visualization
│   │   └── PersonaSummary   # Flip panel with descriptions
│   ├── data/
│   │   ├── archetypes.ts    # Archetype definitions and matching
│   │   ├── domains.ts       # BFI-2 domain configuration
│   │   ├── system_prompts.json     # Pre-computed LLM prompts
│   │   └── personality_summaries_v2.json  # Personality descriptions
│   └── stores/
│       └── personality.ts   # Reactive state management
└── routes/
    └── +page.svelte         # Main application page
```

## Related Projects

- **[persona-api](../persona-api)**: FastAPI backend for generating personality profiles and system prompts

## References

- Soto, C. J., & John, O. P. (2017). The next Big Five Inventory (BFI-2): Developing and assessing a hierarchical model with 15 facets to enhance bandwidth, fidelity, and predictive power. *Journal of Personality and Social Psychology*, 113(1), 117-143.
- Costa, P. T., & McCrae, R. R. (1992). *NEO-PI-R Professional Manual*. Psychological Assessment Resources.
- DeYoung, C. G., Quilty, L. C., & Peterson, J. B. (2007). Between facets and domains: 10 aspects of the Big Five. *Journal of Personality and Social Psychology*, 93(5), 880-896.

## License

MIT License
