import type { MouseEvent } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

let activeFrame = 0;

export function smoothScrollToId(id: string, duration = 1100) {
  const target = document.getElementById(id);
  if (!target) return;

  cancelAnimationFrame(activeFrame);

  const header = document.querySelector("header");
  const headerOffset =
    header instanceof HTMLElement ? header.offsetHeight + 8 : 80;
  const startY = window.scrollY;
  const targetY =
    target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    history.replaceState(null, "", `#${id}`);
    return;
  }

  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step);
    } else {
      history.replaceState(null, "", `#${id}`);
    }
  };

  activeFrame = requestAnimationFrame(step);
}

export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;
  event.preventDefault();
  smoothScrollToId(href.slice(1));
}
