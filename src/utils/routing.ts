import $ from "jquery";
import { mainHome } from "../modules/home/view";
import { initHomeScrollAnims } from "../modules/home/scrollAnims";
import { footer } from "./view";
import { archivePage } from "../modules/archive/views";
import { makeNavBar } from "../modules/commonUI/navBar";
import { addScrollDebugUI } from "../modules/debug/debug";

// Importing this file starts it.
// Changing pages must make a new page request.
$(() => entry());

function entry() {
  switch (window.location.search) {
    case "?archive":
      showArchive();
      break;
    default:
      showHome();
      break;
  }
}

function showHome() {
  document.body.innerHTML = mainHome();
  makeNavBar().prependTo(".t1");
  footer().appendTo(document.body);
  initHomeScrollAnims();
  jumpToHash();
  addScrollDebugUI();
}

function jumpToHash() {
  const hash = window.location.hash;
  if (hash != "") {
    const el = document.querySelector(hash);
    if (el) {
      const y  = el.getBoundingClientRect().top;
      window.scrollTo(0, y);
    }
  }
}

function showArchive() {
  archivePage().appendTo(document.body);
}
