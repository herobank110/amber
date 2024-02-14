import $ from "jquery";
import { getConcert } from "./common";
import { concertViewerPage } from "./viewer";
import "./editor.scss";

export function concertEditorPage() {
  const concert = getConcert();
  if (!concert) throw new Error("Concert not found");

  console.log(`Editing concert ${concert.id}`);

  // Start with the viewer page and modify it to the things we want.
  const el = concertViewerPage();
  el.addClass("concertEditorPage");
  el.find(".adminControls").remove();
  el.find(".concertDetails").append(fileControls());
  el.find(".title").attr("contenteditable", "true");
  return el;
}

const fileControls = () =>
  // steal the adminControls class for styling
  $("<div>", { class: "adminControls" }).append(
    $("<a>", {
      text: "Save",
      class: "adminButton",
      href: ``,
    }),
    $("<a>", {
      text: "Cancel",
      class: "adminButton",
      href: ``,
    })
  );
