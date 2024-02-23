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

/**
 * Resize image to dimensions, attempting to use cache if possible
 * @returns url to new image
 */
export function resizeImage(src: string, x: number, y: number) {
  if (!src || x < 0 || y < 0)
    throw new Error(`invalid argument(s): ${src}, ${x}, ${y}`);

  if (isDevMode()) {
    return "https://roathchamber.org/share/resize/00316-335561172.6e7667.300x200.png";
  }

  const params = new URLSearchParams();
  params.set('src', src);
  params.set('x', x.toString());
  params.set('y', y.toString());
  // returns a full url string, for easier parsing and validation later.
  return 'https://roathchamber.org/php/resize.php?' + params.toString();
}

export function setLocation(url: string) {
  history.pushState({}, "", url);
  window.dispatchEvent(new Event("popstate"));
}