import $ from "jquery";
import { checkboxField, fileUploadField, textField } from "../../utils/view";
import "./editor.scss";

export const concertEditorPage = () =>
  $("<div>", { id: "concertEditorPage" }).append(
    $("<h1>", { text: "Concert Editor" }),
    $("<form>", { action: "/php/concertEdit.php", method: "post" }).append(
      $("<input>", { type: "hidden", name: "id", value: getConcertID() }),
      $("<input>", { type: "hidden", name: "op", value: "create" }),
      textField({ name: "title", label: "Title" }),
      textField({ name: "when", label: "When", type: "datetime-local" }),
      fileUploadField({
        name: "poster",
        label: "Poster",
        type: "file",
        accept: ["image/jpeg", "image/png", "image/webp"],
      }),
      textField({ name: "facebook", label: "Facebook Link (optional)" }),
      $("<div>", { class: "actionButtons" }).append(
        $("<button>", { text: "Save" }),
        $("<button>", { text: "Cancel" }).on("click", (e) => {
          e.preventDefault();
          if (confirm("Are you sure you want to cancel?")) {
            window.location.href = onCancelUrl();
          }
        }),
        $("<button>", { text: "Delete" }).on("click", (e) => {
          if (!confirm("Are you sure you want to delete this concert?")) {
            e.preventDefault();
            return;
          }
          $(e.target).closest("form").find('input[name="op"]').val("delete");
        })
      )
    )
  );

/** @returns string id of the concert */
function getConcertID() {
  if (location.pathname == "/concert/new") return "-1";
  const match = /\/concert\/(\d+)\/edit/.exec(location.pathname);
  if (match) return match[1];
  throw new Error("Invalid URL for concert editor page");
}

function isNewConcert() {
  return getConcertID() == "-1";
}

function onCancelUrl() {
  if (isNewConcert()) return "/archive";
  else return location.pathname.replace(/\/edit/, "");
}
