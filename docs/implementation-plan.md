# ALDTOR portfolio implementation

## Foundation
The workspace was empty apart from two supplied photographs (`sa_Photo14.jpeg`, `saty.jpeg`). There was no repository, framework, project inventory, biography, email, or existing integration to preserve. Original photos remain untouched.

Next.js App Router, React, strict TypeScript, CSS modules and a central CSS token system. Static export emits directly accessible HTML routes. Lucide provides interface icons; CSS and pointer events handle motion without a large animation dependency.

## Routes
`/`, `/home/` (canonical home alias), `/web-developer/`, `/app-developer/`, `/ui-ux-designer/`, `/graphic-designer/`, `/photographer/`, `/legal/`, plus a custom 404, sitemap and robots.

## Ownership and coordination
- Main orchestrator: dependencies, architecture, routes, central content, assets, metadata, documentation, integration, build and final QA fixes.
- Reference researcher: read-only observation, route inspection and reference evidence. Initial research completed; browser capture was interrupted by host resource exhaustion.
- Design system agent: `components/layout`, `components/navigation`, `styles`, `config`; delivered header, footer, tokens and config.
- Homepage/story agent: `components/home`, `components/timeline`.
- Portfolio agent: `components/services`, `components/project-showcase`.
- Interaction agent: `components/interactive`, `components/contact`, `components/gallery`.
- Independent QA agent: runs after integration; `docs/qa-report.md` and dedicated browser tests.

Three specialists run alongside the main agent, respecting the four-slot session limit. Interrupted agents were replaced with bounded tasks after Windows paging-file exhaustion; saved files were retained.

## Design contract
Observed reference: Onest, warm paper #E8E4E0, charcoal #1A1818, taupe muted #857878, lines #D5CDCA. Huge restrained typography, physical arched skill doors, portrait hero and generous whitespace. Use actual ALDTOR photos and identity; no copied reference artwork or biography.

Shared tokens and button classes live in `src/styles/globals.css`. Components dispatch `aldtor:contact`, `aldtor:ability`, `aldtor:consent`; `ExperienceLayer` hosts dialogs. `siteConfig` and `src/content/portfolio.ts` own public content.

## Content integrity
No reliable completed projects were supplied, so original interactive concept studies are explicitly labeled. No client, metric, qualification or employment is invented. The timeline presents creative process until actual dated story entries are configured. Unconfigured contact can copy/download a brief; configured contact opens a preaddressed email draft and never claims delivery.

## Verification
Run type checking, lint and production static export. Run Edge through Playwright without downloading another browser. Inspect every route, interactions, reduced motion, dialogs, keyboard, errors, assets, mobile navigation and overflow at 1920/1440/1024/768/430/390/360 widths. Capture 1440×900, 1024×768 and 390×844 screenshots. Independent QA reports evidence and limits; main fixes high-priority issues before delivery.
