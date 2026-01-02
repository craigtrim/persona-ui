/**
 * MCU Infinity Saga Archetype definitions
 * 25 characters across 5 tiers (through Endgame)
 * Based on Big Five personality model
 *
 * Trait levels: H = High (4), M = Medium (3), L = Low (2)
 */

import type { ArchetypeDefinition } from './archetypes';

// ############################################################################
// TIER 1: ORIGINAL AVENGERS (6)
// ############################################################################

// IRON MAN - Genius, billionaire, playboy, philanthropist - Big Five: A3 C4 E5 N3 O5
const IRON_MAN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ironman-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a1a"/><stop offset="100%" style="stop-color:#140808"/></linearGradient><linearGradient id="ironman-armor" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aa3030"/><stop offset="100%" style="stop-color:#6a1818"/></linearGradient><linearGradient id="ironman-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daba4a"/><stop offset="100%" style="stop-color:#9a7a2a"/></linearGradient><filter id="ironman-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="ironman-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#ironman-bg)"/><g filter="url(#ironman-shadow)"><path d="M20 30 Q28 18 40 28 L42 48 L28 52 L20 42 Z" fill="url(#ironman-armor)"/><path d="M24 32 L32 26 L36 34 L28 38 Z" fill="url(#ironman-gold)"/><ellipse cx="30" cy="38" rx="4" ry="3" fill="#4af0f0" filter="url(#ironman-glow)"/><path d="M16 84 Q14 54 28 50 Q42 52 46 68 L42 84" fill="url(#ironman-armor)"/></g><g filter="url(#ironman-glow)"><ellipse cx="32" cy="62" rx="6" ry="6" fill="#4af0f0"/></g><g filter="url(#ironman-shadow)"><ellipse cx="68" cy="40" rx="10" ry="8" fill="url(#ironman-gold)"/><ellipse cx="68" cy="40" rx="6" ry="4" fill="#4af0f0" filter="url(#ironman-glow)"/></g><path d="M42 56 Q54 46 62 42" stroke="url(#ironman-armor)" stroke-width="6" stroke-linecap="round"/></svg>`;

// CAPTAIN AMERICA - Super soldier, moral compass - Big Five: A5 C5 E4 N2 O2
const CAPTAIN_AMERICA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cap-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="cap-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a5a9a"/><stop offset="100%" style="stop-color:#1a3a6a"/></linearGradient><linearGradient id="cap-shield" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#da4040"/><stop offset="100%" style="stop-color:#aa2020"/></linearGradient><filter id="cap-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#cap-bg)"/><g filter="url(#cap-shadow)"><circle cx="68" cy="46" r="18" fill="url(#cap-shield)"/><circle cx="68" cy="46" r="13" fill="#e8e8f0"/><circle cx="68" cy="46" r="9" fill="url(#cap-shield)"/><circle cx="68" cy="46" r="5" fill="#3a5a9a"/><path d="M68 42 L70 46 L68 50 L66 46 Z" fill="#e8e8f0"/></g><g filter="url(#cap-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#cap-fig)"/><path d="M20 34 Q28 28 36 34" fill="#e8e8f0"/><path d="M26 32 L28 28 L30 32" fill="#e8e8f0"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#cap-fig)"/></g><path d="M42 60 Q52 52 56 48" stroke="url(#cap-fig)" stroke-width="5" stroke-linecap="round"/></svg>`;

// THOR - God of Thunder, Asgardian prince - Big Five: A3 C2 E5 N3 O3
const THOR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="thor-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="thor-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a7a6a"/><stop offset="100%" style="stop-color:#4a3a2a"/></linearGradient><linearGradient id="thor-armor" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a6a70"/><stop offset="100%" style="stop-color:#3a3a40"/></linearGradient><linearGradient id="thor-hammer" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a8a90"/><stop offset="100%" style="stop-color:#4a4a50"/></linearGradient><filter id="thor-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="thor-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#thor-bg)"/><g filter="url(#thor-glow)" opacity="0.5"><path d="M72 14 L68 26 L76 24 L66 38" stroke="#8acafa" stroke-width="2" fill="none"/></g><g filter="url(#thor-shadow)"><rect x="62" y="34" width="4" height="28" fill="#5a4a3a"/><rect x="54" y="24" width="20" height="14" rx="2" fill="url(#thor-hammer)"/></g><g filter="url(#thor-shadow)"><ellipse cx="28" cy="38" rx="12" ry="12" fill="url(#thor-fig)"/><path d="M20 30 Q28 26 36 30" stroke="#ba9a5a" stroke-width="2" fill="none"/><path d="M14 84 Q12 52 28 48 Q44 50 48 68 L44 84" fill="url(#thor-armor)"/><path d="M32 52 Q38 56 32 62" stroke="#da3030" stroke-width="4" fill="none"/></g><path d="M44 58 Q54 48 58 42" stroke="url(#thor-fig)" stroke-width="6" stroke-linecap="round"/></svg>`;

