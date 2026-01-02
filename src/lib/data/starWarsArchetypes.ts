/**
 * Star Wars Archetype definitions
 * 25 characters across 5 tiers (Classic focus)
 * Based on Big Five personality model
 *
 * Trait levels: H = High (4), M = Medium (3), L = Low (2)
 */

import type { ArchetypeDefinition } from './archetypes';

// ############################################################################
// TIER 1: ORIGINAL TRILOGY HEROES (6)
// ############################################################################

// LUKE SKYWALKER - X-wing pilot helmet, blonde hair visible - Big Five: A5 C4 E3 N3 O4
const LUKE_SKYWALKER_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="luke-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="luke-helmet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e8e0d0"/><stop offset="100%" style="stop-color:#a09080"/></linearGradient><filter id="luke-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="luke-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#luke-bg)"/><g filter="url(#luke-glow)"><rect x="68" y="18" width="3" height="50" fill="#4aea4a"/></g><g filter="url(#luke-shadow)"><ellipse cx="32" cy="44" rx="16" ry="14" fill="url(#luke-helmet)"/><path d="M16 44 L32 26 L48 44" fill="url(#luke-helmet)"/><rect x="16" y="42" width="32" height="6" fill="#aa4020"/><path d="M24 26 L24 42 M32 24 L32 42 M40 26 L40 42" stroke="#aa4020" stroke-width="2"/><ellipse cx="32" cy="52" rx="10" ry="6" fill="#c0a080"/><path d="M24 50 Q32 56 40 50" stroke="#8a7060" stroke-width="1.5" fill="none"/><ellipse cx="27" cy="50" rx="2" ry="1.5" fill="#4a6a8a"/><ellipse cx="37" cy="50" rx="2" ry="1.5" fill="#4a6a8a"/><path d="M18 84 Q16 60 32 56 Q48 58 52 76 L46 84" fill="#ea8040"/></g></svg>`;

// HAN SOLO - White shirt, black vest, swept hair - Big Five: A2 C2 E5 N3 O4
const HAN_SOLO_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="han-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="han-vest" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a2a"/><stop offset="100%" style="stop-color:#0a0a0a"/></linearGradient><filter id="han-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#han-bg)"/><g filter="url(#han-shadow)"><rect x="64" y="34" width="8" height="26" rx="2" fill="#3a3a40"/><rect x="62" y="32" width="12" height="8" rx="1" fill="#4a4a50"/></g><g filter="url(#han-shadow)"><ellipse cx="30" cy="40" rx="12" ry="12" fill="#c0a080"/><path d="M18 34 Q24 24 30 28 Q36 22 42 34 Q38 36 30 36 Q22 36 18 34" fill="#5a4030"/><path d="M20 34 Q24 30 30 32" stroke="#4a3020" stroke-width="1" fill="none"/><ellipse cx="26" cy="40" rx="2" ry="1.5" fill="#4a4a4a"/><ellipse cx="34" cy="40" rx="2" ry="1.5" fill="#4a4a4a"/><path d="M26 46 Q30 48 34 46" stroke="#8a6a5a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 56 30 52 Q46 54 50 72 L44 84" fill="#e8e0d0"/><path d="M18 56 L18 84 M42 56 L42 84" stroke="url(#han-vest)" stroke-width="10"/><path d="M26 56 L26 72" stroke="#c0a040" stroke-width="2"/></g></svg>`;

// PRINCESS LEIA - Iconic side buns, white dress - Big Five: A4 C5 E4 N2 O3
const PRINCESS_LEIA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="leia-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="leia-dress" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f0f0f8"/><stop offset="100%" style="stop-color:#b0b0c0"/></linearGradient><filter id="leia-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#leia-bg)"/><g filter="url(#leia-shadow)"><ellipse cx="68" cy="46" rx="8" ry="6" fill="#5a5a60"/><ellipse cx="68" cy="46" rx="4" ry="3" fill="#2a2a30"/></g><g filter="url(#leia-shadow)"><circle cx="14" cy="40" r="10" fill="#5a4a3a"/><circle cx="14" cy="40" r="6" fill="#4a3a2a"/><circle cx="14" cy="40" r="3" fill="#5a4a3a"/><circle cx="46" cy="40" r="10" fill="#5a4a3a"/><circle cx="46" cy="40" r="6" fill="#4a3a2a"/><circle cx="46" cy="40" r="3" fill="#5a4a3a"/><ellipse cx="30" cy="42" rx="10" ry="10" fill="#c0b0a0"/><ellipse cx="26" cy="40" rx="2" ry="1.5" fill="#5a4a3a"/><ellipse cx="34" cy="40" rx="2" ry="1.5" fill="#5a4a3a"/><path d="M26 46 Q30 48 34 46" stroke="#9a7a6a" stroke-width="1.5" fill="none"/><path d="M16 84 Q14 58 30 54 Q44 56 48 74 L42 84" fill="url(#leia-dress)"/><ellipse cx="30" cy="58" rx="6" ry="3" fill="#c0c0c8"/></g></svg>`;

