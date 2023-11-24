import $ from "jquery";
import database, { Concert } from "./amberDb";

export const archivePage = () =>
  $("<div>", { id: "archivePage" })
    //
    .append(
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
      css: { backgroundImage: `url(${props.poster}` },
    }),
    $("<h3>", { class: "title", text: props.title }),
    $("<p>", { class: "when", text: props.when })
  );
