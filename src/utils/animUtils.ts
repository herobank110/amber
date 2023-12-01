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

export function initVideoScrollAutoPlayPause(el: Element) {
  console.warn("Not implemented");
}
