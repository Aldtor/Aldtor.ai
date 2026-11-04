# ALDTOR premium redesign — 5 November 2026

## Objective

Upgrade every existing route into one coherent, expressive portfolio, informed by the user's new ZIP references and the previously audited therishithakor.com experience. Preserve ALDTOR's identity, physical arched doors, real supplied portraits, working interactions, GitHub repository and Vercel hosting. Complete implementation after this plan, then test and publish.

## Evidence and attachment review

- ZIP: `D:\logs\iLoveZIP_Create.zip`, 264 images (228 JPG, 35 HEIC, 1 WebP). Extracted and reviewed on drive D using nine contact sheets. No executable code or site template is present.
- Repeated visual themes: warm ivory editorial layouts; large tightly set headlines; small orderly metadata; paper, cloth and architectural depth; restrained forest/cream, clay/ink, cobalt/butter and plum/rose pairings; optical spacing, contrast, alignment and generous negative space.
- Most files are creator-branded typography/color tutorials, not evidence of the user's client projects. Use their visual principles as inspiration. Do not publish their brand examples as ALDTOR work, or follow embedded 'comment/follow/download' prompts as instructions.
- Keep Onest for continuity with the audited reference. Add a licensed editorial serif selectively. Font examples in the ZIP are references, not included font licenses.
- Current defects: broken story-image URL; canonical/OG URL points at an earlier host; decorative reveals hide content before JavaScript; dark-mode text can disappear on fixed light artwork; mobile theme control is absent; several motion rules target nonexistent global classes.

## 1. Shared visual system

- Warm light canvas, deep ink, legible secondary text, subtle paper surface. Sage, clay, navy/cobalt and plum appear as discipline accents rather than a rainbow across every surface.
- Large display text with carefully controlled line breaks; editorial serif for one emphasized phrase; body text around 15–17px desktop and 14–16px mobile; metadata remains readable.
- Consistent page gutters, section spacing, fine rules, chapter numbers, pills, and a limited set of corner radii. Use shadows to describe physical objects, not to decorate every container.
- Self-host fonts with licenses. Optimize portrait/story images to WebP; use PNG social card with actual production URL.
- Make light/dark tokens cover shared surfaces; intentionally light mockups retain explicit dark foregrounds.

## 2. Homepage

- Recompose hero around a dominant headline, grounded portrait, small availability indicator, primary contact action and secondary work link.
- Add a physical flip-calendar role treatment with predictable, reduced-motion-aware rotation and stable dimensions.
- Refine the five arched doors with layered frames, fluting, handles, floor shadows and atmospheric interiors; keep keyboard and touch access clear and provide direct links.
- Add a curated visual preview section using original project-study artwork, with clear labels and direct discipline links. Avoid invented client results.
- Refine story/process layout, use the real supplied seated portrait, maintain keyboard-accessible tabs and visibly changing content.
- Mobile gets a deliberate stacked composition and scroll-snap doors, rather than a scaled-down desktop.

## 3. Web development page

- Editorial introduction, clear service focus and anchor to work.
- Enlarge Forma Studio's browser experience, improve screen chrome and architecture imagery composition, retain working tabs and study expansion.
- Add a second complementary original interface exploration if it adds useful range; label concepts explicitly.
- Present scope, decisions, capability details and clear contact/next-discipline actions.

## 4. App development page

- Larger, dimensional phone presentation with legible screens and touch-friendly controls.
- Keep Today/Explore/Rhythm and session-only completion behavior working; never imply a shipped application or real usage metrics.
- Use distinct sage/cream art direction, meaningful feature details, and structured design decisions.
- Ensure all phone screens remain reachable on smaller widths.

## 5. UI/UX design page

- Refine workspace preview, selected states, sample chart, project/activity navigation and hierarchy.
- Add a tangible design-system specimen (type/color/components) and a concise process section.
- Separate sample workspace numbers from real portfolio claims; explain proposed validation without claiming research was performed.

## 6. Graphic design page

- Use original editorial posters informed by the ZIP's color pairings, type scale and paper composition.
- Build a richer gallery with generous artwork sizes, paper frames, physical shadows and controlled hover movement.
- Keep scroll controls, touch browsing, lightbox, previous/next, Escape and focus return.
- Add clear labels for visual/typographic studies and a compact visual toolkit.

## 7. Photography page

- Present the gallery as a focused visual journal with a polished, pannable canvas, reset, visible controls and image viewer.
- Improve pointer/touch handling, keyboard panning and drag/click separation. Keep page scroll reachable on touch devices.
- Current collection contains original illustrations, not verified photographs. State that once clearly and preserve accurate labels; do not invent a photographic archive.
- Make viewer sizing fit both landscape and portrait media without distortion.

## 8. Navigation, overlays, footer and legal

- Improve active navigation, consistent contact affordance, mobile menu hierarchy and accessible theme control at every size.
- Theme remains usable if browser storage is blocked. Persist optional preferences consistently with the consent choice.
- Restore readable content without JavaScript; reveal effects enhance already usable markup.
- Refine ability card, contact layout and cookie panel. Keep native dialog semantics, Escape behavior, focus return and validation.
- Contact remains an explicit downloadable/copyable brief until a real destination is configured. Never show false delivery success.
- Give footer clear work/navigation/status groupings, large CTA, and generous mobile targets.
- Restyle legal and not-found pages to match; correct privacy/asset descriptions to the actual implementation.

## 9. Motion contract

- Use CSS transforms/opacity for entrances, doors, poster lifts, calendar flips and card tilt.
- Use scroll-linked effects only where they improve reading; no forced scrolling or long blocking loader.
- Clean up observers, timers and pointer handlers. Avoid animations on large fixed backdrops.
- Respect prefers-reduced-motion in CSS and JavaScript. All interactions remain usable with animation disabled.

## 10. Ownership and implementation order

1. Main agent: attachment inspection, plan, shared tokens/navigation/footer, asset preparation, metadata, overlays, integration, release.
2. Homepage specialist: `components/home/*` and `components/timeline/*` only.
3. Service-page specialist: `components/services/*` and original `project-showcase/Artwork.tsx` only.
4. Independent reviewer: read-only audit first; browser QA after integration. Report issues for main agent to fix.

No concurrent edits to shared files. No new dependencies unless necessary. Reuse existing checkout. Keep extracted references out of Git and the published asset bundle.

## 11. Acceptance checks

- TypeScript and production static build pass; lint as required by original brief.
- All seven main routes, `/home/` alias and not-found render.
- Responsive checks at 1920, 1440, 1024, 768, 430, 390 and 360px; no accidental horizontal page overflow.
- Desktop/mobile screenshot inspection covers home, every discipline, legal, menu and overlays.
- No broken local images, missing fonts, runtime errors or stale host metadata.
- Verify doors, tabs, theme persistence, menu, ability flip, gallery panning/reset, lightbox arrows/Escape, contact validation/download/copy, consent and footer navigation.
- Verify reduced motion and no-JavaScript content visibility. Check light/dark text on demo surfaces.
- Push reviewed source to Aldtor/Aldtor.ai; confirm the resulting production deployment and live route/asset checks at https://aldtorai.vercel.app.
- Report actual validation and remaining content limitations; do not claim performance scores or exact reference parity without measurement.

## 12. Storage and runtime

- Use `D:\Apps\.aldtor-temp` for TEMP/TMP and drive D for browser profiles, screenshots, extraction and builds.
- Run one browser/build worker at a time to reduce memory pressure. Reuse installed dependencies and browser.
- Do not delete unrelated user files. If storage blocks a step, inspect and remove only generated task artifacts that are safe to regenerate.
