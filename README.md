# From the Hills of Parbung

A digital literary archive preserving the bilingual poetry, essays, and tribal narratives of **Hosea Khawbung**, from the hill village of Parbung in Pherzawl District, Manipur.

Website: [fromthehillsofparbung.onrender.com](https://fromthehillsofparbung.onrender.com)

---

## About the Archive

This repository houses the collected literary works of Hosea Khawbung written between 2017 and the present day. His writing moves fluidly between **Hmar**—the language of his birth, oral folklore, and ancestral hearth—and **English**, his medium of engagement with wider academia and global literature.

### Key Features

- **Poem-First Reading Experience**: The homepage opens directly into a curated rotating poem, with an interactive on-demand cycle button (`Another poem ↻`) that reveals different short pieces on every visit.
- **Complete Chronological Archive ("The List")**: Comprehensive listing of all 70+ poems and essays organized by year and date.
- **Language & Subject Index**: Dedicated linguistic sections distinguishing his original Hmar verses from his English corpus and literary tributes (such as dialogues with Khasi poet *Kynpham Sing Nongkynrih*).
- **Literary Colophon & Author Register**: Dedicated About page featuring an epigraph from *To be your poet*, publication colophon, and verified researcher profiles (ORCID, ResearchGate).
- **Typography & Aesthetics**: Typeset in variable cuts of **Source Serif 4** and **JetBrains Mono** on dual washi-paper and ink-charcoal palettes (`light-dark()`).
- **Complete Structured Data (JSON-LD)**: Rich Schema.org graph integration covering `WebSite`, `Person` (author and developer disambiguation), `BlogPosting` for every verse, and `ProfilePage`.
- **Syndication & Machine Discovery**: Built-in RSS 2.0 feed (`/rss.xml`), sitemaps, `robots.txt`, and plain-text LLM index (`/llms.txt`).

---

## Project Structure

```text
├── src/
│   ├── components/       # UI elements (Header, Footer, PostCard, SocialIcon, etc.)
│   ├── content/
│   │   └── blog/         # Markdown content collection for all 70+ poems and essays
│   ├── layouts/          # BaseLayout, PostLayout
│   ├── pages/            # Homepage, Poems list, The List archive, Index, About
│   ├── styles/           # Design tokens, typography, and prose CSS
│   ├── utils/            # Schema.org JSON-LD graph, date formatters, reading time
│   └── config.ts         # Central site, author, and navigation configuration
├── public/               # Self-hosted web fonts, favicon, and static assets
└── astro.config.ts       # Astro configuration and integrations
```

---

## Development

Requires **Node.js 22.12 or newer**.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Typecheck and validate Astro files
npm run check

# Build production static bundle to ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## Lineage & Credits

- **Author & Poet**: Hosea Khawbung ([GitHub](https://github.com/hoseakb) · [Instagram](https://www.instagram.com/hosea_khawbung) · [ResearchGate](https://www.researchgate.net/profile/Hosea-Lalremruot) · [ORCID](https://orcid.org/0009-0003-4131-1286))
- **Digital Archive Architecture**: Built and maintained by **Donal Muolhoi** ([thingpuisen.pages.dev](https://thingpuisen.pages.dev))
- **Base Lineage**: Built as a customized, re-engineered edition adapted from the open-source Sumi theme by kpab.

---

## License

- **Literary Works**: All poems, essays, and written materials are the intellectual property of **Hosea Khawbung**. © 2017–2026 Hosea Khawbung. All rights reserved.
- **Source Code**: The website architecture and theme codebase are open source under the [MIT License](./LICENSE).
