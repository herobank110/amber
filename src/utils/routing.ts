import $ from "jquery";
import { mainHome } from "../modules/home/view";
import { initHomeScrollAnims } from "../modules/home/scrollAnims";
import { LINK_CHANGED, facebookButton, footer } from "./view";
import { archivePage } from "../modules/archive/view";
import { makeNavBar } from "../modules/commonUI/navBar";
import { addScrollDebugUI } from "../modules/debug/debug";
import { adminPage } from "../modules/admin/views";
import { initPageAdminModeCheck } from "../modules/admin/adminMode";
import { concertEditorPage } from "../modules/concert/editor";
import { concertViewerPage } from "../modules/concert/viewer";

// Importing this file starts it.
// Changing pages must make a new page request.
$(() => entry());

const ROUTES = {
  "/archive": showArchive,
  "/admin": showAdmin,
  "/concert/new": showConcertEditor,
  "/concert/:id": showConcertViewer,
  "/concert/:id/edit": showConcertEditor,
};

function entry() {
  renderRoute();

  // check for admin mode - if not, it will disable and reload
  initPageAdminModeCheck();

  bindLinkClickedRerouting();
}

function bindLinkClickedRerouting() {
  window.addEventListener(LINK_CHANGED, renderRoute);
  window.addEventListener("popstate", renderRoute);
}

function renderRoute() {
  // reset state if re-using SPA
  window.scrollTo(0, 0);
  document.body.innerHTML = "";

  // find handler
  for (const [route, handler] of Object.entries(ROUTES)) {
    const reouteRegExp = new RegExp("^" + route.replace(/:\w+/, "\\w+") + "$");
    if (reouteRegExp.test(location.pathname)) {
      console.log(`Route matched: '${route}' for '${location.pathname}'`);
      handler();
      return;
    }
  }

  // default handler
  console.log(`Using default home route for ${location.pathname}`);
  showHome();
}

function showHome() {
  document.body.innerHTML = mainHome();
  makeNavBar().prependTo(".t1");
  footer().appendTo(document.body);
  initHomeScrollAnims();
  $("a.primary")
    .eq(0)
    .replaceWith(
      facebookButton("https://www.facebook.com/events/177429568773354")
    );
  jumpToHash();
  addScrollDebugUI();
}

function jumpToHash() {
  const hash = window.location.hash;
  if (hash != "") {
    const el = document.querySelector(hash);
    if (el) {
      const y = el.getBoundingClientRect().top;
      window.scrollTo(0, y);
    }
  }
}

function showArchive() {
  archivePage().appendTo(document.body);
  footer().appendTo(document.body);
}

function showAdmin() {
  adminPage().appendTo(document.body);
}

async function showConcertEditor() {
  makeNavBar().appendTo(document.body);
  (await concertEditorPage()).appendTo(document.body);
  footer().appendTo(document.body);
}

async function showConcertViewer() {
  makeNavBar().appendTo(document.body);
  (await concertViewerPage()).appendTo(document.body);
  footer().appendTo(document.body);
}
