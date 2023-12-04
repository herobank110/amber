import $ from "jquery";
import database, { Concert } from "./amberDb";
import { makeNavBar } from "../commonUI/navBar";
import "./archive.scss";
import { facebookLogo } from "../../utils/view";

export const archivePage = () =>
  $("<div>", { id: "archivePage" })
    //
    .append(
      makeNavBar(),
      $("<h1>", { text: "Concerts Archive" }),

      concertsGrid(database.concerts)
    );

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
        $(
          `<svg viewBox="0 0 10 10" stroke="#000"><path d="M1,1L9,9"/><path d="M1,9L9,1"/></svg>`
        )
          .addClass("closeButton")
          .on("click", hideDetails),
        $("<div>", { class: "posterWrap" }).append(
          $("<div>", {
            class: "poster",
            css: { backgroundImage: `url('${props.poster}')` },
          })
        ),
        $("<h3>", { text: props.title }),
        $("<span>", { text: longDate(props.when) }),
        props.facebook
          ? $("<a>", {
              class: "fbLink",
              href: props.facebook,
            }).append(
              //
              facebookLogo(),
              $("<span>", { text: "View on Facebook " })
            )
          : $()
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
