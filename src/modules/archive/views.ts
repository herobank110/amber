import $ from "jquery";
import database, { Concert } from "./amberDb";
import { makeNavBar } from "../commonUI/navBar";
import "./archive.scss";

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
  $("<div>", { class: "concertCard" }).append(
    $("<div>", {
      class: "media",
      css: { backgroundImage: `url('${props.thumb}')` },
    }),
    $("<div>", { class: "info" }).append(
      $("<p>", { class: "when", text: dateFormat(props.when) }),
      $("<h3>", { class: "title", text: props.title })
    )
  );

function dateFormat(when: string) {
  return Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(when));
}