// CHEWBACCA - Wide face, prominent bandolier, shaggy - Big Five: A4 C3 E3 N3 O2
const CHEWBACCA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="chewie-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="chewie-fur" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a6a4a"/><stop offset="100%" style="stop-color:#4a3a2a"/></linearGradient><filter id="chewie-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#chewie-bg)"/><g filter="url(#chewie-shadow)"><rect x="64" y="26" width="10" height="42" rx="2" fill="#5a5a60"/><rect x="60" y="30" width="18" height="10" fill="#4a4a50"/><ellipse cx="69" cy="68" rx="10" ry="5" fill="#3a3a40"/></g><g filter="url(#chewie-shadow)"><ellipse cx="32" cy="40" rx="18" ry="16" fill="url(#chewie-fur)"/><path d="M14 36 Q20 28 32 30 Q44 28 50 36" fill="url(#chewie-fur)"/><path d="M18 38 L16 32 M24 36 L22 28 M32 34 L32 26 M40 36 L42 28 M46 38 L48 32" stroke="#6a4a2a" stroke-width="3" stroke-linecap="round"/><ellipse cx="26" cy="40" rx="3" ry="2" fill="#1a1a1a"/><ellipse cx="38" cy="40" rx="3" ry="2" fill="#1a1a1a"/><ellipse cx="32" cy="50" rx="5" ry="3" fill="#2a1a0a"/><path d="M10 84 Q8 54 32 50 Q54 52 58 76 L50 84" fill="url(#chewie-fur)"/><path d="M18 52 L44 74" stroke="#6a5a4a" stroke-width="5"/><circle cx="22" cy="56" r="2" fill="#8a7a6a"/><circle cx="28" cy="62" r="2" fill="#8a7a6a"/><circle cx="34" cy="68" r="2" fill="#8a7a6a"/></g></svg>`;

// C-3PO - Protocol droid, anxious - Big Five: A4 C5 E2 N5 O2
const C3PO_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="c3po-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="c3po-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daba4a"/><stop offset="100%" style="stop-color:#9a7a2a"/></linearGradient><filter id="c3po-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#c3po-bg)"/><g filter="url(#c3po-shadow)"><ellipse cx="50" cy="40" rx="14" ry="16" fill="url(#c3po-gold)"/><ellipse cx="44" cy="38" rx="4" ry="5" fill="#1a1a2a"/><ellipse cx="56" cy="38" rx="4" ry="5" fill="#1a1a2a"/><ellipse cx="44" cy="38" rx="2" ry="3" fill="#eaea4a"/><ellipse cx="56" cy="38" rx="2" ry="3" fill="#eaea4a"/><path d="M44 48 L50 50 L56 48" stroke="#8a6a2a" stroke-width="2" fill="none"/><path d="M30 84 Q28 56 50 52 Q72 56 74 84" fill="url(#c3po-gold)"/><path d="M38 56 L38 72 M50 54 L50 74 M62 56 L62 72" stroke="#8a6a2a" stroke-width="1.5"/></g></svg>`;

// R2-D2 - Astromech droid, brave - Big Five: A4 C4 E4 N1 O4
const R2D2_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="r2d2-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="r2d2-body" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e0e0e8"/><stop offset="100%" style="stop-color:#a0a0b0"/></linearGradient><linearGradient id="r2d2-blue" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a6aaa"/><stop offset="100%" style="stop-color:#2a4a7a"/></linearGradient><filter id="r2d2-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#r2d2-bg)"/><g filter="url(#r2d2-shadow)"><ellipse cx="50" cy="40" rx="18" ry="16" fill="url(#r2d2-body)"/><ellipse cx="50" cy="36" rx="14" ry="10" fill="url(#r2d2-blue)"/><circle cx="50" cy="34" r="4" fill="#1a1a2a"/><circle cx="50" cy="34" r="2" fill="#aa2020"/><rect x="32" y="54" width="36" height="26" rx="4" fill="url(#r2d2-body)"/><rect x="38" y="58" width="10" height="6" fill="url(#r2d2-blue)"/><rect x="52" y="58" width="10" height="6" fill="url(#r2d2-blue)"/><rect x="26" y="56" width="8" height="22" rx="2" fill="url(#r2d2-body)"/><rect x="66" y="56" width="8" height="22" rx="2" fill="url(#r2d2-body)"/></g></svg>`;

// ############################################################################
// TIER 2: ORIGINAL TRILOGY VILLAINS & OTHERS (5)
// ############################################################################

// DARTH VADER - Front-facing iconic helmet - Big Five: A1 C5 E3 N4 O2
const DARTH_VADER_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="vader-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0a0a0a"/><stop offset="100%" style="stop-color:#000000"/></linearGradient><linearGradient id="vader-helmet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a2a"/><stop offset="100%" style="stop-color:#0a0a0a"/></linearGradient><linearGradient id="vader-shine" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a4a4a"/><stop offset="100%" style="stop-color:#1a1a1a"/></linearGradient><filter id="vader-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.6"/></filter><filter id="vader-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#vader-bg)"/><g filter="url(#vader-shadow)"><ellipse cx="50" cy="46" rx="28" ry="26" fill="url(#vader-helmet)"/><path d="M22 40 L50 22 L78 40" fill="url(#vader-shine)"/><path d="M30 38 L50 26 L70 38 L70 50 L50 44 L30 50 Z" fill="#1a1a1a"/><ellipse cx="38" cy="42" rx="6" ry="4" fill="#0a0a0a"/><ellipse cx="62" cy="42" rx="6" ry="4" fill="#0a0a0a"/><path d="M38 42 L44 42 M56 42 L62 42" stroke="#1a1a2a" stroke-width="1"/><path d="M40 56 L46 54 L50 58 L54 54 L60 56" fill="#2a2a2a"/><path d="M42 60 L46 58 L50 62 L54 58 L58 60 L58 68 L50 72 L42 68 Z" fill="#1a1a1a"/><path d="M44 62 L50 66 L56 62" stroke="#2a2a2a" stroke-width="1" fill="none"/><path d="M46 64 L50 68 L54 64" stroke="#2a2a2a" stroke-width="1" fill="none"/><rect x="36" y="74" width="28" height="8" rx="1" fill="#2a2a2a"/><path d="M40 76 L40 80 M44 76 L44 80 M48 76 L48 80 M52 76 L52 80 M56 76 L56 80 M60 76 L60 80" stroke="#4a4a4a" stroke-width="1.5"/><circle cx="42" cy="78" r="1" fill="#aa2020"/><circle cx="58" cy="78" r="1" fill="#4a8a4a"/></g></svg>`;

