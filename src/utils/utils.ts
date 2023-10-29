/** general helper functions */

export function queryAncestor(el: Element, selector: string) {
  let fl: Element | null = el;
  do fl = fl!.parentElement;
  while (fl && !fl?.matches(selector));
  return fl;
}
