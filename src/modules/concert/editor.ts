import $ from "jquery";
import Noty from "noty";
import { getConcert } from "./common";
import { concertViewerPage } from "./viewer";
import "./editor.scss";
import { facebookLogo, link } from "../../utils/view";
import { Concert, saveConcert } from "../amberDb/amberDb";
import { uploadFile } from "../../utils/upload";
import { resizeImage } from "../../utils/utils";

export async function concertEditorPage() {
  const concert = await getConcert();
  if (!concert) throw new Error("Concert not found");

  console.log(`Editing concert ${concert.id}`);

  // Start with the viewer page and modify it to the things we want.
  const el = await concertViewerPage();
  el.append(
    $("<input>", { type: "hidden", class: "idInput", value: concert.id })
  );
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
    }).on("click", (e) => {
      onClickSave();
      e.stopPropagation();
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
    $("<label>", { text: "Click to Upload", for: "posterInput" }),
    $("<input>", {
      id: "posterInput",
      type: "file",
      accept: "image/png,image/jpeg",
    }).on("change", (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      console.debug("posterControls: File changed: ", file);
      if (file) {
        uploadFile(file).then((url) => {
          if (!url) return; // Noty displayed already
          console.log("posterControls: File uploaded: ", url);
          $(".poster").attr("src", url);
        });
      }
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

function onClickSave() {
  console.log("fileControls: Save clicked");
  const concert = readGuiValues();
  const savingNoty = new Noty({
    text: "Saving...",
    type: "info",
    layout: "center",
  });
  savingNoty.show();
  saveConcert(concert)
    .then((newId) => {
      savingNoty.close();
      new Noty({
        text: "Saved successfully",
        type: "success",
        layout: "center",
        timeout: 3000,
      }).show();
      window.history.pushState({}, "", `/concert/${newId}`);
    })
    .catch((e) => {
      console.error("Failed to save", e);
      new Noty({
        text: "Failed to save, please try again later",
        type: "error",
        layout: "center",
        timeout: 3000,
      }).show();
    })
    .finally(() => {
      console.log("fileControls: Save finally complete");
      savingNoty.close();
    });
}

/** @returns current gui values to send to server for saving */
function readGuiValues(): Concert {
  const id = +$(".idInput").val()!;
  const title = $(".titleH").text();
  const when = $(".when").val() as string;
  const fb = $("#fbInput").val() as string;
  const poster = ($(".poster")[0] as HTMLImageElement).src;
  const thumb = resizeImage(poster, 160, 120);
  const retVal: Concert = { id, title, when, poster, thumb };
  if (fb) retVal.facebook = fb;
  return retVal;
}
