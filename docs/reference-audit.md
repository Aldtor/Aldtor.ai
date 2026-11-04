# Reference audit — therishithakor.com

Inspected 4 November 2026. Independent HTTP/browser-readable inspection succeeded for all seven routes below. Exact CSS values and interaction mechanisms were verified against the public HTML's inline CSS/JavaScript. Screenshots are inspection evidence only: do not ship the reference portrait, brand work, photographs, card artwork or recordings as portfolio assets.

## Sitemap and content architecture

| Route | Observed structure |
| --- | --- |
| `/` (`/home` redirects here in earlier inspection) | Intro loader; navigation and clock; full-height portrait hero; rotating role calendar; ability-card overlay; skill-door wall; five-entry career timeline; enquiry CTA; multi-column footer. |
| `/web-developer/` | Back-to-doors control, oversized introduction, seven sticky projects: two recorded website builds and five live website/tool/content examples, shared CTA/footer. |
| `/app-developer/` | Four sticky iOS projects: personal finance, private photo vault, arcade game and dice utility. Phone mockups hold recordings; shared CTA/footer. |
| `/ui-ux-designer/` | Five projects covering a SaaS dashboard, booking flow, agency website, product-page concept and shipped financial site. Monitor/prototype media; shared CTA/footer. |
| `/graphic-designer/` | Five themed campaign sections: real estate, premium water, fashion, AI-company carousels, posters/logos. Prints hang along horizontal clotheslines, with image/carousel lightboxes. |
| `/photographer/` | Fullscreen draggable photographic wall; back-to-doors chip; drag hint; image viewer with previous/next and close. No conventional project-page footer in fetched content. |
| `/legal/` | Narrow long-form privacy and credits page, back link, section headings and explanatory prose. |

Home navigation links to the four primary skill routes, story and contact. Photography also appears in the footer and the hidden fifth door. Story is a home section; contact is an overlay, not an independently observed route. Do not invent missing route availability: every requested route returned content.

## Visual system (source verified)

- Typeface: locally hosted variable **Onest**, weight range 100–900, system sans fallback. Display text uses tight tracking and approximately 0.95 line-height; normal descriptions approximately 1.55–1.6.
- Light theme: background `#E8E4E0`, foreground `#1A1818`, muted `#857878`, subtle `#B5A8A8`, hairlines `#D5CDCA`, surfaces `#DED8D4` and `#D3CBC8`, accent range `#C4B0B0` to `#6B5C5C`. Dark theme changes the same tokens rather than inverting pictures.
- Shell maximum is 88rem; desktop side gutter 5.5rem/88px. Detail-page mobile side gutter 16px plus safe-area allowance. Home uses responsive root-font scaling, so a rem does not always equal 16px.
- Primary navigation is expanded at 1200px, menu below that. Pills are fully rounded; project cards have 28px desktop and 22px mobile corners. Thin borders, broad soft shadows and subtle gradients create physical depth.
- Detail-page title uses `clamp(34px,8.2vw,104px)`, weight 600. Project titles use `clamp(30px,3.4vw,46px)` on desktop. Category metadata is small uppercase monospace; pills group tags.

## Home composition and interactions

The hero anchors a cutout portrait to the lower status hairline on the right, with a pale oversized name watermark behind it. Greeting and a perspective flip-calendar role widget sit left. Availability and location sit in the bottom strip. The ability-card trigger is attached near the portrait. Header clock, pill controls and suspended pull cord maintain the physical-object language.

The pull cord is a canvas-backed draggable theme control. Source defines persistent light/dark choice and view transitions. The ability overlay is layered card artwork with pointer tilt, a flip on activation, sheen and loading progress. Reproduction should use original text/CSS artwork rather than the reference's card textures.

