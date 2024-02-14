import { getConcert } from "./common";
import { concertViewerPage } from "./viewer";

export function concertEditorPage() {
  const concert = getConcert();
  if (!concert) throw new Error("Concert not found");

  //   return $("<main>", { id: "concertEditorPage" }).append(
  console.log(`Editing concert ${concert.id}`);
  return concertViewerPage();
  //   );
}