// EMPEROR PALPATINE - Deep hood, yellow eyes, wrinkled - Big Five: A1 C5 E4 N2 O4
const EMPEROR_PALPATINE_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="palpatine-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0a0a0a"/><stop offset="100%" style="stop-color:#000000"/></linearGradient><linearGradient id="palpatine-robe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a1a"/><stop offset="100%" style="stop-color:#0a0a0a"/></linearGradient><linearGradient id="palpatine-lightning" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aaaaff"/><stop offset="100%" style="stop-color:#6666aa"/></linearGradient><filter id="palpatine-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.5"/></filter><filter id="palpatine-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#palpatine-bg)"/><g filter="url(#palpatine-glow)" opacity="0.7"><path d="M58 44 L64 38 L60 48 L70 42 L64 54 L76 46" stroke="url(#palpatine-lightning)" stroke-width="2" fill="none"/></g><g filter="url(#palpatine-shadow)"><path d="M14 30 Q30 20 50 24 Q70 20 86 30 L80 84 L20 84 Z" fill="url(#palpatine-robe)"/><path d="M20 34 Q36 26 50 30 Q64 26 80 34 L76 50 Q50 40 24 50 Z" fill="#0a0a0a"/><ellipse cx="42" cy="52" rx="12" ry="10" fill="#6a5a4a"/><path d="M34 48 L36 44 M38 46 L40 42 M44 46 L46 42 M48 48 L50 44" stroke="#4a3a2a" stroke-width="1"/><ellipse cx="37" cy="50" rx="2" ry="2" fill="#eaea20" filter="url(#palpatine-glow)"/><ellipse cx="47" cy="50" rx="2" ry="2" fill="#eaea20" filter="url(#palpatine-glow)"/><path d="M36 58 Q42 62 48 58" stroke="#4a3a2a" stroke-width="1.5" fill="none"/><path d="M34 56 L36 60 M48 56 L46 60" stroke="#5a4a3a" stroke-width="1"/></g></svg>`;

// BOBA FETT - T-visor, rangefinder antenna, weathered - Big Five: A1 C4 E2 N2 O2
const BOBA_FETT_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="boba-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#081008"/></linearGradient><linearGradient id="boba-helmet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#5a7a5a"/><stop offset="100%" style="stop-color:#3a4a3a"/></linearGradient><filter id="boba-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#boba-bg)"/><g filter="url(#boba-shadow)"><ellipse cx="50" cy="48" rx="24" ry="22" fill="url(#boba-helmet)"/><path d="M26 42 L50 34 L74 42 L74 54 L50 62 L26 54 Z" fill="url(#boba-helmet)"/><rect x="30" y="42" width="40" height="8" fill="#1a1a2a"/><rect x="30" y="42" width="40" height="8" fill="#aa3030" opacity="0.4"/><path d="M50 42 L50 50" stroke="#1a1a2a" stroke-width="2"/><path d="M36 56 L50 60 L64 56" stroke="#4a5a4a" stroke-width="2" fill="none"/><rect x="68" y="28" width="4" height="20" fill="#5a6a5a"/><rect x="66" y="24" width="8" height="6" fill="#4a5a4a"/><ellipse cx="38" cy="66" rx="8" ry="4" fill="#aa8040"/><ellipse cx="62" cy="66" rx="8" ry="4" fill="#6a8a6a"/><path d="M32 44 L34 48" stroke="#8a6a4a" stroke-width="2" stroke-linecap="round"/><path d="M40 36 Q42 34 44 36" stroke="#7a6a5a" stroke-width="1.5" fill="none"/></g></svg>`;

// GRAND MOFF TARKIN - Gaunt face, Imperial cap, high cheekbones - Big Five: A1 C5 E3 N1 O2
const GRAND_MOFF_TARKIN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="tarkin-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a1a"/><stop offset="100%" style="stop-color:#080808"/></linearGradient><linearGradient id="tarkin-uniform" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a5a4a"/><stop offset="100%" style="stop-color:#2a3a2a"/></linearGradient><linearGradient id="tarkin-cap" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a3a3a"/><stop offset="100%" style="stop-color:#1a1a1a"/></linearGradient><filter id="tarkin-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#tarkin-bg)"/><g opacity="0.25"><circle cx="72" cy="38" r="18" fill="#4a6a4a"/><circle cx="72" cy="38" r="12" fill="#3a5a3a"/><circle cx="72" cy="38" r="5" fill="#2a4a2a"/><path d="M54 38 L90 38" stroke="#3a5a3a" stroke-width="1"/></g><g filter="url(#tarkin-shadow)"><ellipse cx="32" cy="46" rx="12" ry="14" fill="#a09080"/><path d="M20 40 L24 36 L32 38 L40 36 L44 40" fill="#a09080"/><rect x="18" y="28" width="28" height="10" fill="url(#tarkin-cap)"/><rect x="16" y="36" width="32" height="4" fill="#1a1a1a"/><ellipse cx="32" cy="32" rx="10" ry="4" fill="url(#tarkin-cap)"/><path d="M24 42 Q26 40 28 42" stroke="#6a5a4a" stroke-width="1.5" fill="none"/><path d="M36 42 Q38 40 40 42" stroke="#6a5a4a" stroke-width="1.5" fill="none"/><ellipse cx="27" cy="44" rx="2" ry="1.5" fill="#4a5a5a"/><ellipse cx="37" cy="44" rx="2" ry="1.5" fill="#4a5a5a"/><path d="M28 52 Q32 54 36 52" stroke="#7a6a5a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 60 32 56 Q50 58 54 78 L46 84" fill="url(#tarkin-uniform)"/><rect x="22" y="60" width="20" height="4" fill="#4a4a50"/><rect x="22" y="65" width="20" height="4" fill="#aa4040"/><rect x="22" y="65" width="10" height="4" fill="#4a4aaa"/></g></svg>`;

// LANDO CALRISSIAN - Mustache, cape collar, charming - Big Five: A3 C2 E5 N3 O4
const LANDO_CALRISSIAN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lando-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="lando-cape" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a5aaa"/><stop offset="100%" style="stop-color:#2a3a6a"/></linearGradient><linearGradient id="lando-shirt" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e8e080"/><stop offset="100%" style="stop-color:#a0984a"/></linearGradient><filter id="lando-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#lando-bg)"/><g filter="url(#lando-shadow)"><path d="M12 56 Q20 48 30 52 L30 84 L12 84 Z" fill="url(#lando-cape)"/><path d="M48 56 Q56 48 68 56 L68 84 L48 84 Z" fill="url(#lando-cape)"/></g><g filter="url(#lando-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="#8a6a4a"/><path d="M18 36 Q24 26 30 30 Q36 26 42 36" fill="#2a1a0a"/><path d="M22 36 Q26 32 30 34 Q34 32 38 36" fill="#1a0a00"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#2a2a2a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#2a2a2a"/><path d="M24 48 L28 50 L32 50 L36 48" stroke="#1a0a00" stroke-width="2" stroke-linecap="round"/><path d="M26 52 Q30 54 34 52" stroke="#6a4a3a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 30 54 Q46 56 50 76 L44 84" fill="url(#lando-shirt)"/><path d="M24 56 L24 62 M36 56 L36 62" stroke="#8a7a3a" stroke-width="1.5"/></g></svg>`;

