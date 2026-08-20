export type TeamMember = {
    name: string;
    role: string;
    imageSrc: string;
    alt: string;
    imageClassName?: string;
};

function member(
    name: string,
    role: string,
    imageSrc: string,
    imageClassName?: string,
): TeamMember {
    return { name, role, imageSrc, alt: `${name}, ${role}`, imageClassName };
}

export const teamMembers = [
    member(
        "Ayutchet Loruangsin",
        "Occupational Therapist",
        "/Ayutchet_Loruangsin_OcupationalTherapist.jpg",
        "scale-[3] origin-[50%_45%]",
    ),
    member(
        "Chanakarn Puratana",
        "Speech and Language Pathologist",
        "/Chanakarn_Puratana_SpeechAndLanguagePathologist.jpg",
    ),
    member(
        "Chanisara Kittivises",
        "Play Facilitator",
        "/Chanisara_Kittivises_PlayFacilitator.jpg",
    ),
    member(
        "Napassorn Ton-ngoen",
        "Physical Therapist",
        "/Napassorn_Ton-ngoen_PhysicalTherapist.jpg",
    ),
    member(
        "Nutcha Montalong",
        "Occupational Therapist",
        "/Nutcha_Montalong_OccupationalTherapist.jpg",
        "scale-[3] origin-[50%_45%]",
    ),
    member(
        "Pornnapat Ngamlertnapaporn",
        "Occupational Therapist",
        "/Pornnapat_Ngamlertnapaporn_OccupationalTherapist.jpg",
        "scale-[3] origin-[50%_45%]",
    ),
] as const satisfies readonly TeamMember[];

export function previousTeamIndex(current: number, count: number) {
    return (current - 1 + count) % count;
}

export function nextTeamIndex(current: number, count: number) {
    return (current + 1) % count;
}

export function normalizeInfiniteScrollPosition({
    scrollLeft,
    segmentWidth,
}: {
    scrollLeft: number;
    segmentWidth: number;
}) {
    if (scrollLeft <= 0) return segmentWidth;
    if (scrollLeft >= segmentWidth * 2) return scrollLeft - segmentWidth;

    return scrollLeft;
}

export function advanceTeamMarquee({
    scrollLeft,
    elapsedMs,
    segmentWidth,
}: {
    scrollLeft: number;
    elapsedMs: number;
    segmentWidth: number;
}) {
    return normalizeInfiniteScrollPosition({
        scrollLeft: scrollLeft + elapsedMs * 0.018,
        segmentWidth,
    });
}
