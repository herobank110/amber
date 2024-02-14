/** general helper functions */

export function queryAncestor(el: Element, selector: string) {
  let fl: Element | null = el;
  do fl = fl!.parentElement;
  while (fl && !fl?.matches(selector));
  return fl;
}

export function isDevMode() {
  return window.location.hostname === "localhost";
}

export function shortDate(when: string) {
  return Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(when));
}

export function longDate(when: string) {
  return Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(when));
}
