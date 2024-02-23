import $ from "jquery";
import "./catalogue.scss";
import { link } from "../../utils/view";
import { Concert, getConcerts } from "../amberDb/amberDb";

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
  getConcerts().then((concerts) => {
    $("#cataloguePage .pieceList").replaceWith(pieceList(pieces as Piece[]));
  });

  pieces.sort((a, b) => {
    let retVal = a.composer.localeCompare(b.composer);
    if (retVal == 0) retVal = a.name.localeCompare(b.name);
    return retVal;
  });

  return $("<main>", { id: "cataloguePage" }).append(
    $("<h1>", { text: "Catalogue" }),
    pieceList([])
  );
}

const pieceList = (pieces: Piece[]) =>
  $("<div>", { class: "pieceList" }).append(
    ...pieces.map((piece) =>
      $("<details>", { class: "piece" }).append(
        $("<summary>", { text: piece.composer + " - " + piece.name }),
        $("<span>", { html: "Played in:&nbsp;" }),
        ...piece.concerts.map((concert) =>
          link({
            href: `/concert/${concert.id}`,
            text: concert.title,
          })
        )
      )
    )
  );