The door section is a wall-and-floor scene. Arched doors have 1:2.25 proportions, fluted panels, layered moulded frames, handles, lights and shadows. Primary door colours include navy `#22304a`, mauve `#4a3540`, sage `#7a8670` and burnt orange `#a4552c`; photography uses dusty pink. Desktop hover opens a hinged panel and fades the other doors while showing a skill description. A secret fifth door is revealed by shifting the four-door row. Entering a door uses a perspective passage transition. Mobile exposes a horizontally traversable wall, indicators and swipe hint; hover cannot be the only access path.

The timeline has five chronological entries. Its title/year column remains beside the scrolling content; digit columns animate the displayed year. Individual entries progress through education, internships and employment to independent practice. Preserve the mechanism with the user's own verified biography, not the reference person's history.

Contact overlay contains name, email, phone and message, an anti-spam honeypot, close control and submit action. Public source/legal text describes Netlify Forms on the reference host and a mail-client fallback elsewhere. This audit did not submit a message. A reproduction must use its own configured endpoint or clearly identified mail fallback; never post to the reference owner's form.

## Detail-page behavior

Web and UI/UX projects stack with `position:sticky`, each offset 14px farther below navigation. Desktop cards alternate 5:7 and 7:5 text/media columns at 900px and above. Monitors use CSS perspective, a slight Y rotation, bevels, stand and floor shadow. Card media and copy enter as they approach the viewport; cards dim/scale as later cards overlap. Some monitor screens hold video; others pan long page screenshots. The app page uses analogous cards with iPhone-shaped media.

Below 900px, media is above copy, cards have compact padding, tags disappear and descriptions clamp to three lines. The source caps card height relative to the small viewport. A reproduction should check long user content rather than assume that cap is universally safe.

Graphic design is a materially different layout: each campaign owns a tall scroll region (default 300vh) containing a viewport-height sticky scene. Scroll progress translates a row of prints across a string. CSS pegs and paper frames cast shadows, hover lifts a print, campaign colours change between sections, and a bottom progress line reflects the horizontal traversal. Carousel prints appear as layered stacks. Viewer controls and swipe behavior expose the remaining slides.

Photography uses a reusable image-cell wall and camera coordinates. Pointer dragging accumulates momentum; wheel/trackpad and keyboard inputs also pan. Full-resolution pictures load in the lightbox. Images are decorative until activated; close and next/previous controls accompany the viewer. This is distinct from a standard masonry gallery.

Footer uses a very large two-line invitation, availability indicator, work/navigation/status columns, oversized name treatment, legal link and back-to-top control. On small screens columns stack and interactive footer targets are at least 44px. The source includes reduced-motion branches for decorative movement, entry effects, card transitions and skeleton shimmer.

## Media and implementation recommendations

Use the supplied Satyam photographs for identity, with a clean mask/crop where practical. Make original project previews, monitor contents, phone UI and sample artwork, clearly marked as concepts when no real project evidence is supplied. Do not imply reference projects, clients or biography belong to Satyam. Use CSS/SVG for doors, floor, frames, cord, calendar and device shells. Keep raster assets local, compressed and explicitly documented.

Recommended order: shared tokens and responsive navigation; hero silhouette/calendar; doors and route entry; route-specific project layouts; story/contact/footer; theme, keyboard and reduced-motion behavior. Test small widths, direct route loads, overlay focus/escape, mobile scrolling, and forms with no endpoint configured.

Acceptable documented simplifications: CSS cord instead of a physical rope simulation; CSS card face instead of extracted copyrighted textures; finite panning photography wall rather than an unbounded virtualized wall; smaller original project collection; no third-party analytics unless separately configured. Such choices preserve usability but should not be reported as exact reference parity.

## Evidence and limits

Sources: [home](https://therishithakor.com/), [web](https://therishithakor.com/web-developer/), [app](https://therishithakor.com/app-developer/), [UI/UX](https://therishithakor.com/ui-ux-designer/), [graphic](https://therishithakor.com/graphic-designer/), [photography](https://therishithakor.com/photographer/), [legal](https://therishithakor.com/legal/). Public source was fetched independently; behavior described as source verified has not necessarily been exercised in the live UI. No contact submission or consent to analytics was performed. Browser capture status is recorded below.
