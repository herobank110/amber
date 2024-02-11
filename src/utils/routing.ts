import $ from "jquery";
import { mainHome } from "../modules/home/view";
import { initHomeScrollAnims } from "../modules/home/scrollAnims";
import { facebookButton, footer } from "./view";
import { archivePage } from "../modules/archive/view";
import { makeNavBar } from "../modules/commonUI/navBar";
import { addScrollDebugUI } from "../modules/debug/debug";
import { adminPage } from "../modules/admin/views";
import { initPageAdminModeCheck } from "../modules/admin/adminMode";

// Importing this file starts it.
// Changing pages must make a new page request.
$(() => entry());

const ROUTES = {
  "/archive": showArchive,
  "/admin": showAdmin,
};

function entry() {
  renderRoute();

  // check for admin mode - if not, it will disable and reload
  initPageAdminModeCheck();
}

function renderRoute() {
  for (const [route, handler] of Object.entries(ROUTES)) {
    if (new RegExp(route).test(window.location.pathname)) {
      handler();
      return;
    }
  }

  // If nothing else matches, show the home page
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
