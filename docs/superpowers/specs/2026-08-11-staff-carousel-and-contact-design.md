# Staff Carousel and Contact Content Design

## Goal

Replace the landing page's placeholder staff content with the seven supplied staff photographs, provide a paginated team carousel, and complete the public contact details.

## Scope

- Derive a member name and role from each staff filename in `public/`.
- Replace the four placeholder team entries, their initials artwork, biographies, and the visible "add real names, photos, and roles later" copy.
- Present one staff profile at a time in a responsive carousel with previous/next controls and position dots, matching the supplied visual direction.
- Make carousel controls keyboard operable and label the active profile for assistive technology.
- Add Facebook `Sense to steps`, Instagram `sensetosteps`, and LINE `@sensetosteps` to the contact panel.
- Save the supplied QR as `public/line-qr.png` and use the existing public asset URL.
- Leave unrelated content untouched and report remaining content requiring owner input.

## Content decisions

Names are generated from filename name segments, positions are generated from their final filename segment, and each card has no invented biography. The existing bilingual team heading remains, but its subtitle becomes a general statement without a future-content instruction.

The carousel uses local React state in the existing client component. It shows the current profile as the main card and does not introduce a dependency. On narrow screens it displays just that card; on larger screens it gives a subtle preview of adjacent cards where space permits.

## Remaining owner-provided content

- Four family reviews are still sample messages and need genuine family-approved testimonials.
- `NEXT_PUBLIC_LINE_OA_URL` must be set to the real LINE Official Account URL; the supplied LINE handle alone does not establish a safe deep-link target.

## Verification

Add focused tests for staff-content parsing and carousel navigation state, then run lint and a production build. Verify all public assets resolve and no visitor-facing team placeholder text remains.