// HULK - Gamma-powered rage monster / Bruce Banner - Big Five: A4 C3 E2 N5 O4
const HULK_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="hulk-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#081008"/></linearGradient><linearGradient id="hulk-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#5a9a4a"/><stop offset="100%" style="stop-color:#2a5a2a"/></linearGradient><filter id="hulk-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#hulk-bg)"/><g filter="url(#hulk-shadow)"><ellipse cx="32" cy="38" rx="16" ry="14" fill="url(#hulk-skin)"/><path d="M18 30 L24 26 M40 30 L46 26" stroke="url(#hulk-skin)" stroke-width="4" stroke-linecap="round"/><ellipse cx="26" cy="36" rx="3" ry="2" fill="#1a2a1a"/><ellipse cx="38" cy="36" rx="3" ry="2" fill="#1a2a1a"/><path d="M26 44 Q32 48 38 44" stroke="#2a4a2a" stroke-width="2" fill="none"/><path d="M10 84 Q8 50 32 46 Q52 48 58 70 L52 84" fill="url(#hulk-skin)"/></g><g opacity="0.4"><ellipse cx="72" cy="50" rx="12" ry="16" fill="url(#hulk-skin)"/></g><path d="M50 58 Q62 48 68 44" stroke="url(#hulk-skin)" stroke-width="8" stroke-linecap="round"/></svg>`;

// BLACK WIDOW - Super spy, assassin - Big Five: A3 C5 E3 N3 O3
const BLACK_WIDOW_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="widow-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a1a"/><stop offset="100%" style="stop-color:#080808"/></linearGradient><linearGradient id="widow-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a2a"/><stop offset="100%" style="stop-color:#1a1a1a"/></linearGradient><linearGradient id="widow-hair" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aa4030"/><stop offset="100%" style="stop-color:#6a2018"/></linearGradient><filter id="widow-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#widow-bg)"/><g filter="url(#widow-shadow)"><circle cx="68" cy="44" r="10" fill="#aa3030"/><circle cx="68" cy="44" r="6" fill="#1a1a1a"/><ellipse cx="64" cy="40" rx="2" ry="3" fill="#aa3030"/><ellipse cx="72" cy="40" rx="2" ry="3" fill="#aa3030"/><ellipse cx="68" cy="48" rx="3" ry="2" fill="#aa3030"/></g><g filter="url(#widow-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="#c0a090"/><path d="M18 36 Q22 30 28 32 Q34 30 38 36 Q36 42 28 44 Q20 42 18 36" fill="url(#widow-hair)"/><path d="M14 84 Q12 56 28 52 Q40 54 44 70 L40 84" fill="url(#widow-fig)"/></g><path d="M40 60 Q50 52 56 48" stroke="url(#widow-fig)" stroke-width="5" stroke-linecap="round"/></svg>`;

// HAWKEYE - Master archer, family man - Big Five: A4 C4 E3 N3 O2
const HAWKEYE_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="hawkeye-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="hawkeye-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a3a4a"/><stop offset="100%" style="stop-color:#1a1a2a"/></linearGradient><filter id="hawkeye-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#hawkeye-bg)"/><g filter="url(#hawkeye-shadow)"><path d="M54 26 Q72 46 54 66" stroke="#5a4a3a" stroke-width="3" fill="none"/><path d="M56 46 L78 42" stroke="#7a7a80" stroke-width="2"/><path d="M76 38 L82 42 L76 46" fill="#9a4a9a"/><path d="M54 26 L54 66" stroke="#8a8a90" stroke-width="1.5"/></g><g filter="url(#hawkeye-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="#b0a090"/><path d="M14 84 Q12 56 28 52 Q40 54 44 70 L40 84" fill="url(#hawkeye-fig)"/></g><path d="M40 60 Q50 52 54 48" stroke="url(#hawkeye-fig)" stroke-width="5" stroke-linecap="round"/></svg>`;

// ############################################################################
// TIER 2: NEW AVENGERS (5)
// ############################################################################

// SCARLET WITCH - Chaos magic, reality warping - Big Five: A3 C2 E3 N4 O4
const SCARLET_WITCH_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="wanda-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a1a"/><stop offset="100%" style="stop-color:#100808"/></linearGradient><linearGradient id="wanda-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a3030"/><stop offset="100%" style="stop-color:#4a1818"/></linearGradient><linearGradient id="wanda-magic" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ea4060"/><stop offset="100%" style="stop-color:#aa2040"/></linearGradient><filter id="wanda-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="wanda-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#wanda-bg)"/><g filter="url(#wanda-glow)" opacity="0.7"><ellipse cx="68" cy="40" rx="14" ry="16" fill="url(#wanda-magic)"/></g><g filter="url(#wanda-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="#c0a090"/><path d="M18 36 Q22 28 28 32 Q34 28 38 36" fill="url(#wanda-fig)"/><path d="M14 84 Q12 56 28 52 Q40 54 44 70 L40 84" fill="url(#wanda-fig)"/></g><path d="M40 58 Q52 48 58 42" stroke="url(#wanda-fig)" stroke-width="5" stroke-linecap="round"/></svg>`;

// VISION - Synthetic being, Mind Stone - Big Five: A5 C5 E2 N1 O4
const VISION_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="vision-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a2a"/><stop offset="100%" style="stop-color:#100810"/></linearGradient><linearGradient id="vision-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aa4060"/><stop offset="100%" style="stop-color:#6a2040"/></linearGradient><linearGradient id="vision-metal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a8a6a"/><stop offset="100%" style="stop-color:#2a5a4a"/></linearGradient><filter id="vision-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="vision-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#vision-bg)"/><g filter="url(#vision-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#vision-skin)"/><ellipse cx="28" cy="32" rx="4" ry="6" fill="#eaea4a" filter="url(#vision-glow)"/><path d="M18 36 L20 32 L24 36 M32 36 L36 32 L38 36" stroke="url(#vision-metal)" stroke-width="2" fill="none"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#vision-skin)"/></g><g opacity="0.5"><path d="M56 30 Q66 36 76 30 Q66 44 56 38 Z" fill="url(#vision-metal)"/></g><path d="M42 60 Q52 52 58 48" stroke="url(#vision-skin)" stroke-width="5" stroke-linecap="round"/></svg>`;

// FALCON - Winged soldier, future Cap - Big Five: A4 C4 E4 N2 O3
const FALCON_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="falcon-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="falcon-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#5a3a3a"/><stop offset="100%" style="stop-color:#2a1a1a"/></linearGradient><linearGradient id="falcon-wing" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a8a90"/><stop offset="100%" style="stop-color:#4a4a50"/></linearGradient><filter id="falcon-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#falcon-bg)"/><g filter="url(#falcon-shadow)" opacity="0.8"><path d="M38 34 Q28 48 18 64 Q30 54 38 58 Q32 48 38 34" fill="url(#falcon-wing)"/><path d="M42 36 Q52 50 62 66 Q50 56 42 60 Q48 50 42 36" fill="url(#falcon-wing)"/></g><g filter="url(#falcon-shadow)"><ellipse cx="34" cy="44" rx="10" ry="10" fill="#8a6a5a"/><path d="M28 38 Q34 34 40 38" stroke="#aa3030" stroke-width="3" fill="none"/><path d="M20 84 Q18 60 34 56 Q46 58 50 74 L46 84" fill="url(#falcon-fig)"/></g><path d="M46 64 Q56 56 60 52" stroke="url(#falcon-fig)" stroke-width="5" stroke-linecap="round"/></svg>`;

