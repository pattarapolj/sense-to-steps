# Vintage letter and automatic unfolding

Research date: 17 November 2026. Scope: improve the existing letter section; preserve its Thai and English wording and the envelope the user likes.

## Primary references

- The British Library identifies and reproduces Jane Austen's July 1813 letter to Frank Austen, including the addressed reverse. This is a useful reference for the relationship between a personal letter and its folded/addressed exterior. The page was inspected; its full-resolution image endpoints failed to load in the research tool. [British Library: Jane Austen at 250](https://www.bl.uk/stories/blogs/posts/jane-austen-at-250)
- Oxford's Taylor Editions provides Austen letters as facsimiles alongside transcriptions. Its separation of manuscript appearance from readable text supports keeping the site's content as live, selectable text rather than baking handwriting into a photograph. The latter is a design inference, not the edition's accessibility guidance. [Oxford: Jane & George Austen, Letters](https://editions.mml.ox.ac.uk/editions/austen-letters/)
- The Library of Congress supplies a one-page facsimile of Lincoln's 1837 letter to Mary Owens. It offers an additional primary manuscript reference for a single continuous sheet, handwritten salutation, and dense body. Its grayscale reproduction is not evidence for a particular tan color. [Library of Congress letter facsimile](https://www.loc.gov/static/classroom-materials/abraham-lincoln/documents/letter_owens.pdf)
- Intersection Observer can asynchronously detect a target entering the viewport and invoke a callback at a configured visibility threshold. It avoids implementing repeated scroll-position polling. [MDN: Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- W3C documents checking `prefers-reduced-motion` to suppress nonessential movement, including movement associated with scrolling. Reduced motion should skip the unfold and present the readable letter immediately. [W3C: SCR40](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR40)

## Direction inferred from the user's supplied photograph

These are visual choices drawn from the user's reference, not historical claims:

- Use one continuous warm tan/kraft sheet with irregular darker edges and quiet fiber/mottled texture. Remove the current three separately shaded rectangular panels and the sharp dog-ear.
- Keep the center lighter and the ink dark brown so texture does not compete with the long Thai letter. Preserve the existing Thai-capable font for body text; reserve any handwritten treatment for the signature.
- A small burgundy botanical detail or fine twine accent can connect to the photograph, but should sit outside the reading area. Avoid dense stains, large props, and a permanently tilted body.
- Retain the existing attractive envelope as the opening pose. Automatically open it once when a small envelope/top sentinel becomes visible, then leave the letter open. Observe the small trigger rather than demanding a percentage of the entire tall letter.
- Keep the interaction short (roughly 1–1.5 seconds), with no replay on every scroll and no click/close affordance. Provide the fully readable letter without animation for reduced motion and a readable fallback if scripting is unavailable.

## Verification to perform

Check Thai/English at desktop and 320–390px widths; all five paragraphs remain selectable and visible; automatic opening runs once; revisiting the section does not refold it; reduced motion removes movement; no horizontal overflow or surprise scrolling.
