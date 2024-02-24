import $ from "jquery";
import Noty from "noty";
import { facebookButton, link } from "../../utils/view";
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
    console.debug("concertViewerPage: Concert:",  concert);
    $(".concertDetails").replaceWith(concertDetails(concert));
    onDone();
  });

  return $("<main>", { id: "concertDetailsPage" }).append(
    //
    $("<div>", { class: "concertDetails" })
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
      text: "🢄 Back to All Concerts",
      class: "backButton",
    }),
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
    programmeWrap().append(
      props.programme ? programme({ items: props.programme }) : $()
    ),
    props.facebook ? facebookButton(props.facebook) : $()
  );

const programmeWrap = () => $("<div>", { class: "programme" });

const programme = (props: { items: ProgrammeItem[] }) => [
  $("<h3>", { text: "Programme" }),
  $("<ol>").append(
    props.items.map((item) =>
      $("<li>").append(
        $("<strong>", { text: item.composer }).append(
          $("<span>", { html: ":&nbsp;" }),
        ),
        $("<span>", { text: item.title }),
        item.performanceNotes
          ? [$("<br>"), $("<em>", { text: item.performanceNotes })]
          : $()
      )
    )
  ),
];

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