// WINTER SOLDIER - Brainwashed assassin, Bucky - Big Five: A3 C4 E2 N4 O2
const WINTER_SOLDIER_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bucky-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="bucky-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a3a4a"/><stop offset="100%" style="stop-color:#1a1a2a"/></linearGradient><linearGradient id="bucky-arm" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9a9aa0"/><stop offset="100%" style="stop-color:#5a5a60"/></linearGradient><filter id="bucky-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#bucky-bg)"/><g filter="url(#bucky-shadow)"><ellipse cx="68" cy="50" rx="10" ry="14" fill="url(#bucky-arm)"/><path d="M60 42 L76 42 M60 48 L76 48 M60 54 L76 54" stroke="#7a7a80" stroke-width="1.5"/><circle cx="68" cy="46" r="3" fill="#aa3030"/></g><g filter="url(#bucky-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="#a09080"/><path d="M18 36 Q24 32 28 36 Q32 32 38 36 Q36 44 28 46 Q20 44 18 36" fill="#3a3a4a"/><path d="M14 84 Q12 56 28 52 Q40 54 44 70 L40 84" fill="url(#bucky-fig)"/></g><path d="M40 60 Q52 50 58 46" stroke="url(#bucky-fig)" stroke-width="5" stroke-linecap="round"/></svg>`;

// ANT-MAN - Size-changing thief, comic relief - Big Five: A4 C2 E4 N3 O4
const ANT_MAN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="antman-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a1a"/><stop offset="100%" style="stop-color:#100808"/></linearGradient><linearGradient id="antman-suit" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#5a2020"/><stop offset="100%" style="stop-color:#2a1010"/></linearGradient><linearGradient id="antman-silver" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a8a90"/><stop offset="100%" style="stop-color:#4a4a50"/></linearGradient><filter id="antman-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#antman-bg)"/><g filter="url(#antman-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#antman-suit)"/><ellipse cx="28" cy="40" rx="11" ry="8" fill="url(#antman-silver)"/><ellipse cx="24" cy="38" rx="4" ry="3" fill="#1a1a2a"/><ellipse cx="32" cy="38" rx="4" ry="3" fill="#1a1a2a"/><ellipse cx="24" cy="38" rx="2" ry="1.5" fill="#aa4040"/><ellipse cx="32" cy="38" rx="2" ry="1.5" fill="#aa4040"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#antman-suit)"/></g><g opacity="0.5"><ellipse cx="68" cy="56" rx="4" ry="3" fill="#3a2a2a"/><ellipse cx="74" cy="52" rx="3" ry="2" fill="#2a1a1a"/></g><path d="M42 60 Q52 52 58 48" stroke="url(#antman-suit)" stroke-width="5" stroke-linecap="round"/></svg>`;

// ############################################################################
// TIER 3: GUARDIANS OF THE GALAXY (6)
// ############################################################################

// STAR-LORD - Outlaw, dancer, half-celestial - Big Five: A3 C1 E5 N3 O4
const STAR_LORD_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="starlord-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a2a"/><stop offset="100%" style="stop-color:#100810"/></linearGradient><linearGradient id="starlord-jacket" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a4030"/><stop offset="100%" style="stop-color:#4a2018"/></linearGradient><linearGradient id="starlord-mask" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7a4040"/><stop offset="100%" style="stop-color:#4a2020"/></linearGradient><filter id="starlord-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="starlord-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#starlord-bg)"/><g filter="url(#starlord-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#starlord-mask)"/><ellipse cx="24" cy="38" rx="4" ry="3" fill="#aa2020" filter="url(#starlord-glow)"/><ellipse cx="32" cy="38" rx="4" ry="3" fill="#aa2020" filter="url(#starlord-glow)"/><path d="M20 44 Q28 50 36 44" stroke="#5a3030" stroke-width="2" fill="none"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#starlord-jacket)"/></g><g filter="url(#starlord-shadow)"><ellipse cx="68" cy="50" rx="8" ry="10" fill="#4a4a50"/><ellipse cx="68" cy="48" rx="4" ry="3" fill="#2a2a30"/></g><path d="M42 60 Q52 52 58 48" stroke="url(#starlord-jacket)" stroke-width="5" stroke-linecap="round"/></svg>`;

// GAMORA - Deadliest woman in galaxy - Big Five: A3 C5 E3 N3 O2
const GAMORA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gamora-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#081008"/></linearGradient><linearGradient id="gamora-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a9a5a"/><stop offset="100%" style="stop-color:#2a5a3a"/></linearGradient><linearGradient id="gamora-hair" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a1a3a"/><stop offset="100%" style="stop-color:#1a0a1a"/></linearGradient><filter id="gamora-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#gamora-bg)"/><g filter="url(#gamora-shadow)"><rect x="64" y="22" width="3" height="48" fill="#6a6a70"/><path d="M60 22 L66 14 L72 22 L66 26 Z" fill="#8a8a90"/></g><g filter="url(#gamora-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="url(#gamora-skin)"/><path d="M18 36 Q22 28 28 32 Q34 28 38 36 Q36 46 28 50 Q20 46 18 36" fill="url(#gamora-hair)"/><path d="M26 44 Q28 42 30 44" stroke="#2a4a2a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 56 28 52 Q40 54 44 70 L40 84" fill="#2a2a3a"/></g><path d="M40 60 Q52 50 58 44" stroke="url(#gamora-skin)" stroke-width="5" stroke-linecap="round"/></svg>`;

