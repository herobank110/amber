import $ from "jquery";
import "./catalogue.scss";

const pieces = [
  {
    id: 1,
    name: "Symphony No. 5 in C minor, Op. 67",
    composer: "Beethoven, Ludwig van",
    year: 1808,
  },
  {
    id: 2,
    name: "Egmont Overture, Op. 84",
    composer: "Beethoven, Ludwig van",
    year: 1810,
  },
  {
    id: 3,
    name: "Flute Concerto No. 2 in D major, K. 314/285d",
    composer: "Mozart, Wolfgang Amadeus",
    year: 1778,
  },
];

export function cataloguePage() {
  // sort the pieces by composer, then by name

  pieces.sort((a, b) => {
    if (a.composer < b.composer) return -1;
    if (a.composer > b.composer) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  return $("<main>", { id: "cataloguePage" }).append(
    $("<h1>", { text: "Catalogue" }),
    ...pieces.map((piece) =>
      $("<div>", { class: "piece" }).append(
        $("<span>", { text: piece.name }),
        $("<span>", { text: piece.composer })
      )
    )
  );
}
