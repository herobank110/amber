import $ from "jquery";
import { Concert } from "../archive/amberDb";
import { facebookButton } from "../../utils/view";
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
    $("<a>", {
      text: "Edit",
      class: "adminButton",
      href: `/concert/${props.id}/edit`,
    }),
    $("<a>", {
      text: "Delete",
      class: "adminButton",
      href: `/php/concertDelete.php?id=${props.id}`,
    })
  );

const concertDetails = (props: Concert) =>
  $("<div>", { class: "concertDetails" }).append(
    $("<a>", {
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
      $("<h2>", { text: props.title }),
      $("<span>", { text: longDate(props.when) })
    ),
    props.facebook ? facebookButton(props.facebook) : $()
  );