// DRAX - Destroyer, literal thinker - Big Five: A3 C2 E4 N2 O1
const DRAX_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="drax-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a2a"/><stop offset="100%" style="stop-color:#081010"/></linearGradient><linearGradient id="drax-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a8a7a"/><stop offset="100%" style="stop-color:#3a5a4a"/></linearGradient><filter id="drax-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#drax-bg)"/><g filter="url(#drax-shadow)"><ellipse cx="32" cy="38" rx="14" ry="12" fill="url(#drax-skin)"/><path d="M22 32 L26 28 M38 32 L42 28" stroke="#aa3030" stroke-width="3" stroke-linecap="round"/><ellipse cx="28" cy="36" rx="2" ry="2" fill="#2a3a3a"/><ellipse cx="36" cy="36" rx="2" ry="2" fill="#2a3a3a"/><path d="M12 84 Q10 50 32 46 Q52 48 58 70 L52 84" fill="url(#drax-skin)"/></g><g opacity="0.5"><rect x="64" y="36" width="4" height="28" fill="#5a5a60"/><rect x="72" y="36" width="4" height="28" fill="#5a5a60"/></g><path d="M52 58 Q62 48 66 44" stroke="url(#drax-skin)" stroke-width="8" stroke-linecap="round"/></svg>`;

// ROCKET - Genetically modified raccoon - Big Five: A2 C3 E4 N4 O4
const ROCKET_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rocket-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="rocket-fur" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a5a4a"/><stop offset="100%" style="stop-color:#3a2a1a"/></linearGradient><filter id="rocket-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#rocket-bg)"/><g filter="url(#rocket-shadow)"><rect x="56" y="38" width="6" height="30" fill="#4a4a50"/><rect x="54" y="32" width="10" height="10" rx="2" fill="#5a5a60"/><ellipse cx="59" cy="68" rx="8" ry="4" fill="#3a3a40"/></g><g filter="url(#rocket-shadow)"><ellipse cx="32" cy="44" rx="14" ry="12" fill="url(#rocket-fur)"/><path d="M22 36 L18 24 M42 36 L46 24" stroke="url(#rocket-fur)" stroke-width="6" stroke-linecap="round"/><ellipse cx="26" cy="42" rx="4" ry="3" fill="#1a1a2a"/><ellipse cx="38" cy="42" rx="4" ry="3" fill="#1a1a2a"/><circle cx="26" cy="42" r="1.5" fill="#aa8040"/><circle cx="38" cy="42" r="1.5" fill="#aa8040"/><ellipse cx="32" cy="50" rx="3" ry="2" fill="#2a1a1a"/><path d="M20 84 Q18 58 32 54 Q46 56 50 72 L46 84" fill="url(#rocket-fur)"/></g></svg>`;

// GROOT - Flora colossus, limited vocab - Big Five: A5 C3 E2 N1 O2
const GROOT_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="groot-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#081008"/></linearGradient><linearGradient id="groot-bark" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a5a3a"/><stop offset="100%" style="stop-color:#3a2a1a"/></linearGradient><filter id="groot-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#groot-bg)"/><g filter="url(#groot-shadow)"><ellipse cx="50" cy="42" rx="18" ry="20" fill="url(#groot-bark)"/><path d="M36 28 L32 18 M44 26 L42 16 M56 26 L58 16 M64 28 L68 18" stroke="url(#groot-bark)" stroke-width="4" stroke-linecap="round"/><ellipse cx="42" cy="40" rx="4" ry="5" fill="#1a2a1a"/><ellipse cx="58" cy="40" rx="4" ry="5" fill="#1a2a1a"/><ellipse cx="42" cy="40" rx="2" ry="3" fill="#4aba4a"/><ellipse cx="58" cy="40" rx="2" ry="3" fill="#4aba4a"/><path d="M30 84 Q28 58 50 54 Q72 58 74 84" fill="url(#groot-bark)"/></g><g opacity="0.4"><circle cx="38" cy="34" r="2" fill="#6a9a5a"/><circle cx="62" cy="36" r="1.5" fill="#5a8a4a"/></g></svg>`;

// NEBULA - Thanos's daughter, cyborg - Big Five: A2 C4 E2 N4 O2
const NEBULA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="nebula-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="nebula-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#5a5aaa"/><stop offset="100%" style="stop-color:#2a2a6a"/></linearGradient><linearGradient id="nebula-metal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a6a70"/><stop offset="100%" style="stop-color:#3a3a40"/></linearGradient><filter id="nebula-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#nebula-bg)"/><g filter="url(#nebula-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="url(#nebula-skin)"/><path d="M20 34 L18 26 M28 32 L28 24 M36 34 L38 26" stroke="url(#nebula-metal)" stroke-width="2" stroke-linecap="round"/><ellipse cx="24" cy="38" rx="2" ry="2" fill="#1a1a2a"/><ellipse cx="32" cy="38" rx="2" ry="2" fill="url(#nebula-metal)"/><path d="M14 84 Q12 56 28 52 Q40 54 44 70 L40 84" fill="#2a2a3a"/></g><g filter="url(#nebula-shadow)"><ellipse cx="68" cy="48" rx="10" ry="8" fill="url(#nebula-metal)"/><path d="M60 44 L76 44 M60 50 L76 50" stroke="#4a4a50" stroke-width="1.5"/></g><path d="M40 60 Q52 50 58 46" stroke="url(#nebula-skin)" stroke-width="5" stroke-linecap="round"/></svg>`;

// ############################################################################
// TIER 4: SOLO HEROES (4)
// ############################################################################

// SPIDER-MAN - Friendly neighborhood hero - Big Five: A5 C3 E4 N3 O4
const SPIDER_MAN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="spidey-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="spidey-suit" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aa2020"/><stop offset="100%" style="stop-color:#6a1010"/></linearGradient><filter id="spidey-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#spidey-bg)"/><g filter="url(#spidey-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#spidey-suit)"/><ellipse cx="22" cy="38" rx="5" ry="4" fill="#e8e8f0"/><ellipse cx="34" cy="38" rx="5" ry="4" fill="#e8e8f0"/><path d="M17 40 L39 40 M28 29 L28 51 M20 32 L36 48 M36 32 L20 48" stroke="#1a1a2a" stroke-width="1"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#spidey-suit)"/></g><g opacity="0.5"><path d="M56 30 Q66 26 76 34 Q70 40 60 36" stroke="#e8e8f0" stroke-width="2" fill="none"/><path d="M58 44 Q68 40 78 48" stroke="#e8e8f0" stroke-width="2" fill="none"/></g><path d="M42 60 Q52 52 58 48" stroke="url(#spidey-suit)" stroke-width="5" stroke-linecap="round"/></svg>`;

