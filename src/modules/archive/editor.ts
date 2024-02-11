import $ from "jquery";
import { checkboxField, fileUploadField, textField } from "../../utils/view";
import "./editor.scss";

export const concertEditorPage = () =>
  $("<div>", { id: "concertEditorPage" }).append(
    $("<h1>", { text: "Concert Editor" }),
    $("<form>", { action: "/php/concertEdit.php", method: "post" }).append(
      $("<input>", { type: "hidden", name: "id", value: getConcertID() }),
      textField({ name: "title", label: "Title" }),
      textField({ name: "when", label: "When", type: "datetime-local" }),
      fileUploadField({
        name: "poster",
        label: "Poster",
        type: "file",
        accept: ["image/jpeg", "image/png", "image/webp"],
      }),
      textField({ name: "facebook", label: "Facebook Link" }),
      //   checkboxField({ name: "thumbnail", label: "Thumbnail" })
      $("<div>").append($("<button>"))
    )
  );

/** @returns string id of the concert */
function getConcertID() {
  if (location.pathname == "/concert/new") return "-1";
  const match = /\/concert\/(\d+)\/edit/.exec(location.pathname);
  if (match) return match[1];
  throw new Error("Invalid URL for concert editor page");
}
