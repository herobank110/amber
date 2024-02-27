import { isDevMode, setLocation } from "../../utils/utils";

/** Check if the admin mode is active. If not, reload the page. */
export async function initPageAdminModeCheck() {
  console.debug("initPageAdminModeCheck()");

  if (isDevMode()) {
    // in dev mode, assume the dev has set the admin mode correctly
    return;
  }

  const { isLoggedIn: serverAdminMode }: { isLoggedIn: boolean } =
    //
    await fetch("/php/adminIsLoggedIn.php").then((res) => res.json());

  const cachedAdminMode = isAdminMode();
  console.debug(
    `initPageAdminModeCheck: serverAdminMode: ${serverAdminMode}, cachedAdminMode: ${cachedAdminMode}`
  );
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

/** login then redirect back to the current page */
export function logInAsAdmin() {
  localStorage.setItem("adminLoginRedirectTo", window.location.href);
  setLocation("/admin");
}

/** check if the admin is logged in, if not log in and reload this page */
export function requireAdminMode() {
  console.debug("requireAdminMode()");
  if (!isAdminMode()) {
    logInAsAdmin();
  }
}