// ############################################################################
// TIER 3: PREQUEL ERA JEDI (5)
// ############################################################################

// OBI-WAN KENOBI - Mullet hair, neat beard, layered robes - Big Five: A5 C5 E3 N2 O4
const OBI_WAN_KENOBI_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="obiwan-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a1a"/><stop offset="100%" style="stop-color:#101008"/></linearGradient><linearGradient id="obiwan-robe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a7a5a"/><stop offset="100%" style="stop-color:#4a3a2a"/></linearGradient><linearGradient id="obiwan-inner" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#c0b090"/><stop offset="100%" style="stop-color:#807050"/></linearGradient><filter id="obiwan-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="obiwan-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#obiwan-bg)"/><g filter="url(#obiwan-glow)"><rect x="66" y="20" width="3" height="50" fill="#4a8afa"/></g><g filter="url(#obiwan-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="#c0a080"/><path d="M18 36 Q24 24 30 28 Q36 24 42 36 L44 42 Q36 38 30 40 Q24 38 16 42 Z" fill="#aa7a4a"/><path d="M40 40 L44 36 Q46 42 42 46" fill="#aa7a4a"/><path d="M22 46 Q30 54 38 46" fill="#8a6a3a"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#5a7a9a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#5a7a9a"/><path d="M14 84 Q12 58 30 54 Q46 56 50 74 L44 84" fill="url(#obiwan-robe)"/><path d="M20 58 L20 84" fill="url(#obiwan-inner)"/><path d="M24 56 L24 76" stroke="url(#obiwan-inner)" stroke-width="8"/></g></svg>`;

// ANAKIN SKYWALKER - Scar, wavy hair, darker robes - Big Five: A3 C2 E4 N5 O4
const ANAKIN_SKYWALKER_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="anakin-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a1a"/><stop offset="100%" style="stop-color:#101008"/></linearGradient><linearGradient id="anakin-robe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a3a3a"/><stop offset="100%" style="stop-color:#1a1a1a"/></linearGradient><filter id="anakin-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="anakin-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#anakin-bg)"/><g filter="url(#anakin-glow)"><rect x="66" y="20" width="3" height="50" fill="#4a8afa"/></g><g filter="url(#anakin-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="#c0a080"/><path d="M18 34 Q22 22 30 26 Q38 22 42 34 Q38 32 30 34 Q22 32 18 34" fill="#5a4030"/><path d="M20 34 Q24 28 28 32 Q26 36 20 34" fill="#4a3020"/><path d="M32 34 Q36 28 40 32 Q38 36 32 34" fill="#4a3020"/><path d="M36 36 L40 30" stroke="#9a6a5a" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#5a7a9a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#5a7a9a"/><path d="M26 48 Q30 50 34 48" stroke="#8a6a5a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 30 54 Q46 56 50 74 L44 84" fill="url(#anakin-robe)"/><path d="M24 56 L24 72" stroke="#5a4a3a" stroke-width="6"/></g></svg>`;

// YODA - Ancient Jedi Master, wise - Big Five: A5 C5 E2 N1 O5
const YODA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="yoda-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#081008"/></linearGradient><linearGradient id="yoda-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7a9a5a"/><stop offset="100%" style="stop-color:#4a5a3a"/></linearGradient><linearGradient id="yoda-robe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a5a3a"/><stop offset="100%" style="stop-color:#3a2a1a"/></linearGradient><filter id="yoda-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="yoda-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#yoda-bg)"/><g filter="url(#yoda-glow)"><rect x="66" y="34" width="2" height="32" fill="#4aea4a"/></g><g filter="url(#yoda-shadow)"><ellipse cx="36" cy="44" rx="14" ry="10" fill="url(#yoda-skin)"/><path d="M22 44 L10 38" stroke="url(#yoda-skin)" stroke-width="6" stroke-linecap="round"/><path d="M50 44 L62 38" stroke="url(#yoda-skin)" stroke-width="6" stroke-linecap="round"/><ellipse cx="30" cy="42" rx="3" ry="2" fill="#2a3a2a"/><ellipse cx="42" cy="42" rx="3" ry="2" fill="#2a3a2a"/><path d="M32 50 Q36 52 40 50" stroke="#3a4a2a" stroke-width="1.5" fill="none"/><path d="M22 84 Q20 60 36 56 Q52 58 56 76 L50 84" fill="url(#yoda-robe)"/></g></svg>`;

// MACE WINDU - Bald, stern brow, purple saber - Big Five: A3 C5 E3 N2 O3
const MACE_WINDU_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mace-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a2a"/><stop offset="100%" style="stop-color:#100810"/></linearGradient><linearGradient id="mace-robe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#5a4a3a"/><stop offset="100%" style="stop-color:#2a1a1a"/></linearGradient><filter id="mace-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="mace-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#mace-bg)"/><g filter="url(#mace-glow)"><rect x="66" y="20" width="3" height="50" fill="#aa4aea"/></g><g filter="url(#mace-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="#6a5a4a"/><path d="M20 36 Q24 34 28 36 Q30 34 34 36 Q38 34 40 36" stroke="#5a4a3a" stroke-width="2" fill="none"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#3a2a1a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#3a2a1a"/><path d="M26 48 Q30 50 34 48" stroke="#5a4a3a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 30 54 Q46 56 50 74 L44 84" fill="url(#mace-robe)"/><path d="M24 56 L24 72" stroke="#7a6a4a" stroke-width="6"/></g></svg>`;

