import $ from "jquery";
import amberDb, { Concert } from "../archive/amberDb";
import { facebookButton } from "../../utils/view";
import { longDate } from "../../utils/utils";
import "./viewer.scss";
import { makeNavBar } from "../commonUI/navBar";

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

function getConcert() {
  const match = /\/concert\/(\d+)/.exec(location.pathname);
  if (!match) throw new Error("Invalid URL for concert viewer page");
  const id = +match[1];
  return amberDb.concerts.find((x) => x.id == id);
}
