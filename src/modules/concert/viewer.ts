import $ from "jquery";
import Noty from "noty";
import { facebookButton, link } from "../../utils/view";
import { longDate, setLocation } from "../../utils/utils";
import { getConcert } from "./common";
import "./viewer.scss";
import { Concert, deleteConcert, getConcerts } from "../amberDb/amberDb";
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
    programme(),
    props.facebook ? facebookButton(props.facebook) : $()
  );

const programme = () =>
  $("<div>", { class: "programme" }).append(
    $("<h3>", { text: "Programme" }),
    $("<ol>").append(
      $("<li>", {
        text: "Beethoven: Creatures of Prometheus Overture, Op. 43",
      }),
      $("<li>", {
        html: "Mozart: Concerto for Flute and Harp in C major, K. 299/297c<br>Solos: Nicole Esposito, flute; and Rita Costanzi, harp",
      }),
      $("<li>", {
        text: "Schubert: Symphony No. 8 in B minor, D. 759, 'Unfinished'",
      })
    )
  );

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