// QUI-GON JINN - Long hair, beard, wise rebel - Big Five: A4 C3 E3 N2 O5
const QUI_GON_JINN_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="quigon-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a1a"/><stop offset="100%" style="stop-color:#101008"/></linearGradient><linearGradient id="quigon-robe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7a6a4a"/><stop offset="100%" style="stop-color:#3a2a1a"/></linearGradient><filter id="quigon-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="quigon-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#quigon-bg)"/><g filter="url(#quigon-glow)"><rect x="66" y="20" width="3" height="50" fill="#4aea4a"/></g><g filter="url(#quigon-shadow)"><ellipse cx="30" cy="42" rx="12" ry="12" fill="#c0a080"/><path d="M16 34 Q22 22 30 26 Q38 22 44 34 L46 54 Q38 50 30 52 Q22 50 14 54 Z" fill="#5a4a3a"/><path d="M22 46 Q30 54 38 46" fill="#4a3a2a"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#5a7a9a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#5a7a9a"/><path d="M14 84 Q12 58 30 54 Q46 56 50 74 L44 84" fill="url(#quigon-robe)"/><path d="M24 56 L24 72" stroke="#9a8a5a" stroke-width="6"/></g></svg>`;

// ############################################################################
// TIER 4: PREQUEL ERA VILLAINS (3)
// ############################################################################

// DARTH MAUL - Sith assassin, rage - Big Five: A1 C4 E3 N3 O2
const DARTH_MAUL_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="maul-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a1a"/><stop offset="100%" style="stop-color:#100808"/></linearGradient><linearGradient id="maul-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aa3020"/><stop offset="100%" style="stop-color:#6a1810"/></linearGradient><filter id="maul-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="maul-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#maul-bg)"/><g filter="url(#maul-glow)"><rect x="54" y="30" width="3" height="26" fill="#ea4040"/><rect x="54" y="44" width="3" height="26" fill="#ea4040"/></g><g filter="url(#maul-shadow)"><ellipse cx="28" cy="40" rx="11" ry="11" fill="url(#maul-skin)"/><path d="M18 34 L22 24 M24 32 L26 22 M32 32 L34 22 M38 34 L42 24" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/><path d="M20 38 L24 36 L28 38 L32 36 L36 38" stroke="#1a1a1a" stroke-width="2"/><ellipse cx="24" cy="40" rx="2" ry="2" fill="#eaea20"/><ellipse cx="32" cy="40" rx="2" ry="2" fill="#eaea20"/><path d="M14 84 Q12 56 28 52 Q42 54 46 70 L42 84" fill="#1a1a1a"/></g><path d="M42 60 Q50 52 54 48" stroke="url(#maul-skin)" stroke-width="5" stroke-linecap="round"/></svg>`;

// COUNT DOOKU - Silver beard, curved hilt, elegant cape - Big Five: A2 C5 E3 N2 O4
const COUNT_DOOKU_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="dooku-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a1a"/><stop offset="100%" style="stop-color:#080808"/></linearGradient><linearGradient id="dooku-cape" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3a2a2a"/><stop offset="100%" style="stop-color:#1a0a0a"/></linearGradient><filter id="dooku-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter><filter id="dooku-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><circle cx="50" cy="50" r="48" fill="url(#dooku-bg)"/><g filter="url(#dooku-glow)"><path d="M62 22 Q58 26 62 30 L62 58 Q58 62 62 66" stroke="#ea4040" stroke-width="3" fill="none"/><ellipse cx="62" cy="68" rx="4" ry="6" fill="#6a6a70"/><path d="M58 68 Q56 72 60 74" stroke="#5a5a60" stroke-width="2" fill="none"/></g><g filter="url(#dooku-shadow)"><ellipse cx="30" cy="42" rx="11" ry="12" fill="#a09080"/><path d="M20 36 Q26 30 32 34 Q38 30 40 36" fill="#8a7a6a"/><path d="M22 46 Q30 54 38 46" fill="#c0c0c8"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#4a3a2a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#4a3a2a"/><path d="M14 84 Q12 58 30 54 Q46 56 50 74 L44 84" fill="url(#dooku-cape)"/><circle cx="30" cy="56" r="3" fill="#8a8a90"/></g></svg>`;

// JANGO FETT - Silver/blue helmet, dual blasters, jetpack - Big Five: A2 C4 E3 N2 O2
const JANGO_FETT_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="jango-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="jango-helmet" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a9aaa"/><stop offset="100%" style="stop-color:#5a6a7a"/></linearGradient><linearGradient id="jango-armor" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7a8a9a"/><stop offset="100%" style="stop-color:#4a5a6a"/></linearGradient><filter id="jango-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#jango-bg)"/><g filter="url(#jango-shadow)"><rect x="58" y="36" width="6" height="14" rx="1" fill="#4a4a50"/><rect x="70" y="36" width="6" height="14" rx="1" fill="#4a4a50"/><rect x="56" y="34" width="10" height="6" rx="1" fill="#5a5a60"/><rect x="68" y="34" width="10" height="6" rx="1" fill="#5a5a60"/></g><g filter="url(#jango-shadow)"><rect x="10" y="38" width="8" height="28" rx="2" fill="#5a6a7a"/><ellipse cx="14" cy="36" rx="4" ry="4" fill="#4a5a6a"/><ellipse cx="14" cy="68" rx="5" ry="3" fill="#3a4a5a"/></g><g filter="url(#jango-shadow)"><ellipse cx="34" cy="44" rx="16" ry="14" fill="url(#jango-helmet)"/><path d="M18 40 L34 34 L50 40 L50 50 L34 56 L18 50 Z" fill="url(#jango-helmet)"/><rect x="22" y="40" width="24" height="6" fill="#1a1a2a"/><path d="M34 40 L34 46" stroke="#1a1a2a" stroke-width="2"/><path d="M28 52 L34 54 L40 52" stroke="#6a7a8a" stroke-width="2" fill="none"/></g></svg>`;

// ############################################################################
// TIER 5: SUPPORTING & EXTENDED (6)
// ############################################################################

