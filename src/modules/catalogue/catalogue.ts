import $ from "jquery";
import "./catalogue.scss";
import { link } from "../../utils/view";
import {
  Catalogue,
  Concert,
  getCatalogue,
  getConcerts,
} from "../amberDb/amberDb";
import { shortDate } from "../../utils/utils";

type Piece = {
  id: number;
  name: string;
  composer: string;
  concerts: Concert[];
};

const pieces = [
  {
    id: 1,
    name: "Symphony No. 5 in C minor, Op. 67",
    composer: "Beethoven, Ludwig van",
    concerts: [
      {
        id: 1,
        title: "Spring 2044",
      },
    ],
  },
  {
    id: 2,
    name: "Egmont Overture, Op. 84",
    composer: "Beethoven, Ludwig van",
    concerts: [
      {
        id: 3,
        title: "Spring 2077",
      },
      {
        id: 5,
        title: "Christmas 1653",
      },
    ],
  },
  {
    id: 3,
    name: "Flute Concerto No. 2 in D major, K. 314/285d",
    composer: "Mozart, Wolfgang Amadeus",
    concerts: [
      {
        id: 8,
        title: "The Orchestra's Day Out at the Zoo",
      },
    ],
  },
];

export function cataloguePage() {
  getCatalogue().then((catalogue) => {
    console.debug("cataloguePage(): displaying results:", catalogue);
    $("#cataloguePage .catalogueList").replaceWith(catalogueList(catalogue));
  });

  pieces.sort((a, b) => {
    let retVal = a.composer.localeCompare(b.composer);
    if (retVal == 0) retVal = a.name.localeCompare(b.name);
    return retVal;
  });

  return $("<main>", { id: "cataloguePage" }).append(
    $("<h1>", { text: "Catalogue" }),
    catalogueList({ composers: [] })
  );
}

const catalogueList = (props: Catalogue) =>
  $("<div>", { class: "catalogueList" }).append(
    $("<ul>").append(
      ...props.composers.map((composer) =>
        $("<li>", { text: composer.name }).append(
          $("<ul>").append(
            ...composer.works.map((work) =>
              $("<li>", { text: work.title }).append(
                $("<ul>").append(
                  ...work.performances.map((performance) =>
                    $("<li>").append(
                      link({
                        href: `/concert/${performance.concert.id}`,
                        
                      }).append(
                        $('<span>', {text: shortDate(performance.concert.when)}),
                        $('<span>', {html: "&nbsp;-&nbsp;"}),
                        $('<span>', { text: performance.concert.title }),
                      ),
                      performance.notes
                        ? [
                            $("<span>", { html: "&nbsp;-&nbsp;" }),
                            $("<em>", { text: performance.notes }),
                          ]
                        : []
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
