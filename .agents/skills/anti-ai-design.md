---
name: anti-ai-design-audit
description: Enforces polished, distinct UI/UX and web typography by eliminating generic "AI template" aesthetics, clichéd layout tropes, and unstyled component defaults. Use whenever auditing frontend code, styling landing pages, designing web components, or reviewing design systems.
---

# Anti-Template Web Design Standards

## Purpose

Prevent modern web interfaces from collapsing into generic "AI template" aesthetics. This skill enforces intentional typographic hierarchy, robust contrast, custom interaction states, and distinctive layouts while strictly prohibiting overused landing page gimmicks.

---

## 1. Strict Prohibitions ("Do Not Use")

### Visuals & Surfaces

- **Cliche Gradients:** No purple-to-blue default gradients. No multi-stop gradient fills on hero headlines (`bg-clip-text`).
- **Gimmick Textures & Lighting:** No lazy noisy film grain overlays over flat gradients. No cursor-following glow balls, radial blur blobs, or ambient flashlight beams.
- **Glassmorphism Excess:** No thick white borders with heavy backdrop-blur (`backdrop-blur-md bg-white/5 border-white/10`) unless serving a distinct floating overlay utility (e.g., sticky nav).
- **Accent Crutches:** No cards styled solely via an arbitrary 2px–4px colored left border (`border-l-4 border-indigo-500`).

### Layout & Composition

- **The "AI SaaS" Hero Template:** Do not stack:
  1. Tiny rounded pill badge (`✨ Introducing v2.0 ->`)
  2. Oversized gradient headline
  3. Single paragraph of buzzwords
  4. Centered CTA row
- **The "Three Icon Boxes" Row:** Replace horizontal triplets of uniform rounded cards containing an icon, bold title, and two-sentence body with asymmetric grids, split comparisons, interactive demos, or list-detail views.
- **Arbitrary Padding:** No random Tailwind spacing steps (e.g., mixing `p-5`, `p-7`, `p-11`). Adhere to a strict 4-point/8-point spacing scale.

### Typography & Copy

- **Font Monoculture:**
  - Do not default to `Inter` without explicit project requirement.
  - Avoid the cliché pairing: `Space Grotesk` (headings) + `Instrument Serif` (italic accents).
  - Stop using isolated serif italic words inside modern sans-serif headlines as a cheap touch of "editorial elegance".
- **Emoji Headings:** Never embed emojis into `h1`, `h2`, or `h3` tags (e.g., `## 🚀 Supercharge Your Workflow`).
- **Copy & Punctuation:**
  - Strip buzzword bloat ("unleash", "streamline", "frictionless", "single pane of glass", "next-gen"). State concrete product capability.
  - Ban excessive em dashes (`—`) throughout marketing prose and UI microcopy; use clean sentence breaks.

### Icons & Components

- **Raw Stock Libraries:** Avoid unstyled, default Lucide/Heroicons scattered without consistent stroke weight, container frames, or optical alignment.
- **Stock shadcn/ui:** Never ship raw, unconfigured shadcn/ui defaults without tuning border radiuses, font weights, palette variables, and elevation to match the brand.

### Motion & Interaction

- **Lazy Scroll Reveals:** Do not apply generic `opacity: 0 -> 1; translateY(20px)` intersection observers to every single DOM node. Let content render stably.
- **Weak Hover States:** Never implement button hover states that simply reduce opacity (`hover:opacity-80`). Build tangible visual responses: background shifts, border adjustments, subtle depth elevation, or crisp foreground translations.
- **Dark Mode Slop:** Eliminate low-contrast dark themes where surface, card, and text blur together. Minimum body text contrast ratio must meet WCAG AA (4.5:1).

---

## 2. Review Checklist

When writing or reviewing markup, styles, or page structures, verify:

1. **Hierarchy:** Does the page direct focus through scale, negative space, and contrast rather than glowing effects and decorative pills?
2. **Intentional Surfaces:** Are cards differentiated using subtle background tints or crisp structural borders rather than blurred glass and neon accents?
3. **Typography:** Is type selection purposeful? Are line-heights and measure (45–75 characters per line) tuned for legibility?
4. **Interaction Feedback:** Do interactive elements communicate clickability through cursor choice, color shifts, and defined focus rings?
5. **Content-First Layout:** Does the layout reflect the specific data/story being presented, rather than forcing content into identical symmetrical boxes?