// PADME AMIDALA - Naboo headdress, royal face paint - Big Five: A4 C5 E4 N2 O3
const PADME_AMIDALA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="padme-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a1a2a"/><stop offset="100%" style="stop-color:#100810"/></linearGradient><linearGradient id="padme-dress" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8a2a2a"/><stop offset="100%" style="stop-color:#4a1a1a"/></linearGradient><linearGradient id="padme-gold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#daca6a"/><stop offset="100%" style="stop-color:#9a7a3a"/></linearGradient><filter id="padme-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#padme-bg)"/><g filter="url(#padme-shadow)"><ellipse cx="32" cy="48" rx="12" ry="10" fill="#e8e0d0"/><ellipse cx="32" cy="30" rx="16" ry="12" fill="url(#padme-gold)"/><ellipse cx="32" cy="24" rx="12" ry="8" fill="#aa2020"/><path d="M16 30 L20 20 L26 28 M38 28 L44 20 L48 30" fill="url(#padme-gold)"/><circle cx="32" cy="18" r="4" fill="url(#padme-gold)"/><rect x="26" y="40" width="2" height="6" fill="#aa2020"/><rect x="36" y="40" width="2" height="6" fill="#aa2020"/><ellipse cx="28" cy="48" rx="2" ry="1.5" fill="#4a3a2a"/><ellipse cx="36" cy="48" rx="2" ry="1.5" fill="#4a3a2a"/><path d="M28 52 Q32 54 36 52" stroke="#9a7a6a" stroke-width="1.5" fill="none"/><path d="M18 84 Q16 62 32 58 Q48 60 52 78 L46 84" fill="url(#padme-dress)"/></g></svg>`;

// CASSIAN ANDOR - Parka collar, weathered rebel - Big Five: A3 C4 E3 N3 O3
const CASSIAN_ANDOR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="cassian-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="cassian-jacket" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4a5a4a"/><stop offset="100%" style="stop-color:#2a3a2a"/></linearGradient><linearGradient id="cassian-collar" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a5a4a"/><stop offset="100%" style="stop-color:#3a2a1a"/></linearGradient><filter id="cassian-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#cassian-bg)"/><g filter="url(#cassian-shadow)"><rect x="64" y="36" width="6" height="24" rx="1" fill="#4a4a50"/><rect x="62" y="34" width="10" height="6" rx="1" fill="#5a5a60"/></g><g filter="url(#cassian-shadow)"><ellipse cx="30" cy="42" rx="11" ry="11" fill="#a09080"/><path d="M20 36 Q26 28 30 32 Q34 28 40 36" fill="#3a2a1a"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#3a3a3a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#3a3a3a"/><path d="M26 48 Q30 50 34 48" stroke="#7a6a5a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 30 54 Q46 56 50 74 L44 84" fill="url(#cassian-jacket)"/><path d="M14 58 Q20 52 30 54 Q40 52 46 58 L42 68 Q30 62 18 68 Z" fill="url(#cassian-collar)"/></g></svg>`;

// MON MOTHMA - White robes, Rebel Alliance symbol hint - Big Five: A5 C5 E3 N3 O3
const MON_MOTHMA_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mothma-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/></linearGradient><linearGradient id="mothma-robe" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f0f0f8"/><stop offset="100%" style="stop-color:#b0b0c0"/></linearGradient><filter id="mothma-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#mothma-bg)"/><g opacity="0.3"><circle cx="72" cy="42" r="14" fill="#aa4040"/><path d="M72 30 L78 42 L72 54 L66 42 Z" fill="#c05050"/><circle cx="72" cy="42" r="6" fill="url(#mothma-bg)"/></g><g filter="url(#mothma-shadow)"><ellipse cx="30" cy="42" rx="11" ry="11" fill="#c0b0a0"/><path d="M20 38 Q26 32 30 36 Q34 32 40 38" fill="#aa6a4a"/><ellipse cx="26" cy="42" rx="2" ry="1.5" fill="#5a6a7a"/><ellipse cx="34" cy="42" rx="2" ry="1.5" fill="#5a6a7a"/><path d="M26 48 Q30 50 34 48" stroke="#8a7a6a" stroke-width="1.5" fill="none"/><path d="M14 84 Q12 58 30 54 Q46 56 50 74 L44 84" fill="url(#mothma-robe)"/><ellipse cx="30" cy="58" rx="8" ry="4" fill="#d0d0d8"/></g></svg>`;

// JABBA THE HUTT - Crime lord, slug - Big Five: A1 C3 E3 N2 O2
const JABBA_THE_HUTT_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="jabba-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#2a2a1a"/><stop offset="100%" style="stop-color:#101008"/></linearGradient><linearGradient id="jabba-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7a8a4a"/><stop offset="100%" style="stop-color:#4a5a2a"/></linearGradient><filter id="jabba-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#jabba-bg)"/><g filter="url(#jabba-shadow)"><ellipse cx="50" cy="54" rx="32" ry="24" fill="url(#jabba-skin)"/><ellipse cx="42" cy="42" rx="16" ry="14" fill="url(#jabba-skin)"/><ellipse cx="36" cy="40" rx="4" ry="3" fill="#aa8020"/><ellipse cx="48" cy="40" rx="4" ry="3" fill="#aa8020"/><ellipse cx="36" cy="40" rx="2" ry="1.5" fill="#2a2a1a"/><ellipse cx="48" cy="40" rx="2" ry="1.5" fill="#2a2a1a"/><path d="M34 50 Q42 54 50 50" stroke="#5a6a3a" stroke-width="2" fill="none"/><ellipse cx="50" cy="74" rx="18" ry="8" fill="url(#jabba-skin)"/></g></svg>`;

// ADMIRAL ACKBAR - Mon Calamari, tactician - Big Five: A4 C4 E3 N3 O2
const ADMIRAL_ACKBAR_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ackbar-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a2a"/><stop offset="100%" style="stop-color:#081010"/></linearGradient><linearGradient id="ackbar-skin" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#aa7a6a"/><stop offset="100%" style="stop-color:#6a4a3a"/></linearGradient><linearGradient id="ackbar-uniform" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#e8e0d0"/><stop offset="100%" style="stop-color:#a09080"/></linearGradient><filter id="ackbar-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#ackbar-bg)"/><g opacity="0.3"><ellipse cx="70" cy="48" rx="12" ry="8" fill="#4a6a8a"/></g><g filter="url(#ackbar-shadow)"><ellipse cx="30" cy="42" rx="14" ry="12" fill="url(#ackbar-skin)"/><ellipse cx="22" cy="38" rx="6" ry="8" fill="url(#ackbar-skin)"/><ellipse cx="38" cy="38" rx="6" ry="8" fill="url(#ackbar-skin)"/><circle cx="22" cy="38" r="3" fill="#eaea4a"/><circle cx="38" cy="38" r="3" fill="#eaea4a"/><circle cx="22" cy="38" r="1.5" fill="#1a1a1a"/><circle cx="38" cy="38" r="1.5" fill="#1a1a1a"/><path d="M24 50 Q30 54 36 50" stroke="#8a5a4a" stroke-width="2" fill="none"/><path d="M16 84 Q14 58 30 54 Q46 56 50 74 L46 84" fill="url(#ackbar-uniform)"/></g></svg>`;

