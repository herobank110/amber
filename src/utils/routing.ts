import $ from "jquery";
import { mainHome } from "../modules/home/view";
import { initHomeScrollAnims } from "../modules/home/scrollAnims";
import { footer } from "./view";

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
  footer().appendTo(document.body);
  initHomeScrollAnims();
}

function showArchive() {
  throw new Error("not implemented!");
}
