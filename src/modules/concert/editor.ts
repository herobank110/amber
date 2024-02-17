import $ from "jquery";
import { getConcert } from "./common";
import { concertViewerPage } from "./viewer";
import "./editor.scss";
import { facebookLogo, link } from "../../utils/view";

export function concertEditorPage() {
  const concert = getConcert();
  if (!concert) throw new Error("Concert not found");

  console.log(`Editing concert ${concert.id}`);

  // Start with the viewer page and modify it to the things we want.
  const el = concertViewerPage();
  el.addClass("concertEditorPage");
  el.find(".adminControls").remove();
  el.find(".posterWrap").append(posterControls());
  el.find(".title").replaceWith(titleInput({ val: concert.title }));
  el.find(".when").replaceWith(whenInput(concert.when));
  el.find(".fbLink").remove();
  el.find(".concertDetails").append(facebookInput({ val: concert.facebook }));
  el.find(".concertDetails").append(fileControls({ id: concert.id }));
  return el;
}

const titleInput = (props: { val: string }) => {
  function togglePlaceholder(el: JQuery<HTMLElement>) {
    el.siblings(".placeholder").toggleClass("hidden", el.text() != "");
  }

  const el = $("<div>", { class: "title" }).append(
    $("<span>", { text: "Concert Title", class: "placeholder" }),
    $("<h2>", { contenteditable: true, text: props.val, class: "titleH" })
      //
      .on("input", (e) => togglePlaceholder($(e.target)))
  );

  // initialize state.
  togglePlaceholder(el.find(".titleH"));
  return el;
};

const fileControls = (props: { id: number }) =>
  // steal the adminControls class for styling
  $("<div>", { class: "adminControls" }).append(
    link({
      text: "Save",
      class: "adminButton",
      href: ``,
    }),
    link({
      text: "Cancel",
      class: "adminButton",
      href: props.id == -1 ? "/archive" : `/concert/${props.id}`,
    }).on("click", (e) => {
      if (!confirm("Are you sure you want to discard changes?")) {
        e.stopPropagation();
      }
    })
  );

const posterControls = () =>
  $("<div>", { class: "posterControlsWrap" }).append(
    $("<label>", { text: "⤒ Upload", for: "posterInput" }),
    $("<input>", {
      id: "posterInput",
      type: "file",
      accept: "image/png,image/jpeg",
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

const facebookInput = (props: { val?: string }) =>
  $("<div>", { class: "fbLink" }).append(
    facebookLogo(),
    $("<input>", {
      id: "fbInput",
      type: "text",
      value: props.val,
      placeholder: "Event Link (optional)",
    })
  );
