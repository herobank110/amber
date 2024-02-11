import $ from "jquery";
import database, { Concert } from "./amberDb";
import { makeNavBar } from "../commonUI/navBar";
import "./archive.scss";
import { closeButton, facebookButton, facebookLogo } from "../../utils/view";
import { isAdminMode } from "../admin/adminMode";

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
  $("<a>", { text: "Add Concert", class: "adminBigButton", href:"/concert/new" })

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

const concertDetails = (props: Concert) =>
  $("<div>", { class: "concertDetails" })
    .append(
      $("<div>", { class: "popupInner" }).append(
        closeButton().on("click", hideDetails),
        $("<div>", { class: "posterWrap" }).append(
          $("<img>", {
            class: "poster",
            src: props.poster,
          })
        ),
        $("<h3>", { text: props.title }),
        $("<span>", { text: longDate(props.when) }),
        props.facebook ? facebookButton(props.facebook) : $()
      )
    )
    .on("click", onClickConcertDetails);

function onClickConcertCard(concert: Concert) {
  const el = concertDetails(concert);
  const m = window.innerWidth - document.body.clientWidth;
  $("body")
    .css("--m", m + "px")
    .addClass("modal");
  el.appendTo("body").hide().fadeIn("fast");
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

function shortDate(when: string) {
  return Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(when));
}

function longDate(when: string) {
  return Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(when));
}
