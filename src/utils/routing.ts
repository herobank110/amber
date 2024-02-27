import $ from "jquery";
import {
  mainHome,
  upcomingSection,
  notYetScheduled,
} from "../modules/home/view";
import { initHomeScrollAnims } from "../modules/home/scrollAnims";
import { facebookButton, footer } from "./view";
import { concertsPage } from "../modules/concerts/view";
import { makeNavBar } from "../modules/commonUI/navBar";
import { addScrollDebugUI } from "../modules/debug/debug";
import { adminPage } from "../modules/admin/views";
import { initPageAdminModeCheck } from "../modules/admin/adminMode";
import { concertEditorPage } from "../modules/concert/editor";
import { concertViewerPage } from "../modules/concert/viewer";
import { cataloguePage } from "../modules/catalogue/catalogue";
import { getConcert } from "../modules/concert/common";
import { getConcerts } from "../modules/amberDb/amberDb";

// Importing this file starts it.
// Changing pages must make a new page request.
$(() => entry());

const ROUTES = {
  "/admin": renderPage(adminPage, { navAndFooter: false }),
  "/catalogue": renderPage(cataloguePage),
  "/concerts": renderPage(concertsPage),
  "/concert/new": renderPage(concertEditorPage),
  "/concert/:id": renderPage(concertViewerPage),
  "/concert/:id/edit": renderPage(concertEditorPage),
};

function entry() {
  renderRoute();

  // check for admin mode - if not, it will disable and reload
  initPageAdminModeCheck();

  bindLinkClickedRerouting();
}

function bindLinkClickedRerouting() {
  window.addEventListener("popstate", renderRoute);
  window.addEventListener("unload", () => {
    // If we leave the page, clear the session storage
    // Ie .if we manually refresh the page, reload the db.
    sessionStorage.clear();
  });
}

function renderRoute() {
  // reset state if re-using SPA
  window.scrollTo(0, 0);
  $("body>:not(.noty_layout)").remove();

  // find handler
  for (const [route, handler] of Object.entries(ROUTES)) {
    const reouteRegExp = new RegExp("^" + route.replace(/:\w+/, "\\w+") + "$");
    if (reouteRegExp.test(location.pathname)) {
      console.debug(
        `renderRoute: Found match: '${route}' for '${location.pathname}'`
      );
      handler();
      return;
    }
  }

  // default handler
  console.log(`Using default home route for ${location.pathname}`);
  showHome();
}

async function getUpcomingConcert() {
  return (await getConcerts())
    .sort((a, b) => a.when.localeCompare(b.when))
    .find((c) => new Date(c.when) > new Date());
}

function showHome() {
  document.body.innerHTML = mainHome();
  makeNavBar().prependTo(".t1");
  footer().appendTo(document.body);
  getUpcomingConcert().then((c) => {
    console.debug("showHome: upcomingConcert:", c);
    $(".upcoming").replaceWith(
      c ? upcomingSection({ concert: c }) : notYetScheduled()
    );
  });
  initHomeScrollAnims();
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

function renderPage(renderFn: () => JQuery, options = { navAndFooter: true }) {
  return () => {
    if (options.navAndFooter) makeNavBar().appendTo(document.body);
    renderFn().appendTo(document.body);
    if (options.navAndFooter) footer().appendTo(document.body);
  };
}
