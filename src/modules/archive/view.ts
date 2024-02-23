import $ from "jquery";
import "./archive.scss";
import { isAdminMode } from "../admin/adminMode";
import { shortDate } from "../../utils/utils";
import { link } from "../../utils/view";
import { Concert, getConcerts } from "../amberDb/amberDb";

export const archivePage = () => {
  getConcerts().then((concerts) => {
    $(".concertsGrid").replaceWith(concertsGrid(concerts));
  });
  return $("<div>", { id: "archivePage" }).append(
    $("<main>").append(
      // $("<h1>", { text: "Concerts Archive" }),
      isAdminMode() ? adminControls() : $(),
      concertsGrid([])
    )
  );
};
$("<div>", { id: "archivePage" });

const adminControls = () =>
  link({
    text: "Add Concert",
    class: "adminBigButton",
    href: "/concert/new",
  });

const concertsGrid = (props: Concert[]) =>
  $("<div>", { class: "concertsGrid" }).append(
    props
      .sort((a, b) => b.when.localeCompare(a.when))
      .map((x) => concertCard(x))
  );

const concertCard = (props: Concert) =>
  link({ href: `/concert/${props.id}`, class: "concertCard" }).append(
    $("<div>", {
      class: "media",
      css: { backgroundImage: `url('${props.thumb}')` },
    }),
    $("<div>", { class: "info" }).append(
      $("<p>", { class: "when", text: shortDate(props.when) }),
      $("<h3>", { class: "title", text: props.title })
    )
  );
