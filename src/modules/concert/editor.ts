import $ from "jquery";
import Noty from "noty";
import { getConcert } from "./common";
import { concertViewerPage } from "./viewer";
import "./editor.scss";
import { facebookLogo, link } from "../../utils/view";
import { Concert, getConcerts, saveConcert } from "../amberDb/amberDb";
import { uploadFile } from "../../utils/upload";
import { resizeImage, setLocation } from "../../utils/utils";
import { requireAdminMode } from "../admin/adminMode";

export function concertEditorPage() {
  console.debug("concertEditorPage()");
  setTimeout(() => requireAdminMode());

  // Start with the viewer page and modify it to the things we want.
  const el = concertViewerPage(async () => {
    const concert = await getConcert();
    if (!concert) throw new Error("Concert not found");
    console.debug(`concertEditorPage: ConcertID: ${concert.id}`);
    el.append(
      $("<input>", { type: "hidden", class: "idInput", value: concert.id })
    );
    el.addClass("concertEditorPage");
    el.find(".backButton").remove();
    el.find(".adminControls").replaceWith(fileControls({ id: concert.id }));
    el.find(".posterWrap").append(posterControls());
    el.find(".title").replaceWith(titleInput({ val: concert.title }));
    el.find(".when").replaceWith(whenInput(concert.when));
    el.find(".fbLink").remove();
    el.find(".programme").after(facebookInput({ val: concert.facebook }));
    el.find(".concertDetails").append(fileControls({ id: concert.id }));
  });
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
      .on("input", (e) => {
        const el = $(e.target);
        // Ensure if html is pasted, it is converted to just raw text.
        // This is a downside of using contenteditable. But for normal
        // typing, it will mess up the cursor position so only do it if
        // the html has been changed.
        const a = el.html().replace(/&nbsp;/g, '\u00a0');
        const b = el.text();
        if (a != b) {
          console.debug(`titleInput: mismatching html detected: '${a}' != '${b}'`)
          el.html(el.text());
        }
        togglePlaceholder(el);
      })
      .on("blur", (e) => {
        // Get rid of the non-breaking spaces - sometimes they may be
        // inserted by mobile browsers if you press space twice.
        console.debug("titleInput: onblur()");
        const el = $(e.target);
        el.html(el.text().replace(/\u00a0/g, " "));
      })
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
      class: "adminButton outlined",
      href: props.id == -1 ? "/concerts" : `/concert/${props.id}`,
    }).on("click", (e) => {
      if (!confirm("Are you sure you want to discard changes?")) {
        e.stopPropagation();
      }
    })
  );

const posterControls = () =>
  $("<div>", { class: "posterControlsWrap" }).append(
    $("<label>", { for: "posterInput" })
      .on("drop", (e) => {
        console.log("posterControls: Poster drop event");
        e.preventDefault();
        const file = e.originalEvent?.dataTransfer?.files?.item(0) ?? undefined;
        onFileChanged(file);
      })
      .on("dragover", (e) => e.preventDefault())
      .append($("<span>", { text: "Click or Drop File" })),
    $("<input>", {
      id: "posterInput",
      type: "file",
      accept: "image/png,image/jpeg",
    }).on("change", (e) => {
      console.log("posterControls: File input changed");
      const file = (e.target as HTMLInputElement).files?.[0];
      onFileChanged(file);
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

function onFileChanged(file: File | undefined) {
  console.debug(`onFileChanged(file=${file})`);
  if (!file) {
    return;
  }
  uploadFile(file).then((url) => {
    if (!url) return; // Noty displayed already
    console.log("posterControls: File uploaded: ", url);
    $(".poster").attr("src", url);
  });
}

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
    .then(async (newId) => {
      console.debug(`fileControls: Save complete : ${newId}`);
      savingNoty.close();
      console.debug(`fileControls: reloading concerts cache`);
      await getConcerts(false);
      new Noty({
        text: "Saved successfully",
        type: "success",
        layout: "center",
        timeout: 3000,
      }).show();
      setLocation(`/concert/${newId}`);
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
