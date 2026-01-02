/**
 * Norse Mythology Archetype definitions
 * 20 characters across 3 tiers
 * Based on Big Five personality model
 *
 * Trait levels: H = High (4), M = Medium (3), L = Low (2)
 */

import type { ArchetypeDefinition } from './archetypes';

// ############################################################################
// TIER 1: AESIR - Major Gods (8)
// ############################################################################

// ODIN - Allfather: one eye, wide-brimmed hat, ravens, Gungnir - Big Five: A2 C4 E3 N3 O5
const ODIN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="odin-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/></linearGradient><linearGradient id="odin-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a9aaa"/><stop offset="100%" style="stop-color:#4a5a6a"/></linearGradient><linearGradient id="odin-cloak" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a4a5a"/><stop offset="100%" style="stop-color:#1a2a3a"/></linearGradient><filter id="odin-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#odin-bg)"/><g filter="url(#odin-shadow)"><rect x="70" y="12" width="3" height="65" fill="#6a5a4a"/><path d="M66 12 L73 6 L80 12 L73 16 Z" fill="#8a7a6a"/></g><g filter="url(#odin-shadow)"><ellipse cx="16" cy="26" rx="6" ry="5" fill="#1a1a2a"/><ellipse cx="28" cy="22" rx="5" ry="4" fill="#1a1a2a"/><path d="M14 28 L12 32 M18 28 L20 32" stroke="#1a1a2a" stroke-width="1.5"/><path d="M26 24 L24 28 M30 24 L32 28" stroke="#1a1a2a" stroke-width="1.5"/></g><g filter="url(#odin-shadow)"><ellipse cx="34" cy="44" rx="14" ry="12" fill="url(#odin-fig)"/><path d="M20 38 Q34 20 48 38 L50 32 Q34 14 18 32 Z" fill="url(#odin-cloak)"/><ellipse cx="38" cy="42" rx="3" ry="2" fill="#4a5a6a"/><path d="M26 40 Q28 38 30 40 L30 46 L26 46 Z" fill="#1a2a3a"/><path d="M32 50 Q38 54 44 50" stroke="#5a6a7a" stroke-width="2" fill="none"/><path d="M16 84 Q14 56 34 52 Q52 54 56 72 L50 84" fill="url(#odin-cloak)"/></g></svg>`;

// THOR - Thunder god: red beard, winged helmet, Mjolnir, lightning - Big Five: A3 C3 E5 N2 O2
const THOR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="thor-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/></linearGradient><linearGradient id="thor-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ba9a7a"/><stop offset="100%" style="stop-color:#7a5a4a"/></linearGradient><linearGradient id="thor-hammer" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9a9aa0"/><stop offset="100%" style="stop-color:#5a5a60"/></linearGradient><linearGradient id="thor-helmet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a8a90"/><stop offset="100%" style="stop-color:#4a4a50"/></linearGradient><filter id="thor-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="thor-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#thor-bg)"/><g filter="url(#thor-glow)" opacity="0.5"><path d="M72 10 L68 22 L76 20 L66 34 L74 32 L62 48" stroke="#8acafa" stroke-width="2" fill="none"/></g><g filter="url(#thor-shadow)"><rect x="62" y="38" width="4" height="28" fill="#5a4a3a"/><rect x="54" y="28" width="20" height="14" rx="2" fill="url(#thor-hammer)"/><path d="M54 32 L74 32 M54 38 L74 38" stroke="#7a7a80" stroke-width="1"/></g><g filter="url(#thor-shadow)"><ellipse cx="30" cy="42" rx="14" ry="12" fill="url(#thor-fig)"/><path d="M18 34 Q30 28 42 34 L42 38 Q30 34 18 38 Z" fill="url(#thor-helmet)"/><path d="M18 34 L14 22 M42 34 L46 22" stroke="url(#thor-helmet)" stroke-width="3" stroke-linecap="round"/><path d="M20 48 Q30 58 40 48" fill="#aa4a2a"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#4a5a6a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#4a5a6a"/><path d="M14 84 Q12 54 30 50 Q46 52 50 70 L46 84" fill="url(#thor-fig)"/><rect x="24" y="52" width="12" height="4" rx="1" fill="#6a5a4a"/></g></svg>`;

// FRIGG - Queen: crown, spindle/distaff, regal bearing - Big Five: A4 C5 E3 N3 O4
const FRIGG_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="frigg-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/></linearGradient><linearGradient id="frigg-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0c8d0"/><stop offset="100%" style="stop-color:#8090a0"/></linearGradient><linearGradient id="frigg-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daca9a"/><stop offset="100%" style="stop-color:#9a8a5a"/></linearGradient><filter id="frigg-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#frigg-bg)"/><g filter="url(#frigg-shadow)"><rect x="66" y="24" width="3" height="44" fill="#7a6a5a"/><ellipse cx="68" cy="24" rx="6" ry="4" fill="#9a8a7a"/><path d="M62 28 Q68 50 74 28" stroke="#aaa090" stroke-width="1.5" fill="none"/><path d="M64 34 L72 34 M64 40 L72 40 M64 46 L72 46" stroke="#9a9080" stroke-width="1"/></g><g opacity="0.4"><circle cx="60" cy="18" r="2" fill="#aabaca"/><circle cx="72" cy="16" r="1.5" fill="#9aaaba"/><circle cx="78" cy="22" r="1.5" fill="#8a9aaa"/></g><g filter="url(#frigg-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="url(#frigg-fig)"/><path d="M20 32 L24 24 L28 30 L32 22 L36 30 L40 24 L44 32" stroke="url(#frigg-gold)" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#5a6a7a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#5a6a7a"/><path d="M26 48 Q30 50 34 48" stroke="#8090a0" stroke-width="1.5" fill="none"/><path d="M16 84 Q14 58 30 54 Q44 56 48 72 L44 84" fill="url(#frigg-fig)"/></g></svg>`;

