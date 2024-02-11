import $ from "jquery";
import { fileUploadField, textField } from "../../utils/view";
import "./editor.scss";

export const concertEditorPage = () =>
  $("<div>", { id: "concertEditorPage" }).append(
    $("<h1>", { text: "Concert Editor" }),
    $("<form>").append(
      textField({ name: "title", label: "Title" }),
      textField({ name: "when", label: "When", type: "datetime-local" }),
      fileUploadField({
        name: "poster",
        label: "Poster",
        type: "file",
        accept: ["image/jpeg", "image/png", "image/webp"],
      }),
      textField({ name: "facebook", label: "Facebook Link" })
    )
  );
