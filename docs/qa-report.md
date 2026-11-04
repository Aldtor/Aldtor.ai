# ALDTOR independent QA

Status: route, viewport, image, interaction and reduced-motion checks run locally; remaining failures are tracked below.

## Scope

Seven required routes: `/`, `/web-developer/`, `/app-developer/`, `/ui-ux-designer/`, `/graphic-designer/`, `/photographer/`, `/legal/`.

Prepared `tests/qa.spec.ts` for one-worker Edge execution. The passing suite covers 49 route/viewport combinations at widths 1920, 1440, 1024, 768, 430, 390 and 360; one mobile viewport screenshot per route; browser errors, image load failures, invalid links, page headings and descriptions; consent persistence and editing; contact validation/download; modal focus return; ability card flip; discipline doors; keyboard timeline; service concept controls; gallery keyboard navigation; canvas pointer drag/reset; mobile navigation and touch tapping; reduced-motion and blocked-storage resilience.

## Code audit findings

- Native dialog elements provide modal behavior. Contact and gallery dialogs explicitly restore focus. Escape behavior is wired through native cancellation.
- Contact form validates required fields, focuses the first error, and clearly distinguishes a downloaded/copied draft from a sent message.
- Timeline implements roving keyboard focus with arrows, Home and End.
- Photography canvas supports pointer drag, keyboard movement and reset. Graphic poster rail supports native scrolling and arrow controls; it does not presently implement mouse grab-and-drag.
- Each required route has metadata. Service and legal routes provide canonical URLs.
- Projects, contact email, personal biography and social destinations have intentionally not been invented. Verified-project modal/video/live-link branches cannot be exercised while the project list is empty.

## Limits

Next 16 placed some exported App Router page payloads one folder deeper than the paths requested by client navigation. The production build now copies these payloads to the requested static paths; the preview server also resolves the nested form. The full Edge suite then passed: 7 tests covering the 49 route/viewport combinations and functional checks. The earlier memory failure came from full-page screenshots; the suite now captures only a single viewport per route. Automated touch emulation cannot establish behavior on physical iOS/Android hardware. No Lighthouse scores have been measured. No contact backend is configured; outbound delivery cannot be tested.
