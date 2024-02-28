import $ from "jquery";
import Noty from "noty";
import { facebookButton, icon, iconButton, link } from "../../utils/view";
import { longDate, setLocation } from "../../utils/utils";
import { getConcert } from "./common";
import "./viewer.scss";
import {
  Concert,
  ProgrammeItem,
  deleteConcert,
  getConcerts,
} from "../amberDb/amberDb";
import { isAdminMode } from "../admin/adminMode";

export function concertViewerPage(onDone = () => {}) {
  getConcert().then((concert) => {
    if (!concert) {
      new Noty({
        text: "Requested concert not found",
        type: "error",
        timeout: 3000,
        layout: "center",
      }).show();
      setLocation("/concerts");
      return;
    }
    console.debug("concertViewerPage: Concert:", concert);
    $(".concertDetails").replaceWith(concertDetails(concert));
    onDone();
  });

  return $("<main>", { id: "concertDetailsPage" }).append(
    //
    $("<div>", { class: "concertDetails", text: "Loading..." })
  );
}

const adminControls = (props: { id: number }) =>
  $("<div>", { class: "adminControls" }).append(
    link({
      text: "Edit",
      class: "adminButton",
      href: `/concert/${props.id}/edit`,
    }),
    $("<a>", {
      text: "Delete",
      class: "adminButton outlined",
    }).on("click", () => onClickDelete(props.id))
  );

/**
 * Details about the concert
 * This is mutated for the editor as well.
 */
const concertDetails = (props: Concert) =>
  $("<div>", { class: "concertDetails" }).append(
    link({
      href: "/concerts",
      class: "backButton",
    }).append(
      icon({ icon: "arrow_back" }),
      $("<span>", { text: "Back to All Concerts" })
    ),
    isAdminMode() ? adminControls({ id: props.id }) : $(),
    $("<div>", { class: "posterWrap" }).append(
      $("<img>", {
        class: "poster",
        src: props.poster,
      })
    ),
    $("<div>").append(
      $("<h2>", { text: props.title, class: "title" }),
      $("<span>", { text: longDate(props.when), class: "when" })
    ),
    programme({ items: props.programme }),
    props.facebook ? facebookButton(props.facebook) : $(),
    prevNextConcerts({ id: props.id })
  );

const programme = (props: { items?: ProgrammeItem[] }) =>
  $("<div>", { class: "programme" })
    .toggleClass("empty", !props.items)
    .append(
      $("<h3>", { text: "Programme" }),
      $("<ol>", { class: "programmeItems" }).append(
        (props.items ?? []).map((item) =>
          $("<li>").append(
            $("<strong>", { text: item.composer }).append(
              $("<span>", { html: ":&nbsp;" })
            ),
            $("<span>", { text: item.title }),
            item.performanceNotes
              ? [$("<br>"), $("<em>", { text: item.performanceNotes })]
              : $()
          )
        )
      )
    );

const prevNextConcerts = (props: { id: number }) => {
  getConcerts().then((concerts) => {
    concerts.sort((a, b) => a.when.localeCompare(b.when));
    const current = new Date(concerts.find((c) => c.id === props.id)!.when);
    const nextConcert = concerts.find((c) => new Date(c.when) > current);
    const prevConcert = concerts
      .reverse()
      .find((c) => new Date(c.when) < current);
    $(".prevNextConcerts").append(
      prevConcert
        ? link({ href: `/concert/${prevConcert.id}` }).append(
            icon({ icon: "arrow_back" }),
            $("<span>", { text: "Previous Concert" })
          )
        : [],
      nextConcert
        ? link({ href: `/concert/${nextConcert.id}` })
            .addClass("nextConcert")
            .append(
              $("<span>", { text: "Next Concert" }),
              icon({ icon: "arrow_forward" })
            )
        : []
    );
  });
  return $("<div>", { class: "prevNextConcerts" });
};

async function onClickDelete(id: number) {
  if (confirm("Are you sure you want to delete this concert?")) {
    const processingNoty = new Noty({
      text: "Processing request...",
      type: "info",
      layout: "center",
    });
    processingNoty.show();
    const success = await deleteConcert(id);
    processingNoty.close();
    if (success) {
      console.debug(`adminControls: reloading concerts cache`);
      await getConcerts(false);
    }
    new Noty({
      text: success
        ? "Concert deleted successfully"
        : "Failed to delete concert",
      type: success ? "success" : "error",
      timeout: 3000,
      layout: "center",
    }).show();
    setLocation("/concerts");
  }
}
