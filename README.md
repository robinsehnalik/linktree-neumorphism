# Link Tree Landing Page Template

A clean, responsive, and accessible Linktree-style landing page built with Astro 5, Tailwind CSS v4, and Astro Content Collections. Designed specifically for content creators, influencers, designers, and educators to curate all their links, social channels, and services in one place.

## Features

- **Influencer Profile Header**: Verified creator badge, high-res avatar, bio, location, live metric stats (subscribers, views, newsletter).
- **Social Media Icons Strip**: Direct links to YouTube, Instagram, X/Twitter, TikTok, GitHub, Spotify, with generous accessible hit targets (≥44px).
- **Categorized & Highlighted Links**:
  - Featured highlights (latest videos, priority announcements) with subtle gradient glow.
  - Digital products & presets with discount badges.
  - Services (1-on-1 mentorship, consulting calls).
  - Media & Community channels (podcasts, gear lists, Discord community).
- **Native Share Profile API**: Native mobile sharing dialog with automatic clipboard fallback and accessible toast notification.
- **Lead Capture / Newsletter Form**: Embedded newsletter subscription form with loading spinner, disabled state during submit, and inline validation messages.
- **Light & Dark Mode**: Persistent theme switching adhering to `prefers-color-scheme`.
- **Astro Content Collections**: Type-safe YAML schema in `src/content.config.ts` for editing profile details and links.
- **Web Design Guidelines & Performance**: WCAG-compliant contrast, smooth transitions, `prefers-reduced-motion` support, zero layout shift (CLS), and optimized WebP images.

## Structure

```text
src/
├── assets/                  # High-resolution optimized avatars & assets
├── components/
│   ├── BaseHead.astro       # SEO, OpenGraph, meta tags
│   ├── Header.astro         # Top bar with share sheet & theme toggle
│   ├── ProfileHeader.astro  # Avatar, stats, bio, socials
│   ├── LinkCard.astro       # Interactive card component with tags & icons
│   ├── NewsletterCard.astro # Email newsletter sign-up with feedback
│   ├── ThemeToggle.astro    # Light/Dark mode switcher
│   └── Footer.astro         # Legal links, copyright, and credits
├── content/
│   ├── links/links.yml      # Link categories, titles, tags, and URLs
│   └── profile/alex.yml     # Influencer details, metrics, and socials
├── layouts/
│   └── BaseLayout.astro     # Core layout shell & ambient gradient
├── pages/
│   └── index.astro          # Landing page entry point
├── styles/
│   └── global.css           # Tailwind v4 styles, theme tokens & design rules
└── site-config.yml          # Global site metadata
```

## Getting Started

```sh
# Install dependencies
bun install   # or npm install

# Start local dev server
bun run dev   # or npm run dev

# Run type & diagnostic checks
bun astro check

# Build for production
bun run build # or npm run build
```