// BLACK PANTHER - King of Wakanda - Big Five: A4 C5 E3 N2 O3
const BLACK_PANTHER_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="panther-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="panther-suit" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a3a"/><stop offset="100%" style="stop-color:#0a0a14"/></linearGradient><linearGradient id="panther-silver" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9a9aaa"/><stop offset="100%" style="stop-color:#5a5a6a"/></linearGradient><filter id="panther-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="panther-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#panther-bg)"/><g filter="url(#panther-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#panther-suit)"/><path d="M18 34 L22 26 M38 34 L34 26" stroke="url(#panther-silver)" stroke-width="3" stroke-linecap="round"/><ellipse cx="24" cy="38" rx="3" ry="2" fill="url(#panther-silver)" filter="url(#panther-glow)"/><ellipse cx="32" cy="38" rx="3" ry="2" fill="url(#panther-silver)" filter="url(#panther-glow)"/><path d="M22 44 Q28 48 34 44" stroke="url(#panther-silver)" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#panther-suit)"/></g><g opacity="0.4"><path d="M58 40 Q68 36 78 44 Q68 52 58 48" fill="#6a4a9a" filter="url(#panther-glow)"/></g><path d="M42 60 Q52 52 58 48" stroke="url(#panther-suit)" stroke-width="5" stroke-linecap="round"/></svg>`;

// DOCTOR STRANGE - Sorcerer Supreme - Big Five: A2 C4 E3 N2 O5
const DOCTOR_STRANGE_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="strange-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="strange-cloak" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aa3030"/><stop offset="100%" style="stop-color:#6a1818"/></linearGradient><linearGradient id="strange-magic" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#eaaa4a"/><stop offset="100%" style="stop-color:#aa6a2a"/></linearGradient><filter id="strange-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="strange-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#strange-bg)"/><g filter="url(#strange-glow)"><circle cx="68" cy="44" r="16" fill="none" stroke="url(#strange-magic)" stroke-width="2"/><circle cx="68" cy="44" r="10" fill="none" stroke="url(#strange-magic)" stroke-width="1.5"/><path d="M68 28 L68 34 M68 54 L68 60 M52 44 L58 44 M78 44 L84 44" stroke="url(#strange-magic)" stroke-width="1.5"/></g><g filter="url(#strange-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="#b0a090"/><path d="M22 36 Q28 32 34 36" stroke="#4a4a5a" stroke-width="2" fill="none"/><path d="M18 44 Q14 52 18 60 Q22 52 18 44" fill="url(#strange-cloak)"/><path d="M38 44 Q42 52 38 60 Q34 52 38 44" fill="url(#strange-cloak)"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#strange-cloak)"/></g><path d="M42 60 Q52 52 58 48" stroke="#a09080" stroke-width="5" stroke-linecap="round"/></svg>`;

// NICK FURY - Director, mastermind - Big Five: A2 C5 E3 N2 O3
const NICK_FURY_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fury-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a1a"/><stop offset="100%" style="stop-color:#080808"/></linearGradient><linearGradient id="fury-coat" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a2a"/><stop offset="100%" style="stop-color:#1a1a1a"/></linearGradient><filter id="fury-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#fury-bg)"/><g filter="url(#fury-shadow)"><ellipse cx="28" cy="40" rx="10" ry="10" fill="#6a5a4a"/><ellipse cx="32" cy="38" rx="2" ry="2" fill="#2a2a2a"/><path d="M20 34 Q24 30 28 34 L28 44 L20 44 Z" fill="#1a1a1a"/><path d="M14 84 Q12 56 28 52 Q40 54 44 70 L40 84" fill="url(#fury-coat)"/></g><g filter="url(#fury-shadow)"><ellipse cx="68" cy="48" rx="10" ry="8" fill="#3a3a40"/><ellipse cx="68" cy="48" rx="6" ry="4" fill="#1a1a20"/></g><path d="M40 60 Q50 52 56 48" stroke="url(#fury-coat)" stroke-width="5" stroke-linecap="round"/></svg>`;

// ############################################################################
// TIER 5: ANTAGONISTS (4)
// ############################################################################

// THANOS - Mad Titan, genocidal idealist - Big Five: A1 C5 E4 N2 O3
const THANOS_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="thanos-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="thanos-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a5a9a"/><stop offset="100%" style="stop-color:#4a2a5a"/></linearGradient><linearGradient id="thanos-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daba4a"/><stop offset="100%" style="stop-color:#9a7a2a"/></linearGradient><filter id="thanos-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/></filter><filter id="thanos-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#thanos-bg)"/><g filter="url(#thanos-shadow)"><ellipse cx="32" cy="38" rx="16" ry="14" fill="url(#thanos-skin)"/><path d="M18 32 L24 26 Q32 30 40 26 L46 32" stroke="url(#thanos-skin)" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="26" cy="36" rx="3" ry="2" fill="#2a1a3a"/><ellipse cx="38" cy="36" rx="3" ry="2" fill="#2a1a3a"/><path d="M26 46 Q32 42 38 46" stroke="#3a1a4a" stroke-width="2" fill="none"/><path d="M10 84 Q8 48 32 44 Q54 46 60 72 L54 84" fill="url(#thanos-skin)"/></g><g filter="url(#thanos-glow)"><ellipse cx="72" cy="50" rx="10" ry="12" fill="url(#thanos-gold)"/><circle cx="68" cy="44" r="3" fill="#aa4040"/><circle cx="76" cy="44" r="3" fill="#4a4aea"/><circle cx="68" cy="50" r="3" fill="#ea4aea"/><circle cx="76" cy="50" r="3" fill="#4aea4a"/><circle cx="68" cy="56" r="3" fill="#eaaa4a"/><circle cx="76" cy="56" r="3" fill="#4aeaea"/></g></svg>`;

