import $ from "jquery";
import database, { Concert } from "./amberDb";
import { makeNavBar } from "../commonUI/navBar";
import "./archive.scss";
import { isAdminMode } from "../admin/adminMode";
import { shortDate } from "../../utils/utils";

export const archivePage = () =>
  $("<div>", { id: "archivePage" })
    //
    .append(
      makeNavBar(),
      $("<main>").append(
        // $("<h1>", { text: "Concerts Archive" }),
        isAdminMode() ? adminControls() : $(),
        concertsGrid(database.concerts)
      )
    );

const adminControls = () =>
  $("<a>", {
    text: "Add Concert",
    class: "adminButton adminBigButton",
    href: "/concert/new",
  });

const concertsGrid = (props: Concert[]) =>
  $("<div>", { class: "concertsGrid" }).append(
    props
      .sort((a, b) => b.when.localeCompare(a.when))
      .map((x) => concertCard(x))
  );

const concertCard = (props: Concert) =>
  $("<div>", { class: "concertCard" })
    .append(
      $("<div>", {
        class: "media",
        css: { backgroundImage: `url('${props.thumb}')` },
      }),
      $("<div>", { class: "info" }).append(
        $("<p>", { class: "when", text: shortDate(props.when) }),
        $("<h3>", { class: "title", text: props.title })
      )
    )
    .on("click", () => onClickConcertCard(props));

function onClickConcertCard(concert: Concert) {
  location.href = `/concert/${concert.id}`;
}

function onClickConcertDetails(e: JQuery.ClickEvent) {
  if (e.target == e.currentTarget)
    // event was not in the outer part of the popup
    hideDetails();
}

function hideDetails() {
  const el = $(".concertDetails");
  el.fadeOut("fast", "", () => {
    el.remove();
    $("body").removeClass("modal");
  });
}
