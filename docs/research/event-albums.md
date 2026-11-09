# Event album layout research

Researched November 9, 2026. Scope: SenseToSteps has two past events, ten supplied Halloween photos, and pirate-event photos to follow. Recommendations below are design judgments informed by primary sources, not measured outcomes for this site.

## Recommendation

Keep the event overview as one clearly separated summary per event, following the supplied sketch. Replace each empty photo panel with a curated cover and two supporting thumbnails, next to the event title, brief description, and an explicit **View album · 10 photos** action. This provides a stronger impression of a real album than a single unexplained image, while keeping the event overview short.

For the current two-event site, an inline expandable gallery is the smallest complete solution: selecting View album reveals all ten thumbnails, and selecting a thumbnail opens a large-photo viewer. A dedicated album page becomes worthwhile when events have longer stories, captions, or need independent sharing links. Either implementation should preserve the event title and return visitors to where they were browsing.

Use an ordinary responsive grid for the ten photos: three columns on desktop and two on phones, with enough thumbnail height to recognize the activities. Open large images at their original aspect ratios, so tightly cropped previews do not permanently hide people or activity details. These column counts and cover choices are recommendations for this collection, not requirements from the sources.

Keep AHOI! present with its title and an honest photos-coming-soon state. Do not show an album action until photographs exist.

## Pattern comparison

| Pattern | Benefit | Cost / fit here |
| --- | --- | --- |
| Event summary + thumbnail album + large-photo viewer | Visitors scan events first, choose a photograph directly, then inspect it at a larger size. | Recommended. The viewer must implement focus, close, and keyboard behavior correctly. |
| Dedicated event page | Shareable destination and room for event story, date, captions, and a larger collection. | Useful as the event archive grows; currently adds a navigation step for ten photographs. |
| Single-photo carousel | Compact, with a large image visible immediately. | Other photographs are hidden until visitors interact. W3C explicitly identifies carousel discoverability concerns; controls and accessible announcements add work. Avoid automatic rotation. |
| Masonry collage | Can emphasize varied portrait and landscape proportions. | Visually busier beside event descriptions. Reading order needs care if images/captions tell a sequence. Not necessary for a collection this small; a regular grid is easier to scan. |

The carousel concern is supported by [W3C's carousel tutorial](https://www.w3.org/WAI/tutorials/carousels/), which requires keyboard operation, appropriate focus, communicated slide changes, and pause controls when movement is automatic. W3C does not say every carousel fails; the choice above is a contextual recommendation.

Masonry is not inherently inaccessible. [WCAG's Meaningful Sequence explanation](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) requires a programmatically determinable correct order when order changes meaning. If captions describe a chronological activity, maintain that sequence in the DOM.

## Large-photo viewer and mobile behavior

- Provide visible Previous, Next, and Close buttons; show position, such as **3 of 10**. The [W3C carousel pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) recognizes position and total as meaningful slide identification when unique names are unavailable.
- If the viewer is modal, move focus inside on opening, contain keyboard navigation, support Escape to close, and return focus to the triggering thumbnail. These are the behaviors specified by the [W3C modal-dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).
- A native HTML dialog supplies much of that behavior; [W3C technique H102](https://www.w3.org/WAI/WCAG22/Techniques/html/H102) documents focus movement, containment, restoration, inert background content, and Escape handling.
- Swipe can supplement visible controls on phones; do not make gestures the only way to browse.
- Deliver responsive image sizes rather than loading every full-resolution image into the overview. Preserve intrinsic width and height. [PhotoSwipe's official getting-started guide](https://photoswipe.com/getting-started/) requires dimensions and recommends responsive images and a fallback image link. Its guidance informs implementation; adding PhotoSwipe is optional.
- Give photos short descriptions of the visible activity, without guessing participants' names or identities.

## Real gallery precedent

[SmugMug's gallery settings](https://www.smugmughelp.com/hc/en-us/articles/18212440954772-Change-settings-for-a-gallery-folder-or-page) separate gallery covers, gallery styles, and sorting; its [gallery creation guide](https://www.smugmughelp.com/hc/en-us/articles/18212798551572-Create-a-gallery) separates the album title and description from image presentation. This is primary evidence of an established album organization pattern, not proof that a specific layout improves conversion.
