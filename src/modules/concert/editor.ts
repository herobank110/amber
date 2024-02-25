import $ from "jquery";
import Noty from "noty";
import { getConcert } from "./common";
import { concertViewerPage } from "./viewer";
import "./editor.scss";
import { facebookLogo, iconButton, link } from "../../utils/view";
import {
  Concert,
  ProgrammeItem,
  getConcerts,
  saveConcert,
} from "../amberDb/amberDb";
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
    el.find(".programme").removeClass("empty");
    el.find(".programmeItems").replaceWith(
      programmeItemsInput({ items: concert.programme ?? [] })
    );
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
        const a = el.html().replace(/&nbsp;/g, "\u00a0");
        const b = el.text();
        if (a != b) {
          console.debug(
            `titleInput: mismatching html detected: '${a}' != '${b}'`
          );
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

const programmeItemsInput = (props: { items: ProgrammeItem[] }) =>
  $("<ol>", { class: "programmeItems" }).append(
    props.items.map((item, index) =>
      programmeItemInput({ item, index, total: props.items.length })
    ),
    // Add a blank one to the end for adding new items.
    programmeItemInput({
      item: { composer: "", title: "" },
      index: props.items.length,
      total: props.items.length,
    })
  );

const programmeItemInput = (props: {
  item: ProgrammeItem;
  index: number;
  total: number;
}) =>
  $("<li>").append(
    $("<div>", { class: "actions" }).append(
      // show remove button for all but the last 'new' one.
      iconButton({ icon: "remove" })
        .on("click", modifyProgramme({ index: props.index, op: "remove" }))
        .prop("disabled", props.index == props.total),
      // show move up for all but the top one and last 'new' one
      iconButton({ icon: "move_up" })
        .on("click", modifyProgramme({ index: props.index, op: "up" }))
        .prop("disabled", props.index < 1 || props.index == props.total),
      // show move down for all but the bottom one (except the end 'new' one)
      iconButton({ icon: "move_down" })
        .on("click", modifyProgramme({ index: props.index, op: "down" }))
        .prop("disabled", props.index >= props.total - 1)
    ),
    $("<div>", { class: "inputs" }).append(
      $("<input>", { placeholder: "Composer", value: props.item.composer })
        //
        .on("blur", modifyProgramme({ index: props.index, op: "blur" })),
      $("<input>", { placeholder: "Title", value: props.item.title })
        //
        .on("blur", modifyProgramme({ index: props.index, op: "blur" })),
      $("<input>", {
        placeholder: "Performance Notes (optional)",
        value: props.item.performanceNotes,
      })
        //
        .on("blur", modifyProgramme({ index: props.index, op: "blur" }))
    )
  );

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
  const programme = readProgrammeGuiValues();
  const retVal: Concert = { id, title, when, poster, thumb, programme };
  if (fb) retVal.facebook = fb;
  return retVal;
}

/**
 * @returns undefined if empty list, array always has at least
 * 1 item. may contain incomplete fields.
 */
function readProgrammeGuiValues(): ProgrammeItem[] | undefined {
  const items = $(".programmeItems li")
    .toArray()
    .map((li) => {
      const inputs = $(li).find("input");
      const retVal = {
        composer: inputs[0].value,
        title: inputs[1].value,
      } as ProgrammeItem;
      if (inputs[2].value) retVal.performanceNotes = inputs[2].value;
      if (Object.values(retVal).some((x) => x)) return retVal;
    })
    .filter((x): x is ProgrammeItem => !!x);
  return items.length ? items : undefined;
}

/**
 * helper function for modifications to programme items rows
 * higher order function to simplify binding to event handlers.
 */
function modifyProgramme(props: {
  index: number;
  op: "remove" | "up" | "down" | "blur";
}) {
  return () => {
    console.debug(`modifyProgramme(${JSON.stringify(props)})`);
    const items = readProgrammeGuiValues();
    if (!items)
      // empty list, nothing to do.
      // this can happen if the blur was called but
      // the inputs are all empty with no rows.
      return;
    if (props.op == "remove") {
      items.splice(props.index, 1);
    } else if (props.op == "up") {
      const item = items[props.index];
      items[props.index] = items[props.index - 1];
      items[props.index - 1] = item;
    } else if (props.op == "down") {
      const item = items[props.index];
      items[props.index] = items[props.index + 1];
      items[props.index + 1] = item;
    } else if (props.op == "blur") {
      const numLis = $(".programmeItems li").length;
      console.debug(
        `modifyProgramme: index: ${props.index}, # of items: ${items.length}, # of <li>: ${numLis}`
      );
      if (props.index == numLis - 1 && numLis == items.length) {
        console.debug("modifyProgramme: adding new empty item to bottom");
        // This timeout is for the tabindex to change to the next element 
        // after the blur event, if it is going to be set to anything!
        setTimeout(() => {
          const focusedEl = document.activeElement;
          let j: number | undefined;
          if (focusedEl instanceof HTMLElement) {
            j = $(focusedEl).parent().find("input").index(focusedEl);
            j = j == -1 ? undefined : j;
          }
          $(".programmeItems").replaceWith(programmeItemsInput({ items }));
          // Restore the focus to the new item.
          if (j != undefined)
            $(".programmeItems li")
              .eq(props.index)
              .find("input")
              .eq(j)
              .trigger("focus");
        }, 0);
        return;
      } else {
        // don't need to re-render if nothing changed.
        return;
      }
    }
    $(".programmeItems").replaceWith(programmeItemsInput({ items }));
  };
}
