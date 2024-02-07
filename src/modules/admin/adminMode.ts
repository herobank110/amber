import { isDevMode } from "../../utils/utils";

/** Check if the admin mode is active. If not, reload the page. */
export async function initPageAdminModeCheck() {
  if (isDevMode()) {
    // in dev mode, assume the dev has set the admin mode correctly
    return;
  }

  const { isLoggedIn: serverAdminMode }: { isLoggedIn: boolean } = await fetch(
    "/php/adminIsLoggedIn.php"
  ).then((res) => res.json());

  const cachedAdminMode = isAdminMode();
  if (cachedAdminMode != serverAdminMode) {
    localStorage.setItem("admin", serverAdminMode.toString());
    // force reload the page to update the admin mode
    window.location.reload();
  }
  // Otherwise, the admin local state is correct and continue the
  // page load as usual.
}

/** @returns whether the user is logged in as admin */
export function isAdminMode() {
  return localStorage.getItem("admin") == "true";
}
