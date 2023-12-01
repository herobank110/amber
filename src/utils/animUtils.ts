import "../lib/scroll-timeline";
import { queryAncestor } from "./utils";

export function animate(
  selector: string,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options: KeyframeAnimationOptions
) {
  const animEl = document.querySelector(selector);
  if (!animEl) throw new Error(`Invalid element for selector: ${selector}`);
  const trackEl = queryAncestor(animEl, ".t");
  if (!trackEl) throw new Error(`Couldn't find track for selector ${selector}`);
  const timeline = new ViewTimeline({ subject: trackEl });
  animEl.animate(keyframes, { ...options, timeline });
}

export function initVideoScrollAutoPlayPause(el: HTMLVideoElement) {
  // can only play pause without input event if muted
  el.muted = true;
  el.controls = false;
  let observer = new IntersectionObserver(
    (entries) => {
      if (entries.length != 1)
        console.warn(`Expected 1 entry, got ${entries.length}`);
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.play();
          el.controls = true;
        } else el.pause();
      });
    },
    { threshold: 0.0, rootMargin: "-50% 0% -40%" }
  );

  observer.observe(el);
}
