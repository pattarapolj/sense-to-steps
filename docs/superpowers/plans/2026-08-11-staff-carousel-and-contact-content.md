# Staff Carousel and Contact Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show all six supplied staff members in an accessible paginated carousel and replace contact placeholders with the supplied QR and social handles.

**Architecture:** Store staff and contact data in a small typed module. Keep `Team` client-side for selected-slide state, retain existing styles, and add no runtime dependency.

**Tech Stack:** Next.js 16.2.10, React 19.2.4, TypeScript, Tailwind CSS 4, Vitest.

## Global Constraints

- Preserve pre-existing uncommitted user changes outside the files named below.
- Use images from `public/` through root-relative URLs and Next.js `Image` for staff photographs.
- Do not invent staff biographies, social URLs, or testimonials.
- Keep Thai and English copy complete; remove all visitor-facing team placeholders.
- Copy `C:/Users/PATTAR~1/AppData/Local/Temp/codex-clipboard-44225425-b301-4085-a2f5-b50307c449a5.png` to `public/line-qr.png`.
- Keep the LINE deep-link environment-driven; its fallback must not appear to visitors.

---

### Task 1: Add test support and typed staff data

**Files:**
- Create: `src/lib/team.ts`
- Create: `src/lib/team.test.ts`
- Modify: `package.json`

**Interfaces:**
- Produces `TeamMember` containing `name`, `role`, `imageSrc`, and `alt`, plus `teamMembers`.
- Consumes root-relative public image paths.

- [ ] **Step 1: Write a failing data test**

```ts
expect(teamMembers).toHaveLength(6);
expect(teamMembers[0]).toEqual({
  name: "Ayutchet Loruangsin",
  role: "Occupational Therapist",
  imageSrc: "/Ayutchet_Loruangsin_OccupationalTherapist.jpg",
  alt: "Ayutchet Loruangsin, Occupational Therapist",
});
```

- [ ] **Step 2: Verify red**

Run: `npm run test -- src/lib/team.test.ts`

Expected: FAIL because the test command and module do not exist.

- [ ] **Step 3: Add Vitest and static staff data**

Add `vitest` as a development dependency and the script `"test": "vitest run"`. Define the seven filename-derived records in `teamMembers` using the `TeamMember` type.

- [ ] **Step 4: Verify green**

Run: `npm run test -- src/lib/team.test.ts`

Expected: PASS with all seven complete staff records.

- [ ] **Step 5: Commit**

Run: `git add package.json package-lock.json src/lib/team.ts src/lib/team.test.ts && git commit -m "feat: add staff content data"`

### Task 2: Replace the team grid with a paginated carousel

**Files:**
- Modify: `src/components/Team.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/i18n/dictionaries.ts`
- Modify: `src/lib/team.ts`
- Modify: `src/lib/team.test.ts`

**Interfaces:**
- Consumes `teamMembers`, `previousTeamIndex(current, count)`, and `nextTeamIndex(current, count)`.
- Produces a labelled selected profile, previous/next controls, and six position buttons.

- [ ] **Step 1: Write failing wrap-around tests**

```ts
expect(previousTeamIndex(0, 6)).toBe(5);
expect(nextTeamIndex(5, 6)).toBe(0);
```

- [ ] **Step 2: Verify red**

Run: `npm run test -- src/lib/team.test.ts`

Expected: FAIL because navigation helpers are not exported.

- [ ] **Step 3: Implement minimal navigation and carousel**

Export the two modulo helpers from `team.ts`. In `Team`, use local state and those helpers to change profiles. Replace the old grid, initials artwork, and bios with an active photo card, name and role, arrow buttons, and clickable dots. Use `Image fill` with `member.alt`. Add responsive track/card CSS that shows adjacent previews above `sm`, and remove the visible “add real names, photos, and roles later” copy in both languages.

- [ ] **Step 4: Verify green**

Run: `npm run test -- src/lib/team.test.ts`

Expected: PASS including both wrap-around cases.

- [ ] **Step 5: Commit**

Run: `git add src/components/Team.tsx src/app/globals.css src/i18n/dictionaries.ts src/lib/team.ts src/lib/team.test.ts && git commit -m "feat: add staff carousel"`

### Task 3: Ship QR and contact details

**Files:**
- Create: `public/line-qr.png`
- Modify: `src/components/Contact.tsx`
- Modify: `src/i18n/dictionaries.ts`
- Modify: `src/lib/site.ts`
- Modify: `src/lib/team.test.ts`

**Interfaces:**
- Produces `contactHandles` as exact label/value pairs and a visible contact list.
- Consumes `site.lineQrSrc` and the three owner-provided handles.

- [ ] **Step 1: Write a failing contact-data test**

```ts
expect(contactHandles).toEqual([
  ["Facebook", "Sense to steps"],
  ["Instagram", "sensetosteps"],
  ["LINE", "@sensetosteps"],
]);
```

- [ ] **Step 2: Verify red**

Run: `npm run test -- src/lib/team.test.ts`

Expected: FAIL because `contactHandles` is not exported.

- [ ] **Step 3: Implement contact data and UI**

Copy the supplied PNG to `public/line-qr.png`. Export the handle data from `site.ts`, render it beneath contact copy, add translated labels/accessibility strings, and remove the QR fallback that instructs visitors to upload an asset. Keep the anchor’s target driven by `NEXT_PUBLIC_LINE_OA_URL`.

- [ ] **Step 4: Verify green**

Run: `npm run test -- src/lib/team.test.ts`

Expected: PASS with the three exact supplied handles.

- [ ] **Step 5: Commit**

Run: `git add public/line-qr.png src/components/Contact.tsx src/i18n/dictionaries.ts src/lib/site.ts src/lib/team.test.ts && git commit -m "feat: add public contact details"`

### Task 4: Verify and report owner follow-ups

**Files:** Modify only Task 1–3 files if verification finds a defect.

- [ ] **Step 1: Run automated verification**

Run: `npm run test && npm run lint && npm run build`

Expected: all commands exit successfully.

- [ ] **Step 2: Inspect the full flow**

Run: `npm run dev`

Expected: six photos load; arrows and dots select and wrap profiles; QR and three contact handles render; no responsive clipping occurs.

- [ ] **Step 3: Re-run the placeholder audit**

Run: `rg -n -i 'lorem|khun |add real|placeholder|sample reviews|replace these|YOUR_LINE_OA' src`

Expected: team and review placeholders are gone. Report only the missing real LINE deep-link as an owner follow-up.

- [ ] **Step 4: Commit verification fixes if necessary**

Run: `git add src/components/Team.tsx src/components/Contact.tsx src/app/globals.css src/i18n/dictionaries.ts src/lib/team.ts src/lib/site.ts src/lib/team.test.ts && git commit -m "fix: finalize staff and contact content"`