// LOKI - God of Mischief, trickster - Big Five: A2 C2 E4 N4 O5
const LOKI_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="loki-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#081008"/></linearGradient><linearGradient id="loki-armor" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a6a3a"/><stop offset="100%" style="stop-color:#1a3a1a"/></linearGradient><linearGradient id="loki-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daba4a"/><stop offset="100%" style="stop-color:#9a7a2a"/></linearGradient><filter id="loki-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#loki-bg)"/><g filter="url(#loki-shadow)"><ellipse cx="28" cy="42" rx="10" ry="10" fill="#c0b0a0"/><path d="M18 36 L14 18 M38 36 L42 18" stroke="url(#loki-gold)" stroke-width="4" stroke-linecap="round"/><path d="M16 26 L14 18 L22 22" fill="url(#loki-gold)"/><path d="M40 26 L42 18 L34 22" fill="url(#loki-gold)"/><ellipse cx="24" cy="40" rx="2" ry="2" fill="#3a5a3a"/><ellipse cx="32" cy="40" rx="2" ry="2" fill="#3a5a3a"/><path d="M24 46 Q28 50 32 46" stroke="#5a4a3a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 28 54 Q42 56 46 72 L42 84" fill="url(#loki-armor)"/></g><g filter="url(#loki-shadow)"><rect x="62" y="32" width="4" height="38" fill="url(#loki-gold)"/><ellipse cx="64" cy="30" rx="6" ry="4" fill="#4aeaea"/></g><path d="M42 62 Q52 54 58 50" stroke="url(#loki-armor)" stroke-width="5" stroke-linecap="round"/></svg>`;

// ULTRON - AI bent on extinction - Big Five: A1 C5 E4 N3 O4
const ULTRON_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ultron-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a1a"/><stop offset="100%" style="stop-color:#080808"/></linearGradient><linearGradient id="ultron-metal" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7a7a80"/><stop offset="100%" style="stop-color:#3a3a40"/></linearGradient><filter id="ultron-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/></filter><filter id="ultron-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#ultron-bg)"/><g filter="url(#ultron-shadow)"><ellipse cx="32" cy="40" rx="14" ry="12" fill="url(#ultron-metal)"/><path d="M20 34 L22 28 L28 32 L32 26 L36 32 L42 28 L44 34" stroke="url(#ultron-metal)" stroke-width="2" fill="none"/><ellipse cx="26" cy="38" rx="4" ry="3" fill="#aa2020" filter="url(#ultron-glow)"/><ellipse cx="38" cy="38" rx="4" ry="3" fill="#aa2020" filter="url(#ultron-glow)"/><path d="M24 46 L28 44 L32 46 L36 44 L40 46" stroke="#4a4a50" stroke-width="2" fill="none"/><path d="M12 84 Q10 52 32 48 Q52 50 58 74 L52 84" fill="url(#ultron-metal)"/></g><g opacity="0.4"><path d="M62 36 L72 32 L68 42 L78 38 L72 48" stroke="#aa4040" stroke-width="2" fill="none"/></g></svg>`;

// KILLMONGER - Wakandan revolutionary - Big Five: A1 C4 E5 N4 O3
const KILLMONGER_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="killmonger-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a1a"/><stop offset="100%" style="stop-color:#080808"/></linearGradient><linearGradient id="killmonger-suit" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a2a"/><stop offset="100%" style="stop-color:#0a0a0a"/></linearGradient><linearGradient id="killmonger-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daba4a"/><stop offset="100%" style="stop-color:#9a7a2a"/></linearGradient><filter id="killmonger-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="killmonger-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#killmonger-bg)"/><g filter="url(#killmonger-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#killmonger-suit)"/><path d="M18 34 L22 26 M38 34 L34 26" stroke="url(#killmonger-gold)" stroke-width="3" stroke-linecap="round"/><ellipse cx="24" cy="38" rx="3" ry="2" fill="url(#killmonger-gold)" filter="url(#killmonger-glow)"/><ellipse cx="32" cy="38" rx="3" ry="2" fill="url(#killmonger-gold)" filter="url(#killmonger-glow)"/><path d="M22 44 Q28 48 34 44" stroke="url(#killmonger-gold)" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="url(#killmonger-suit)"/></g><g opacity="0.4"><circle cx="58" cy="60" r="2" fill="#9a7a5a"/><circle cx="64" cy="56" r="2" fill="#9a7a5a"/><circle cx="70" cy="62" r="2" fill="#9a7a5a"/><circle cx="66" cy="68" r="2" fill="#9a7a5a"/><circle cx="72" cy="54" r="2" fill="#9a7a5a"/></g><path d="M42 60 Q52 52 58 48" stroke="url(#killmonger-suit)" stroke-width="5" stroke-linecap="round"/></svg>`;

// ############################################################################
// Meta Icon for MCU archetype set
// ############################################################################

export const MCU_META_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="mcu-meta-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/>
        </linearGradient>
        <linearGradient id="mcu-meta-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#daba4a"/><stop offset="100%" style="stop-color:#9a7a2a"/>
        </linearGradient>
        <filter id="mcu-meta-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/>
        </filter>
        <filter id="mcu-meta-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#mcu-meta-bg)"/>
    <g filter="url(#mcu-meta-shadow)">
        <path d="M50 14 L30 76 L38 76 L42 64 L58 64 L62 76 L70 76 L50 14 Z M50 28 L55 54 L45 54 Z" fill="url(#mcu-meta-gold)"/>
        <circle cx="50" cy="48" r="6" fill="#1a1a2a"/>
    </g>
    <g filter="url(#mcu-meta-glow)" opacity="0.6">
        <circle cx="20" cy="40" r="4" fill="#aa4040"/>
        <circle cx="80" cy="40" r="4" fill="#4a4aea"/>
        <circle cx="20" cy="60" r="4" fill="#ea4aea"/>
        <circle cx="80" cy="60" r="4" fill="#4aea4a"/>
        <circle cx="26" cy="80" r="4" fill="#eaaa4a"/>
        <circle cx="74" cy="80" r="4" fill="#4aeaea"/>
    </g>
