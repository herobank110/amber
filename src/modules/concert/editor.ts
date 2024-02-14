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
  el.find(".concertDetails").append(fileControls({ id: concert.id }));
  el.find(".posterWrap").append(posterControls());
  el.find(".title").attr("contenteditable", "true");
  el.find(".when").replaceWith(whenInput(concert.when));
  return el;
}

const fileControls = (props: { id: number }) =>
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
      href: `/concert/${props.id}`,
    }).on("click", (e) => {
      if (!confirm("Are you sure you want to discard changes?"))
        e.preventDefault();
    })
  );

const posterControls = () =>
  $("<div>", { class: "posterControlsWrap" }).append(
    $("<label>", { text: "⤒ Upload", for: "posterInput" }),
    $("<input>", { id: "posterInput", type: "file",
accept: "image/png,image/jpeg"
}).on("change", (e) => {
        console.log("File changed", (e.target as HTMLInputElement).files?.[0]);
    })
  );

const whenInput = (date: string) =>
  $("<input>", {
    type: "datetime-local",
    value: date,
    class: "when",
  });