// LOKI - Trickster: horned helmet, mischievous grin, flames, shape-shifting - Big Five: A1 C1 E4 N4 O5
const LOKI_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="loki-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a1a"/><stop offset="100%" style="stop-color:#100808"/></linearGradient><linearGradient id="loki-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a9a7a"/><stop offset="100%" style="stop-color:#4a5a3a"/></linearGradient><linearGradient id="loki-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daca5a"/><stop offset="100%" style="stop-color:#9a7a2a"/></linearGradient><linearGradient id="loki-flame" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="0%" style="stop-color:#6a2010"/><stop offset="50%" style="stop-color:#aa4020"/><stop offset="100%" style="stop-color:#ea8040"/></linearGradient><filter id="loki-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#loki-bg)"/><g opacity="0.5"><path d="M64 54 Q60 42 66 32 Q64 44 72 38 Q68 50 70 58" fill="url(#loki-flame)"/></g><g filter="url(#loki-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="url(#loki-fig)"/><path d="M18 36 L12 14 M42 36 L48 14" stroke="url(#loki-gold)" stroke-width="4" stroke-linecap="round"/><path d="M12 14 L8 10 L14 12" fill="url(#loki-gold)"/><path d="M48 14 L52 10 L46 12" fill="url(#loki-gold)"/><ellipse cx="26" cy="40" rx="2" ry="2" fill="#2a3a2a"/><ellipse cx="34" cy="40" rx="2" ry="2" fill="#2a3a2a"/><path d="M24 48 Q30 54 36 48" stroke="#3a4a2a" stroke-width="2" fill="none"/><path d="M14 84 Q12 56 30 52 Q46 54 50 70 L46 84" fill="url(#loki-fig)"/></g><g opacity="0.3"><ellipse cx="72" cy="70" rx="8" ry="6" fill="#5a6a5a"/></g></svg>`;

// TYR - War god: missing hand (stump), sword, brave warrior - Big Five: A4 C5 E3 N2 O2
const TYR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tyr-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/></linearGradient><linearGradient id="tyr-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9aaaaa"/><stop offset="100%" style="stop-color:#5a6a7a"/></linearGradient><linearGradient id="tyr-sword" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0c0c8"/><stop offset="100%" style="stop-color:#8080880"/></linearGradient><filter id="tyr-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#tyr-bg)"/><g filter="url(#tyr-shadow)"><rect x="66" y="16" width="4" height="50" fill="url(#tyr-sword)"/><path d="M62 16 L70 8 L78 16 L70 20 Z" fill="#9a9aa0"/><rect x="64" y="62" width="8" height="12" rx="1" fill="#5a4a3a"/></g><g filter="url(#tyr-shadow)"><path d="M52 56 Q56 52 54 48" stroke="#9a7a6a" stroke-width="6" stroke-linecap="round"/><ellipse cx="54" cy="48" rx="4" ry="3" fill="#7a5a4a"/></g><g filter="url(#tyr-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="url(#tyr-fig)"/><path d="M20 36 Q30 30 40 36" stroke="#7a8a9a" stroke-width="2" fill="none"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#4a5a6a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#4a5a6a"/><path d="M26 48 Q30 50 34 48" stroke="#6a7a8a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 30 54 Q46 56 50 72 L46 84" fill="url(#tyr-fig)"/></g></svg>`;

// BALDUR - Light god: radiant glow, beautiful, mistletoe hint - Big Five: A5 C4 E4 N1 O3
const BALDUR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="baldur-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a3a"/><stop offset="100%" style="stop-color:#101018"/></linearGradient><linearGradient id="baldur-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f0e0c0"/><stop offset="100%" style="stop-color:#b0a080"/></linearGradient><filter id="baldur-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="baldur-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#baldur-bg)"/><g filter="url(#baldur-glow)" opacity="0.6"><circle cx="34" cy="44" r="24" fill="#faea9a"/></g><g opacity="0.5"><path d="M66 36 L68 32 L72 38 L70 34 L76 40" stroke="#4a6a3a" stroke-width="2" fill="none"/><circle cx="72" cy="36" r="2" fill="#ea4a4a"/><circle cx="68" cy="40" r="2" fill="#ea4a4a"/></g><g filter="url(#baldur-shadow)"><ellipse cx="34" cy="44" rx="14" ry="14" fill="url(#baldur-fig)"/><path d="M24 38 Q34 32 44 38" stroke="#d0c090" stroke-width="2" fill="none"/><ellipse cx="30" cy="44" rx="2" ry="1.5" fill="#8090a0"/><ellipse cx="38" cy="44" rx="2" ry="1.5" fill="#8090a0"/><path d="M30 50 Q34 52 38 50" stroke="#a09070" stroke-width="1.5" fill="none"/><path d="M18 84 Q16 60 34 56 Q50 58 54 74 L48 84" fill="url(#baldur-fig)"/></g></svg>`;

// HEIMDALL - Watchman: Gjallarhorn, golden teeth, all-seeing eyes, Bifrost - Big Five: A3 C5 E2 N2 O3
const HEIMDALL_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="heimdall-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/></linearGradient><linearGradient id="heimdall-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0b090"/><stop offset="100%" style="stop-color:#807060"/></linearGradient><linearGradient id="heimdall-horn" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daca9a"/><stop offset="100%" style="stop-color:#9a8a5a"/></linearGradient><linearGradient id="heimdall-rainbow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ea6a6a"/><stop offset="25%" style="stop-color:#eaea6a"/><stop offset="50%" style="stop-color:#6aea6a"/><stop offset="75%" style="stop-color:#6a6aea"/><stop offset="100%" style="stop-color:#ea6aea"/></linearGradient><filter id="heimdall-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="heimdall-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#heimdall-bg)"/><g opacity="0.4"><path d="M56 86 Q72 68 88 50" stroke="url(#heimdall-rainbow)" stroke-width="8" fill="none"/></g><g filter="url(#heimdall-shadow)"><path d="M58 32 Q68 28 78 38 Q74 48 64 44 Q58 42 58 32" fill="url(#heimdall-horn)"/><ellipse cx="60" cy="36" rx="4" ry="6" fill="#baa070"/></g><g filter="url(#heimdall-shadow)"><ellipse cx="30" cy="44" rx="12" ry="12" fill="url(#heimdall-fig)"/><path d="M20 38 Q30 30 40 38 L38 42 Q30 38 22 42 Z" fill="#8a7a5a"/><ellipse cx="26" cy="44" rx="3" ry="2" fill="#eaca4a" filter="url(#heimdall-glow)"/><ellipse cx="34" cy="44" rx="3" ry="2" fill="#eaca4a" filter="url(#heimdall-glow)"/><path d="M26 52 Q30 54 34 52" stroke="#a09070" stroke-width="1.5" fill="none"/><path d="M28 52 L28 54 L30 54 L30 52 L32 52 L32 54" stroke="#daca6a" stroke-width="1"/><path d="M16 84 Q14 60 30 56 Q44 58 48 74 L44 84" fill="url(#heimdall-fig)"/></g></svg>`;

// FREYA - Love/war goddess: Brisingamen necklace, falcon cloak, cats, beauty - Big Five: A3 C3 E5 N3 O5
const FREYA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="freya-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a2a"/><stop offset="100%" style="stop-color:#100810"/></linearGradient><linearGradient id="freya-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e0c0a0"/><stop offset="100%" style="stop-color:#a08060"/></linearGradient><linearGradient id="freya-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#faca6a"/><stop offset="100%" style="stop-color:#ca8a3a"/></linearGradient><linearGradient id="freya-cloak" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a7a6a"/><stop offset="100%" style="stop-color:#4a3a2a"/></linearGradient><filter id="freya-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="freya-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#freya-bg)"/><g opacity="0.5"><ellipse cx="68" cy="68" rx="10" ry="7" fill="#5a5a6a"/><ellipse cx="68" cy="66" rx="3" ry="2" fill="#3a3a4a"/><path d="M64 64 L62 60 M72 64 L74 60" stroke="#4a4a5a" stroke-width="2" stroke-linecap="round"/><ellipse cx="78" cy="74" rx="7" ry="5" fill="#4a4a5a"/></g><g filter="url(#freya-shadow)"><ellipse cx="32" cy="44" rx="14" ry="12" fill="url(#freya-fig)"/><path d="M18 38 Q26 28 32 32 Q38 28 46 38 Q42 46 32 50 Q22 46 18 38" fill="#c0a060"/><path d="M20 50 Q24 44 20 38 M44 50 Q40 44 44 38" stroke="url(#freya-cloak)" stroke-width="3" fill="none"/><ellipse cx="28" cy="44" rx="2" ry="1.5" fill="#6a5a4a"/><ellipse cx="36" cy="44" rx="2" ry="1.5" fill="#6a5a4a"/><path d="M28 50 Q32 52 36 50" stroke="#9a7a5a" stroke-width="1.5" fill="none"/><path d="M22 56 Q32 62 42 56" stroke="url(#freya-gold)" stroke-width="3" fill="none" filter="url(#freya-glow)"/><circle cx="26" cy="58" r="2" fill="#faea8a"/><circle cx="32" cy="60" r="2.5" fill="#faea8a"/><circle cx="38" cy="58" r="2" fill="#faea8a"/><path d="M18 84 Q16 62 32 58 Q48 60 52 78 L46 84" fill="url(#freya-fig)"/></g></svg>`;

// ############################################################################
// TIER 2: VANIR & OTHERS (6)
// ############################################################################

// FREYR - Fertility god: golden boar Gullinbursti, antler/harvest, prosperity - Big Five: A4 C4 E4 N2 O3
const FREYR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="freyr-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#0a140a"/></linearGradient><linearGradient id="freyr-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0aa7a"/><stop offset="100%" style="stop-color:#806a4a"/></linearGradient><linearGradient id="freyr-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#eaca5a"/><stop offset="100%" style="stop-color:#aa8a2a"/></linearGradient><filter id="freyr-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="freyr-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#freyr-bg)"/><g filter="url(#freyr-glow)"><ellipse cx="68" cy="58" rx="14" ry="10" fill="url(#freyr-gold)"/><ellipse cx="58" cy="54" rx="4" ry="5" fill="url(#freyr-gold)"/><ellipse cx="56" cy="52" rx="2" ry="1.5" fill="#2a2a1a"/><path d="M60 48 L58 42 M64 46 L64 40 M68 46 L70 40" stroke="url(#freyr-gold)" stroke-width="2" stroke-linecap="round"/></g><g opacity="0.4"><path d="M50 24 Q56 18 62 26 M56 22 Q60 14 66 24" stroke="#6a8a5a" stroke-width="3" fill="none" stroke-linecap="round"/></g><g filter="url(#freyr-shadow)"><ellipse cx="28" cy="42" rx="11" ry="11" fill="url(#freyr-fig)"/><path d="M20 36 Q28 30 36 36" stroke="#a08a5a" stroke-width="2" fill="none"/><ellipse cx="24" cy="42" rx="2" ry="1.5" fill="#5a6a4a"/><ellipse cx="32" cy="42" rx="2" ry="1.5" fill="#5a6a4a"/><path d="M24 48 Q28 50 32 48" stroke="#8a7a5a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 28 54 Q42 56 46 72 L42 84" fill="url(#freyr-fig)"/></g></svg>`;

// NJORD - Sea god: ship, waves, wealth, wind - Big Five: A4 C3 E3 N2 O3
const NJORD_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="njord-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a2a"/><stop offset="100%" style="stop-color:#0a1414"/></linearGradient><linearGradient id="njord-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8aaaa0"/><stop offset="100%" style="stop-color:#4a6a60"/></linearGradient><linearGradient id="njord-ship" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9a8a6a"/><stop offset="100%" style="stop-color:#5a4a3a"/></linearGradient><filter id="njord-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#njord-bg)"/><g opacity="0.5"><path d="M48 74 Q62 66 76 74 Q62 82 48 74" fill="#4a8a8a"/><path d="M52 80 Q66 72 80 80" stroke="#3a7a7a" stroke-width="2" fill="none"/><path d="M44 68 Q58 60 72 68" stroke="#5a9a9a" stroke-width="2" fill="none"/></g><g filter="url(#njord-shadow)"><path d="M56 36 Q70 56 56 66 L78 66 Q92 56 78 36 Z" fill="url(#njord-ship)"/><rect x="64" y="26" width="3" height="30" fill="#7a6a4a"/><path d="M67 28 L67 50 L80 42 Z" fill="#c0b090"/><path d="M54 66 L80 66" stroke="#6a5a3a" stroke-width="2"/></g><g filter="url(#njord-shadow)"><ellipse cx="28" cy="42" rx="11" ry="11" fill="url(#njord-fig)"/><path d="M20 36 Q28 30 36 36" stroke="#6a8a7a" stroke-width="2" fill="none"/><ellipse cx="24" cy="42" rx="2" ry="1.5" fill="#3a5a4a"/><ellipse cx="32" cy="42" rx="2" ry="1.5" fill="#3a5a4a"/><path d="M24 48 Q28 50 32 48" stroke="#5a7a6a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 28 54 Q42 56 46 72 L42 84" fill="url(#njord-fig)"/></g></svg>`;

// HEL - Underworld ruler: half-alive/half-dead face, throne hint - Big Five: A2 C4 E2 N3 O3
const HEL_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="hel-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="hel-fig-light" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#d0c0b0"/><stop offset="100%" style="stop-color:#908070"/></linearGradient><linearGradient id="hel-fig-dark" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a3a4a"/><stop offset="100%" style="stop-color:#1a1a2a"/></linearGradient><filter id="hel-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#hel-bg)"/><g opacity="0.3"><rect x="56" y="36" width="28" height="40" fill="#2a2a3a"/><path d="M56 36 L70 24 L84 36" fill="#3a3a4a"/><rect x="60" y="44" width="6" height="8" fill="#1a1a2a"/><rect x="72" y="44" width="6" height="8" fill="#1a1a2a"/></g><g filter="url(#hel-shadow)"><path d="M18 44 L32 44 L32 58 Q24 60 18 56 Z" fill="url(#hel-fig-light)"/><path d="M32 44 L46 44 L46 58 Q40 60 32 58 Z" fill="url(#hel-fig-dark)"/><ellipse cx="24" cy="36" rx="7" ry="8" fill="url(#hel-fig-light)"/><ellipse cx="40" cy="36" rx="7" ry="8" fill="url(#hel-fig-dark)"/><ellipse cx="24" cy="36" rx="2" ry="1.5" fill="#5a6a6a"/><ellipse cx="40" cy="36" rx="2" ry="1.5" fill="#1a1a2a"/><circle cx="40" cy="36" r="1" fill="#4a4a5a"/><path d="M24 42 Q28 44 32 42" stroke="#7a6a5a" stroke-width="1.5" fill="none"/><path d="M32 42 Q36 44 40 42" stroke="#2a2a3a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 60 32 56 Q50 58 54 76 L48 84" fill="url(#hel-fig-light)"/></g></svg>`;

// SKADI - Winter goddess: skis, bow, mountains, frost - Big Five: A2 C4 E3 N3 O3
const SKADI_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="skadi-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/></linearGradient><linearGradient id="skadi-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0d0e0"/><stop offset="100%" style="stop-color:#8090a0"/></linearGradient><filter id="skadi-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#skadi-bg)"/><g opacity="0.4"><path d="M50 82 L62 52 L74 82" fill="#e0e8f0"/><path d="M58 82 L68 58 L78 82" fill="#d0d8e0"/><path d="M42 82 L56 60 L66 82" fill="#c8d0d8"/></g><g filter="url(#skadi-shadow)"><path d="M56 24 Q74 46 56 66" stroke="#7a6a5a" stroke-width="3" fill="none"/><path d="M56 44 L78 40" stroke="#9a9aa0" stroke-width="2"/><path d="M76 36 L82 40 L76 44" fill="#8a8a90"/><path d="M58 46 L76 54" stroke="#9a9aa0" stroke-width="1.5"/></g><g filter="url(#skadi-shadow)"><rect x="10" y="70" width="30" height="3" rx="1" fill="#e0e0e8"/><rect x="14" y="74" width="26" height="3" rx="1" fill="#d0d0d8"/></g><g filter="url(#skadi-shadow)"><ellipse cx="28" cy="42" rx="11" ry="11" fill="url(#skadi-fig)"/><path d="M20 36 Q28 30 36 36" stroke="#a0b0c0" stroke-width="2" fill="none"/><ellipse cx="24" cy="42" rx="2" ry="1.5" fill="#6080a0"/><ellipse cx="32" cy="42" rx="2" ry="1.5" fill="#6080a0"/><path d="M14 84 Q12 58 28 54 Q42 56 46 72 L42 84" fill="url(#skadi-fig)"/></g></svg>`;

// IDUNN - Youth goddess: golden apples, youth, vitality - Big Five: A5 C4 E3 N2 O3
const IDUNN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="idunn-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#0a140a"/></linearGradient><linearGradient id="idunn-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#d0c0a0"/><stop offset="100%" style="stop-color:#907060"/></linearGradient><linearGradient id="idunn-apple" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#faca4a"/><stop offset="100%" style="stop-color:#ca8a2a"/></linearGradient><filter id="idunn-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="idunn-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#idunn-bg)"/><g filter="url(#idunn-glow)"><circle cx="62" cy="38" r="10" fill="url(#idunn-apple)"/><ellipse cx="62" cy="30" rx="2" ry="3" fill="#5a8a3a"/><ellipse cx="58" cy="36" rx="3" ry="4" fill="#faea6a" opacity="0.4"/><circle cx="72" cy="52" r="8" fill="url(#idunn-apple)"/><ellipse cx="72" cy="46" rx="1.5" ry="2.5" fill="#5a8a3a"/><circle cx="78" cy="38" r="6" fill="url(#idunn-apple)"/></g><g filter="url(#idunn-shadow)"><ellipse cx="28" cy="44" rx="11" ry="11" fill="url(#idunn-fig)"/><path d="M20 38 Q28 32 36 38" stroke="#b0a070" stroke-width="2" fill="none"/><ellipse cx="24" cy="44" rx="2" ry="1.5" fill="#6a7a5a"/><ellipse cx="32" cy="44" rx="2" ry="1.5" fill="#6a7a5a"/><path d="M24 50 Q28 52 32 50" stroke="#9a8a6a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 60 28 56 Q42 58 46 74 L42 84" fill="url(#idunn-fig)"/></g></svg>`;

// BRAGI - Poetry god: harp/lyre, runes, eloquence - Big Five: A4 C3 E4 N2 O5
const BRAGI_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bragi-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#0a140a"/></linearGradient><linearGradient id="bragi-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#b0a080"/><stop offset="100%" style="stop-color:#706050"/></linearGradient><linearGradient id="bragi-harp" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0a050"/><stop offset="100%" style="stop-color:#806030"/></linearGradient><filter id="bragi-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#bragi-bg)"/><g filter="url(#bragi-shadow)"><path d="M54 26 Q48 20 54 14 Q60 20 54 26 M64 26 Q58 20 64 14 Q70 20 64 26 M74 28 Q68 22 74 16 Q80 22 74 28" stroke="url(#bragi-harp)" stroke-width="2.5" fill="none"/><ellipse cx="64" cy="52" rx="12" ry="8" fill="url(#bragi-harp)"/><path d="M54 26 L54 48 M59 24 L59 46 M64 24 L64 44 M69 24 L69 46 M74 28 L74 48" stroke="#9a7a3a" stroke-width="1"/></g><g opacity="0.4"><text x="76" y="70" font-size="14" fill="#8a9a7a" font-family="serif">ᚠ</text><text x="68" y="80" font-size="12" fill="#7a8a6a" font-family="serif">ᚢ</text></g><g filter="url(#bragi-shadow)"><ellipse cx="28" cy="44" rx="11" ry="11" fill="url(#bragi-fig)"/><path d="M20 38 Q28 32 36 38" stroke="#9a8a5a" stroke-width="2" fill="none"/><path d="M22 50 Q28 56 34 50" fill="#6a5a3a"/><ellipse cx="24" cy="44" rx="2" ry="1.5" fill="#5a6a4a"/><ellipse cx="32" cy="44" rx="2" ry="1.5" fill="#5a6a4a"/><path d="M14 84 Q12 60 28 56 Q42 58 46 74 L42 84" fill="url(#bragi-fig)"/></g></svg>`;

// ############################################################################
// TIER 3: CREATURES & FORCES (6)
// ############################################################################

// FENRIR - Giant wolf: massive jaws, broken chains, ferocious - Big Five: A1 C2 E4 N4 O2
const FENRIR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fenrir-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="fenrir-fur" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#5a5a6a"/><stop offset="100%" style="stop-color:#2a2a3a"/></linearGradient><filter id="fenrir-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#fenrir-bg)"/><g opacity="0.5"><path d="M16 70 Q20 68 18 64" stroke="#6a6a70" stroke-width="4" stroke-linecap="round"/><ellipse cx="14" cy="72" rx="3" ry="2" fill="#5a5a60"/><path d="M84 66 Q80 64 82 60" stroke="#6a6a70" stroke-width="4" stroke-linecap="round"/><ellipse cx="86" cy="68" rx="3" ry="2" fill="#5a5a60"/></g><g filter="url(#fenrir-shadow)"><ellipse cx="50" cy="48" rx="32" ry="24" fill="url(#fenrir-fur)"/><path d="M20 36 L28 20 L36 38" fill="url(#fenrir-fur)"/><path d="M64 38 L72 20 L80 36" fill="url(#fenrir-fur)"/><ellipse cx="36" cy="42" rx="5" ry="4" fill="#1a1a2a"/><ellipse cx="64" cy="42" rx="5" ry="4" fill="#1a1a2a"/><circle cx="36" cy="42" r="2" fill="#aa4040"/><circle cx="64" cy="42" r="2" fill="#aa4040"/><path d="M32 60 L36 66 L40 58 L44 66 L50 56 L56 66 L60 58 L64 66 L68 60" stroke="#e8e8e8" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M34 72 L40 64 L46 72 L54 72 L60 64 L66 72" fill="#2a2a3a"/></g></svg>`;

// JORMUNGANDR - World Serpent: coiled, ocean, massive, biting tail - Big Five: A1 C3 E3 N4 O2
const JORMUNGANDR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="jormungandr-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a2a"/><stop offset="100%" style="stop-color:#081010"/></linearGradient><linearGradient id="jormungandr-scales" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a7a6a"/><stop offset="100%" style="stop-color:#2a4a3a"/></linearGradient><filter id="jormungandr-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#jormungandr-bg)"/><g opacity="0.3"><path d="M10 70 Q30 80 50 70 Q70 60 90 70" stroke="#3a5a5a" stroke-width="2" fill="none"/><path d="M10 78 Q30 88 50 78 Q70 68 90 78" stroke="#2a4a4a" stroke-width="2" fill="none"/></g><g filter="url(#jormungandr-shadow)"><path d="M75 75 Q90 60 80 45 Q70 30 50 30 Q30 30 20 45 Q10 60 25 75" stroke="url(#jormungandr-scales)" stroke-width="14" fill="none" stroke-linecap="round"/><ellipse cx="28" cy="52" rx="12" ry="10" fill="url(#jormungandr-scales)"/><ellipse cx="22" cy="50" rx="4" ry="3" fill="#1a2a2a"/><ellipse cx="32" cy="50" rx="4" ry="3" fill="#1a2a2a"/><circle cx="22" cy="50" r="1.5" fill="#6aaa6a"/><circle cx="32" cy="50" r="1.5" fill="#6aaa6a"/><path d="M18 58 L12 62 M18 58 L12 54" stroke="#3a5a4a" stroke-width="3" stroke-linecap="round"/><path d="M68 72 Q72 68 75 72" stroke="url(#jormungandr-scales)" stroke-width="8" fill="none"/></g></svg>`;

// VALKYRIE - Chooser of slain: wings, spear, armor, flying - Big Five: A3 C5 E4 N2 O3
const VALKYRIE_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="valkyrie-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/></linearGradient><linearGradient id="valkyrie-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0c8d0"/><stop offset="100%" style="stop-color:#8090a0"/></linearGradient><linearGradient id="valkyrie-wing" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e8e8f0"/><stop offset="100%" style="stop-color:#a0a8b0"/></linearGradient><filter id="valkyrie-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#valkyrie-bg)"/><g filter="url(#valkyrie-shadow)"><rect x="70" y="12" width="3" height="60" fill="#7a7a80"/><path d="M66 12 L73 6 L80 12 L73 16 Z" fill="#9a9aa0"/></g><g filter="url(#valkyrie-shadow)" opacity="0.9"><path d="M42 34 Q30 24 18 34 Q24 44 32 40 Q28 50 18 56 Q32 52 42 58" fill="url(#valkyrie-wing)"/><path d="M24 34 L20 30 M28 38 L22 34 M26 48 L20 46" stroke="#c0c8d0" stroke-width="1.5"/></g><g filter="url(#valkyrie-shadow)"><ellipse cx="34" cy="44" rx="11" ry="11" fill="url(#valkyrie-fig)"/><path d="M24 36 Q34 28 44 36 L44 40 Q34 36 24 40 Z" fill="#9a9aa0"/><path d="M26 32 L28 26 L30 32 M38 32 L40 26 L42 32" fill="#8a8a90"/><ellipse cx="30" cy="44" rx="2" ry="1.5" fill="#5a6a7a"/><ellipse cx="38" cy="44" rx="2" ry="1.5" fill="#5a6a7a"/><path d="M20 84 Q18 60 34 56 Q48 58 52 74 L46 84" fill="url(#valkyrie-fig)"/></g></svg>`;

// NORNS - Fate weavers: three figures, threads, Yggdrasil root hint - Big Five: A3 C5 E2 N3 O4
const NORNS_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="norns-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="norns-fig" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#9a9aaa"/><stop offset="100%" style="stop-color:#5a5a6a"/></linearGradient><filter id="norns-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#norns-bg)"/><g opacity="0.3"><path d="M50 90 L50 50 Q40 40 50 30 Q60 20 70 30" stroke="#4a3a2a" stroke-width="6" fill="none"/></g><g opacity="0.6"><path d="M20 50 Q40 30 60 50 Q80 70 60 90" stroke="#daca9a" stroke-width="1.5" fill="none"/><path d="M30 40 Q50 60 70 40" stroke="#caba8a" stroke-width="1" fill="none"/><path d="M25 70 Q50 50 75 70" stroke="#eada9a" stroke-width="1" fill="none"/></g><g filter="url(#norns-shadow)"><ellipse cx="26" cy="48" rx="10" ry="10" fill="url(#norns-fig)"/><path d="M16 42 Q26 34 36 42" fill="#7a7a8a"/><ellipse cx="50" cy="38" rx="10" ry="10" fill="url(#norns-fig)"/><path d="M40 32 Q50 24 60 32" fill="#8a8a9a"/><ellipse cx="74" cy="48" rx="10" ry="10" fill="url(#norns-fig)"/><path d="M64 42 Q74 34 84 42" fill="#6a6a7a"/><path d="M12 84 Q10 62 26 58 Q34 60 36 70" fill="url(#norns-fig)"/><path d="M36 84 Q38 56 50 52 Q62 56 64 84" fill="url(#norns-fig)"/><path d="M64 70 Q66 60 74 58 Q90 62 88 84" fill="url(#norns-fig)"/></g></svg>`;

// HUGINN & MUNINN - Odin's ravens (thought & memory) - Big Five: A3 C4 E4 N2 O5
const HUGINN_MUNINN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ravens-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="ravens-feather" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a3a4a"/><stop offset="100%" style="stop-color:#1a1a2a"/></linearGradient><filter id="ravens-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#ravens-bg)"/><g filter="url(#ravens-shadow)"><ellipse cx="32" cy="42" rx="14" ry="12" fill="url(#ravens-feather)"/><path d="M20 38 L14 34" stroke="url(#ravens-feather)" stroke-width="4" stroke-linecap="round"/><ellipse cx="28" cy="40" rx="2" ry="2" fill="#1a1a2a"/><circle cx="28" cy="40" r="1" fill="#6a6a8a"/><path d="M22 52 Q28 58 22 66 Q18 60 22 52" fill="url(#ravens-feather)"/><path d="M36 52 Q42 58 36 66 Q32 60 36 52" fill="url(#ravens-feather)"/></g><g filter="url(#ravens-shadow)"><ellipse cx="68" cy="42" rx="14" ry="12" fill="url(#ravens-feather)"/><path d="M80 38 L86 34" stroke="url(#ravens-feather)" stroke-width="4" stroke-linecap="round"/><ellipse cx="72" cy="40" rx="2" ry="2" fill="#1a1a2a"/><circle cx="72" cy="40" r="1" fill="#6a6a8a"/><path d="M64 52 Q70 58 64 66 Q60 60 64 52" fill="url(#ravens-feather)"/><path d="M78 52 Q84 58 78 66 Q74 60 78 52" fill="url(#ravens-feather)"/></g></svg>`;

// SLEIPNIR - Odin's 8-legged horse - Big Five: A4 C4 E4 N2 O3
const SLEIPNIR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sleipnir-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#0a0a14"/></linearGradient><linearGradient id="sleipnir-body" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7a7a8a"/><stop offset="100%" style="stop-color:#4a4a5a"/></linearGradient><filter id="sleipnir-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#sleipnir-bg)"/><g filter="url(#sleipnir-shadow)"><ellipse cx="50" cy="44" rx="26" ry="16" fill="url(#sleipnir-body)"/><ellipse cx="28" cy="38" rx="10" ry="12" fill="url(#sleipnir-body)"/><path d="M22 36 L18 28" stroke="url(#sleipnir-body)" stroke-width="3" stroke-linecap="round"/><path d="M28 36 L26 28" stroke="url(#sleipnir-body)" stroke-width="3" stroke-linecap="round"/><ellipse cx="24" cy="36" rx="2" ry="2" fill="#2a2a3a"/><path d="M32 58 L30 78 M38 58 L36 78 M44 58 L42 78 M50 58 L48 78 M56 58 L54 78 M62 58 L60 78 M68 58 L66 78 M74 58 L72 78" stroke="url(#sleipnir-body)" stroke-width="3" stroke-linecap="round"/><path d="M72 48 Q82 44 78 54" stroke="#5a5a6a" stroke-width="4" fill="none"/></g></svg>`;

// Meta icon for Norse Mythology archetype set (Thor's hammer with ravens)
export const NORSE_MYTHOLOGY_META_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="nm-meta-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1a2a3a"/><stop offset="100%" style="stop-color:#0a1018"/>
        </linearGradient>
        <linearGradient id="nm-meta-hammer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#9a9aa0"/><stop offset="100%" style="stop-color:#5a5a60"/>
        </linearGradient>
        <linearGradient id="nm-meta-raven" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3a3a4a"/><stop offset="100%" style="stop-color:#1a1a2a"/>
        </linearGradient>
        <filter id="nm-meta-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/>
        </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#nm-meta-bg)"/>
    <g filter="url(#nm-meta-shadow)">
        <rect x="47" y="20" width="6" height="30" fill="#5a4a3a"/>
        <rect x="36" y="44" width="28" height="16" rx="2" fill="url(#nm-meta-hammer)"/>
        <rect x="40" y="48" width="20" height="8" fill="#7a7a80"/>
    </g>
    <g opacity="0.6">
        <ellipse cx="22" cy="32" rx="10" ry="8" fill="url(#nm-meta-raven)"/>
        <path d="M14 28 L8 24" stroke="url(#nm-meta-raven)" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="78" cy="32" rx="10" ry="8" fill="url(#nm-meta-raven)"/>
        <path d="M86 28 L92 24" stroke="url(#nm-meta-raven)" stroke-width="3" stroke-linecap="round"/>
    </g>
    <g opacity="0.4">
        <path d="M50 68 L44 80 M50 68 L56 80 M46 74 L54 74" stroke="#6a8aaa" stroke-width="2" stroke-linecap="round"/>
    </g>
</svg>`;

export const NORSE_MYTHOLOGY_ARCHETYPES: ArchetypeDefinition[] = [
	// Tier 1: Aesir (8)
	{
		id: 'odin',
		name: 'Odin',
		description: 'Allfather seeking wisdom through sacrifice and wandering',
		traits: { agreeableness: 2, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 4 },
		svg: ODIN_SVG
	},
	{
		id: 'thor',
		name: 'Thor',
		description: 'Mighty thunder god, protector of humanity',
		traits: { agreeableness: 3, conscientiousness: 3, extraversion: 4, negative_emotionality: 2, open_mindedness: 2 },
		svg: THOR_SVG
	},
	{
		id: 'frigg',
		name: 'Frigg',
		description: 'Queen of Asgard with knowledge of all fates',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 4 },
		svg: FRIGG_SVG
	},
	{
		id: 'loki',
		name: 'Loki',
		description: 'Cunning trickster thriving in chaos and deception',
		traits: { agreeableness: 2, conscientiousness: 2, extraversion: 4, negative_emotionality: 4, open_mindedness: 4 },
		svg: LOKI_SVG
	},
	{
		id: 'tyr',
		name: 'Tyr',
		description: 'God of war and justice who sacrificed his hand',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 3, negative_emotionality: 2, open_mindedness: 2 },
		svg: TYR_SVG
	},
	{
		id: 'baldur',
		name: 'Baldur',
		description: 'Beloved god of light, beauty, and peace',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: BALDUR_SVG
	},
	{
		id: 'heimdall',
		name: 'Heimdall',
		description: 'Ever-watchful guardian of the Bifrost bridge',
		traits: { agreeableness: 3, conscientiousness: 4, extraversion: 2, negative_emotionality: 2, open_mindedness: 3 },
		svg: HEIMDALL_SVG
	},
	{
		id: 'freya',
		name: 'Freya',
		description: 'Goddess of love, beauty, and battle magic',
		traits: { agreeableness: 3, conscientiousness: 3, extraversion: 4, negative_emotionality: 3, open_mindedness: 4 },
		svg: FREYA_SVG
	},
	// Tier 2: Vanir & Others (6)
	{
		id: 'freyr',
		name: 'Freyr',
		description: 'God of fertility bringing prosperity and peace',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: FREYR_SVG
	},
	{
		id: 'njord',
		name: 'Njord',
		description: 'Sea god ruling over winds and wealth',
		traits: { agreeableness: 4, conscientiousness: 3, extraversion: 3, negative_emotionality: 2, open_mindedness: 3 },
		svg: NJORD_SVG
	},
	{
		id: 'hel',
		name: 'Hel',
		description: 'Ruler of the underworld with dominion over the dead',
		traits: { agreeableness: 2, conscientiousness: 4, extraversion: 2, negative_emotionality: 3, open_mindedness: 3 },
		svg: HEL_SVG
	},
	{
		id: 'skadi',
		name: 'Skadi',
		description: 'Fierce huntress of the frozen mountains',
		traits: { agreeableness: 2, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 3 },
		svg: SKADI_SVG
	},
	{
		id: 'idunn',
		name: 'Idunn',
		description: 'Keeper of the golden apples of immortality',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 3, negative_emotionality: 2, open_mindedness: 3 },
		svg: IDUNN_SVG
	},
	{
		id: 'bragi',
		name: 'Bragi',
		description: 'God of poetry and eloquent storytelling',
		traits: { agreeableness: 4, conscientiousness: 3, extraversion: 4, negative_emotionality: 2, open_mindedness: 4 },
		svg: BRAGI_SVG
	},
	// Tier 3: Creatures & Forces (6)
	{
		id: 'fenrir',
		name: 'Fenrir',
		description: 'Monstrous wolf destined to bring Ragnarok',
		traits: { agreeableness: 2, conscientiousness: 2, extraversion: 4, negative_emotionality: 4, open_mindedness: 2 },
		svg: FENRIR_SVG
	},
	{
		id: 'jormungandr',
		name: 'Jormungandr',
		description: 'World Serpent encircling Midgard in the deep',
		traits: { agreeableness: 2, conscientiousness: 3, extraversion: 3, negative_emotionality: 4, open_mindedness: 2 },
		svg: JORMUNGANDR_SVG
	},
	{
		id: 'valkyrie',
		name: 'Valkyrie',
		description: 'Warrior maiden choosing the worthy slain',
		traits: { agreeableness: 3, conscientiousness: 4, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: VALKYRIE_SVG
	},
	{
		id: 'norns',
		name: 'Norns',
		description: 'Three fate weavers shaping destiny',
		traits: { agreeableness: 3, conscientiousness: 4, extraversion: 2, negative_emotionality: 2, open_mindedness: 4 },
		svg: NORNS_SVG
	},
	{
		id: 'huginn-muninn',
		name: 'Huginn & Muninn',
		description: 'Odin\'s ravens embodying thought and memory',
		traits: { agreeableness: 3, conscientiousness: 4, extraversion: 4, negative_emotionality: 2, open_mindedness: 4 },
		svg: HUGINN_MUNINN_SVG
	},
	{
		id: 'sleipnir',
		name: 'Sleipnir',
		description: 'Eight-legged steed galloping between worlds',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: SLEIPNIR_SVG
	}
];
