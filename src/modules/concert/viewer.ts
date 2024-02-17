import $ from "jquery";
import { Concert } from "../archive/amberDb";
import { facebookButton, link } from "../../utils/view";
import { longDate } from "../../utils/utils";
import { getConcert } from "./common";
import "./viewer.scss";

export const concertViewerPage = () => {
  const concert = getConcert();
  if (!concert) throw new Error("Concert not found");

  return $("<main>", { id: "concertDetailsPage" }).append(
    //
    concertDetails(concert)
  );
};

const adminControls = (props: { id: number }) =>
  $("<div>", { class: "adminControls" }).append(
    link({
      text: "Edit",
      class: "adminButton",
      href: `/concert/${props.id}/edit`,
    }),
    $("<a>", {
      text: "Delete",
      class: "adminButton",
      href: `/php/concertDelete.php?id=${props.id}`,
    }).on("click", (e) => {
      if (!confirm("Are you sure you want to delete this concert?"))
        e.preventDefault();
    })
  );

/**
 * Details about the concert
 * This is mutated for the editor as well.
 */
const concertDetails = (props: Concert) =>
  $("<div>", { class: "concertDetails" }).append(
    link({
      href: "/archive",
      text: "🢄 Back to All Concerts",
      class: "backButton",
    }),
    adminControls({ id: props.id }),
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
    props.facebook ? facebookButton(props.facebook) : $()
  );