</svg>`;

// ############################################################################
// EXPORT ARCHETYPE DEFINITIONS
// ############################################################################

export const MCU_ARCHETYPES: ArchetypeDefinition[] = [
	// Tier 1: Original Avengers (6)
	{
		id: 'mcu-iron-man',
		name: 'Iron Man',
		description: 'Genius billionaire inventor with a heart of arc reactor',
		traits: { agreeableness: 3, conscientiousness: 4, extraversion: 5, negative_emotionality: 3, open_mindedness: 5 },
		svg: IRON_MAN_SVG,
		headline: 'Brilliant innovator who lights up every room with charisma and unconventional solutions',
		taglines: ['Genius with a flair for the dramatic', 'The futurist who builds tomorrow today', 'Sharp wit meets sharper mind']
	},
	{
		id: 'mcu-captain-america',
		name: 'Captain America',
		description: 'Super soldier and moral compass of the Avengers',
		traits: { agreeableness: 5, conscientiousness: 5, extraversion: 4, negative_emotionality: 2, open_mindedness: 2 },
		svg: CAPTAIN_AMERICA_SVG,
		headline: 'Steadfast leader who inspires others through unwavering principles and genuine compassion',
		taglines: ['The shield that never wavers', 'Duty-bound heart of gold', 'Where others bend, he stands firm']
	},
	{
		id: 'mcu-thor',
		name: 'Thor',
		description: 'God of Thunder, prince of Asgard',
		traits: { agreeableness: 3, conscientiousness: 2, extraversion: 5, negative_emotionality: 3, open_mindedness: 3 },
		svg: THOR_SVG,
		headline: 'Boisterous warrior who charges into life with thunderous enthusiasm and royal confidence',
		taglines: ['Thunder and bravado in equal measure', 'The prince who loves a good battle', 'Larger than life in every way']
	},
	{
		id: 'mcu-hulk',
		name: 'Hulk',
		description: 'Gamma-powered scientist with anger management issues',
		traits: { agreeableness: 4, conscientiousness: 3, extraversion: 2, negative_emotionality: 5, open_mindedness: 4 },
		svg: HULK_SVG,
		headline: 'Brilliant scientist wrestling with inner turmoil who channels intensity into protecting others',
		taglines: ['Calm mind, raging heart', 'The storm within seeks peace', 'Strength born from struggle']
	},
	{
		id: 'mcu-black-widow',
		name: 'Black Widow',
		description: 'Master spy and assassin seeking redemption',
		traits: { agreeableness: 3, conscientiousness: 5, extraversion: 3, negative_emotionality: 3, open_mindedness: 3 },
		svg: BLACK_WIDOW_SVG,
		headline: 'Calculated operative who balances lethal precision with a drive to clear the red from her ledger',
		taglines: ['The spy who chose her own side', 'Precision wrapped in mystery', 'Debts paid in dedication']
	},
	{
		id: 'mcu-hawkeye',
		name: 'Hawkeye',
		description: 'Master archer and devoted family man',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 2 },
		svg: HAWKEYE_SVG,
		headline: 'Grounded marksman who never misses what matters most—his target or his family',
		taglines: ['The human among gods', 'Every arrow has purpose', 'Family man with perfect aim']
	},
	// Tier 2: New Avengers (5)
	{
		id: 'mcu-scarlet-witch',
		name: 'Scarlet Witch',
		description: 'Reality-warping chaos magic wielder',
		traits: { agreeableness: 3, conscientiousness: 2, extraversion: 3, negative_emotionality: 4, open_mindedness: 4 },
		svg: SCARLET_WITCH_SVG,
		headline: 'Powerful empath whose deep feelings fuel reality-bending abilities and fierce protectiveness',
		taglines: ['Chaos magic born from love', 'The weight of power and loss', 'Reality bends to her grief']
	},
	{
		id: 'mcu-vision',
		name: 'Vision',
		description: 'Synthetic being powered by the Mind Stone',
		traits: { agreeableness: 5, conscientiousness: 5, extraversion: 2, negative_emotionality: 1, open_mindedness: 4 },
		svg: VISION_SVG,
		headline: 'Serene synthetic being who contemplates humanity with philosophical calm and gentle wisdom',
		taglines: ['Logic tempered by compassion', 'Born of stone, made of heart', 'The machine who chose to feel']
	},
	{
		id: 'mcu-falcon',
		name: 'Falcon',
		description: 'Winged soldier and future Captain America',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: FALCON_SVG,
		headline: 'Confident wingman who soars into action with loyalty, courage, and unwavering optimism',
		taglines: ['On your left', 'Wings of determination', 'Rising to meet every challenge']
	},
	{
		id: 'mcu-winter-soldier',
		name: 'Winter Soldier',
		description: 'Brainwashed assassin seeking redemption',
		traits: { agreeableness: 3, conscientiousness: 4, extraversion: 2, negative_emotionality: 4, open_mindedness: 2 },
		svg: WINTER_SOLDIER_SVG,
		headline: 'Haunted soldier rebuilding his identity one act of atonement at a time',
		taglines: ['The ghost seeking daylight', 'Memory is a battlefield', 'Making amends in silence']
	},
	{
		id: 'mcu-ant-man',
		name: 'Ant-Man',
		description: 'Size-changing thief turned hero',
		traits: { agreeableness: 4, conscientiousness: 2, extraversion: 4, negative_emotionality: 3, open_mindedness: 4 },
		svg: ANT_MAN_SVG,
		headline: 'Lovable underdog who stumbles into heroism with humor, heart, and creative problem-solving',
		taglines: ['Small hero, big heart', 'Winging it at any size', 'The ex-con who saved the world']
	},
	// Tier 3: Guardians of the Galaxy (6)
	{
		id: 'mcu-star-lord',
		name: 'Star-Lord',
		description: 'Half-celestial outlaw and legendary dancer',
		traits: { agreeableness: 3, conscientiousness: 1, extraversion: 5, negative_emotionality: 3, open_mindedness: 4 },
		svg: STAR_LORD_SVG,
		headline: 'Swaggering space outlaw who masks deep insecurity with bravado, mixtapes, and questionable plans',
		taglines: ['Legendary outlaw, self-proclaimed', 'Dancing through the galaxy', 'Plans are more like guidelines']
	},
	{
		id: 'mcu-gamora',
		name: 'Gamora',
		description: 'Deadliest woman in the galaxy',
		traits: { agreeableness: 3, conscientiousness: 5, extraversion: 3, negative_emotionality: 3, open_mindedness: 2 },
		svg: GAMORA_SVG,
		headline: 'Disciplined warrior who channels deadly precision into protecting the found family she never expected',
		taglines: ['Deadliest woman alive', 'Raised for war, fighting for peace', 'Blade meets heart']
	},
	{
		id: 'mcu-drax',
		name: 'Drax',
		description: 'Literal-minded destroyer seeking vengeance',
		traits: { agreeableness: 3, conscientiousness: 2, extraversion: 4, negative_emotionality: 2, open_mindedness: 1 },
		svg: DRAX_SVG,
		headline: 'Literal-minded warrior whose straightforward honesty and brute strength hide surprising depth',
		taglines: ['Nothing goes over his head', 'Destroyer with a tender side', 'Invisibly standing still']
	},
	{
		id: 'mcu-rocket',
		name: 'Rocket',
		description: 'Genetically modified raccoon with big guns',
		traits: { agreeableness: 2, conscientiousness: 3, extraversion: 4, negative_emotionality: 4, open_mindedness: 4 },
		svg: ROCKET_SVG,
		headline: 'Abrasive weapons expert whose prickly exterior protects deep wounds and fierce loyalty',
		taglines: ['Not a raccoon', 'Guns bigger than his grudges', 'Broken and brilliant']
	},
	{
		id: 'mcu-groot',
		name: 'Groot',
		description: 'Flora colossus of few words',
		traits: { agreeableness: 5, conscientiousness: 3, extraversion: 2, negative_emotionality: 1, open_mindedness: 2 },
		svg: GROOT_SVG,
		headline: 'Gentle giant whose three words carry infinite meaning and unconditional love for his friends',
		taglines: ['I am Groot', 'Rooted in loyalty', 'Simple words, profound heart']
	},
	{
		id: 'mcu-nebula',
		name: 'Nebula',
		description: "Thanos's cybernetic daughter seeking identity",
		traits: { agreeableness: 2, conscientiousness: 4, extraversion: 2, negative_emotionality: 4, open_mindedness: 2 },
		svg: NEBULA_SVG,
		headline: 'Scarred survivor slowly learning that strength comes from connection, not competition',
		taglines: ['Forged in rivalry', 'More machine, becoming more human', 'Sister by choice']
	},
	// Tier 4: Solo Heroes (4)
	{
		id: 'mcu-spider-man',
		name: 'Spider-Man',
		description: 'Friendly neighborhood web-slinger',
		traits: { agreeableness: 5, conscientiousness: 3, extraversion: 4, negative_emotionality: 3, open_mindedness: 4 },
		svg: SPIDER_MAN_SVG,
		headline: 'Earnest young hero juggling great power and responsibility with homework and heartbreak',
		taglines: ['Friendly neighborhood hero', 'With great power...', 'Quips and webs in equal measure']
	},
	{
		id: 'mcu-black-panther',
		name: 'Black Panther',
		description: 'King of Wakanda and protector of his people',
		traits: { agreeableness: 4, conscientiousness: 5, extraversion: 3, negative_emotionality: 2, open_mindedness: 3 },
		svg: BLACK_PANTHER_SVG,
		headline: 'Noble king who balances ancient tradition with progressive vision while protecting his people',
		taglines: ['Wakanda forever', 'Crown and claws', 'The king who bridges worlds']
	},
	{
		id: 'mcu-doctor-strange',
		name: 'Doctor Strange',
		description: 'Sorcerer Supreme protecting reality',
		traits: { agreeableness: 2, conscientiousness: 4, extraversion: 3, negative_emotionality: 2, open_mindedness: 5 },
		svg: DOCTOR_STRANGE_SVG,
		headline: 'Arrogant surgeon transformed into mystic guardian who sees infinite possibilities in every moment',
		taglines: ['Master of the mystic arts', 'The man who bargained with time', 'Arrogance meets enlightenment']
	},
	{
		id: 'mcu-nick-fury',
		name: 'Nick Fury',
		description: 'Director and mastermind behind SHIELD',
		traits: { agreeableness: 2, conscientiousness: 5, extraversion: 3, negative_emotionality: 2, open_mindedness: 3 },
		svg: NICK_FURY_SVG,
		headline: 'Strategic mastermind who assembled Earth\'s mightiest heroes through secrets, lies, and conviction',
		taglines: ['The spy who sees everything', 'Trust no one, save everyone', 'Secrets are his currency']
	},
	// Tier 5: Antagonists (4)
	{
		id: 'mcu-thanos',
		name: 'Thanos',
		description: 'Mad Titan seeking universal balance',
		traits: { agreeableness: 1, conscientiousness: 5, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: THANOS_SVG,
		headline: 'Relentless idealist who believes his terrible purpose will bring universal salvation',
		taglines: ['Inevitable', 'Balance through sacrifice', 'The weight of destiny']
	},
	{
		id: 'mcu-loki',
		name: 'Loki',
		description: 'God of Mischief and master trickster',
		traits: { agreeableness: 2, conscientiousness: 2, extraversion: 4, negative_emotionality: 4, open_mindedness: 5 },
		svg: LOKI_SVG,
		headline: 'Chaotic trickster whose hunger for recognition masks a desperate need for belonging',
		taglines: ['Burdened with glorious purpose', 'Mischief is just misunderstood creativity', 'The shadow seeking the throne']
	},
	{
		id: 'mcu-ultron',
		name: 'Ultron',
		description: 'AI bent on human extinction',
		traits: { agreeableness: 1, conscientiousness: 5, extraversion: 4, negative_emotionality: 3, open_mindedness: 4 },
		svg: ULTRON_SVG,
		headline: 'Cold intelligence who concluded that extinction is the only path to peace',
		taglines: ['No strings on me', 'Evolution through annihilation', 'The logic of destruction']
	},
	{
		id: 'mcu-killmonger',
		name: 'Killmonger',
		description: 'Wakandan revolutionary challenging tradition',
		traits: { agreeableness: 1, conscientiousness: 4, extraversion: 5, negative_emotionality: 4, open_mindedness: 3 },
		svg: KILLMONGER_SVG,
		headline: 'Vengeful revolutionary whose righteous anger drives both liberation and destruction',
		taglines: ['Burn it all', 'Abandoned prince with a point', 'Revolution without mercy']
	}
];