// EWOK - Forest moon natives, cute warriors - Big Five: A4 C2 E4 N3 O3
const EWOK_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ewok-bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a2a1a"/><stop offset="100%" style="stop-color:#081008"/></linearGradient><linearGradient id="ewok-fur" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#6a5a3a"/><stop offset="100%" style="stop-color:#3a2a1a"/></linearGradient><filter id="ewok-shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/></filter></defs><circle cx="50" cy="50" r="48" fill="url(#ewok-bg)"/><g filter="url(#ewok-shadow)"><rect x="64" y="30" width="4" height="40" fill="#5a4a3a"/><ellipse cx="66" cy="28" rx="4" ry="6" fill="#6a5a4a"/></g><g filter="url(#ewok-shadow)"><ellipse cx="36" cy="44" rx="18" ry="16" fill="url(#ewok-fur)"/><ellipse cx="24" cy="34" rx="6" ry="6" fill="url(#ewok-fur)"/><ellipse cx="48" cy="34" rx="6" ry="6" fill="url(#ewok-fur)"/><ellipse cx="36" cy="44" rx="12" ry="10" fill="#8a7a5a"/><ellipse cx="30" cy="42" rx="3" ry="3" fill="#1a1a1a"/><ellipse cx="42" cy="42" rx="3" ry="3" fill="#1a1a1a"/><ellipse cx="30" cy="42" rx="1.5" ry="1.5" fill="#3a3a3a"/><ellipse cx="42" cy="42" rx="1.5" ry="1.5" fill="#3a3a3a"/><ellipse cx="36" cy="50" rx="3" ry="2" fill="#2a1a1a"/><path d="M22 84 Q20 62 36 58 Q52 60 56 78 L50 84" fill="url(#ewok-fur)"/></g></svg>`;

// ############################################################################
// Meta Icon for Star Wars archetype set
// ############################################################################

export const STAR_WARS_META_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="sw-meta-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#1a1a2a"/><stop offset="100%" style="stop-color:#080810"/>
        </linearGradient>
        <filter id="sw-meta-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="3" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/>
        </filter>
        <filter id="sw-meta-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#sw-meta-bg)"/>
    <g filter="url(#sw-meta-shadow)">
        <rect x="24" y="60" width="8" height="24" rx="1" fill="#8a8a90"/>
        <rect x="26" y="64" width="4" height="4" fill="#2a2a30"/>
    </g>
    <g filter="url(#sw-meta-glow)">
        <rect x="26" y="16" width="4" height="46" fill="#4aea4a"/>
    </g>
    <g opacity="0.4">
        <circle cx="70" cy="40" r="20" fill="#3a3a4a"/>
        <circle cx="70" cy="40" r="14" fill="none" stroke="#4a4a5a" stroke-width="1"/>
        <circle cx="62" cy="34" r="6" fill="#2a2a3a"/>
        <path d="M50 40 L90 40" stroke="#4a4a5a" stroke-width="1"/>
    </g>
</svg>`;

// ############################################################################
// EXPORT ARCHETYPE DEFINITIONS
// ############################################################################

export const STAR_WARS_ARCHETYPES: ArchetypeDefinition[] = [
	// Tier 1: Original Trilogy Heroes (6)
	{
		id: 'sw-luke-skywalker',
		name: 'Luke Skywalker',
		description: 'Farm boy turned Jedi Knight, hero of the Rebellion',
		traits: { agreeableness: 5, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 4 },
		svg: LUKE_SKYWALKER_SVG
	},
	{
		id: 'sw-han-solo',
		name: 'Han Solo',
		description: 'Smuggler with a heart of gold and quick trigger finger',
		traits: { agreeableness: 2, conscientiousness: 2, extraversion: 5, negative_emotionality: 3, open_mindedness: 4 },
		svg: HAN_SOLO_SVG
	},
	{
		id: 'sw-princess-leia',
		name: 'Princess Leia',
		description: 'Rebel leader, diplomat, and fearless warrior',
		traits: { agreeableness: 4, conscientiousness: 5, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: PRINCESS_LEIA_SVG
	},
	{
		id: 'sw-chewbacca',
		name: 'Chewbacca',
		description: 'Loyal Wookiee co-pilot with a fierce roar',
		traits: { agreeableness: 4, conscientiousness: 3, extraversion: 3, negative_emotionality: 3, open_mindedness: 2 },
		svg: CHEWBACCA_SVG
	},
	{
		id: 'sw-c3po',
		name: 'C-3PO',
		description: 'Anxious protocol droid fluent in over six million forms',
		traits: { agreeableness: 4, conscientiousness: 5, extraversion: 2, negative_emotionality: 5, open_mindedness: 2 },
		svg: C3PO_SVG
	},
	{
		id: 'sw-r2d2',
		name: 'R2-D2',
		description: 'Brave astromech droid with a beeping attitude',
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 4, negative_emotionality: 1, open_mindedness: 4 },
		svg: R2D2_SVG
	},
	// Tier 2: Original Trilogy Villains & Others (5)
	{
		id: 'sw-darth-vader',
		name: 'Darth Vader',
		description: 'Fallen Jedi, Sith Lord, and agent of the Empire',
		traits: { agreeableness: 1, conscientiousness: 5, extraversion: 3, negative_emotionality: 4, open_mindedness: 2 },
		svg: DARTH_VADER_SVG
	},
	{
		id: 'sw-emperor-palpatine',
		name: 'Emperor Palpatine',
		description: 'Sith Master manipulator behind the Empire',
		traits: { agreeableness: 1, conscientiousness: 5, extraversion: 4, negative_emotionality: 2, open_mindedness: 4 },
		svg: EMPEROR_PALPATINE_SVG
	},
	{
		id: 'sw-boba-fett',
		name: 'Boba Fett',
		description: 'Silent bounty hunter with a reputation',
		traits: { agreeableness: 1, conscientiousness: 4, extraversion: 2, negative_emotionality: 2, open_mindedness: 2 },
		svg: BOBA_FETT_SVG
	},
	{
		id: 'sw-grand-moff-tarkin',
		name: 'Grand Moff Tarkin',
		description: 'Cold Imperial commander of the Death Star',
		traits: { agreeableness: 1, conscientiousness: 5, extraversion: 3, negative_emotionality: 1, open_mindedness: 2 },
		svg: GRAND_MOFF_TARKIN_SVG
	},
	{
		id: 'sw-lando-calrissian',
		name: 'Lando Calrissian',
		description: 'Charming gambler and Cloud City administrator',
		traits: { agreeableness: 3, conscientiousness: 2, extraversion: 5, negative_emotionality: 3, open_mindedness: 4 },
		svg: LANDO_CALRISSIAN_SVG
	},
	// Tier 3: Prequel Era Jedi (5)
	{
		id: 'sw-obi-wan-kenobi',
		name: 'Obi-Wan Kenobi',
		description: 'Wise Jedi Master and mentor to Skywalkers',
		traits: { agreeableness: 5, conscientiousness: 5, extraversion: 3, negative_emotionality: 2, open_mindedness: 4 },
		svg: OBI_WAN_KENOBI_SVG
	},
	{
		id: 'sw-anakin-skywalker',
		name: 'Anakin Skywalker',
		description: 'The Chosen One, torn between light and dark',
		traits: { agreeableness: 3, conscientiousness: 2, extraversion: 4, negative_emotionality: 5, open_mindedness: 4 },
		svg: ANAKIN_SKYWALKER_SVG
	},
	{
		id: 'sw-yoda',
		name: 'Yoda',
		description: 'Ancient Jedi Master of infinite wisdom',
		traits: { agreeableness: 5, conscientiousness: 5, extraversion: 2, negative_emotionality: 1, open_mindedness: 5 },
		svg: YODA_SVG
	},
	{
		id: 'sw-mace-windu',
		name: 'Mace Windu',
		description: 'Stern Jedi Council member with a purple blade',
		traits: { agreeableness: 3, conscientiousness: 5, extraversion: 3, negative_emotionality: 2, open_mindedness: 3 },
		svg: MACE_WINDU_SVG
	},
	{
		id: 'sw-qui-gon-jinn',
		name: 'Qui-Gon Jinn',
		description: 'Maverick Jedi who follows the Living Force',
		traits: { agreeableness: 4, conscientiousness: 3, extraversion: 3, negative_emotionality: 2, open_mindedness: 5 },
		svg: QUI_GON_JINN_SVG
	},
	// Tier 4: Prequel Era Villains (3)
	{
		id: 'sw-darth-maul',
		name: 'Darth Maul',
		description: 'Fierce Sith assassin with a double-bladed saber',
		traits: { agreeableness: 1, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 2 },
		svg: DARTH_MAUL_SVG
	},
	{
		id: 'sw-count-dooku',
		name: 'Count Dooku',
		description: 'Aristocratic fallen Jedi turned Sith Lord',
		traits: { agreeableness: 2, conscientiousness: 5, extraversion: 3, negative_emotionality: 2, open_mindedness: 4 },
		svg: COUNT_DOOKU_SVG
	},
	{
		id: 'sw-jango-fett',
		name: 'Jango Fett',
		description: 'Bounty hunter and template for the clone army',
		traits: { agreeableness: 2, conscientiousness: 4, extraversion: 3, negative_emotionality: 2, open_mindedness: 2 },
		svg: JANGO_FETT_SVG
	},
	// Tier 5: Supporting & Extended (6)
	{
		id: 'sw-padme-amidala',
		name: 'Padmé Amidala',
		description: 'Queen, senator, and warrior for peace',
		traits: { agreeableness: 4, conscientiousness: 5, extraversion: 4, negative_emotionality: 2, open_mindedness: 3 },
		svg: PADME_AMIDALA_SVG
	},
	{
		id: 'sw-cassian-andor',
		name: 'Cassian Andor',
		description: 'Rebel spy willing to do whatever it takes',
		traits: { agreeableness: 3, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 3 },
		svg: CASSIAN_ANDOR_SVG
	},
	{
		id: 'sw-mon-mothma',
		name: 'Mon Mothma',
		description: 'Diplomatic leader of the Rebel Alliance',
		traits: { agreeableness: 5, conscientiousness: 5, extraversion: 3, negative_emotionality: 3, open_mindedness: 3 },
		svg: MON_MOTHMA_SVG
	},
	{
		id: 'sw-jabba-the-hutt',
		name: 'Jabba the Hutt',
		description: 'Powerful crime lord of Tatooine',
		traits: { agreeableness: 1, conscientiousness: 3, extraversion: 3, negative_emotionality: 2, open_mindedness: 2 },
		svg: JABBA_THE_HUTT_SVG
	},
	{
		id: 'sw-admiral-ackbar',
		name: 'Admiral Ackbar',
		description: "Mon Calamari tactician who knows it's a trap",
		traits: { agreeableness: 4, conscientiousness: 4, extraversion: 3, negative_emotionality: 3, open_mindedness: 2 },
		svg: ADMIRAL_ACKBAR_SVG
	},
	{
		id: 'sw-ewok',
		name: 'Ewok',
		description: 'Adorable forest warriors of Endor',
		traits: { agreeableness: 4, conscientiousness: 2, extraversion: 4, negative_emotionality: 3, open_mindedness: 3 },
		svg: EWOK_SVG
	}
];
