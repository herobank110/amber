import $ from "jquery";
import "./catalogue.scss";

export function cataloguePage() {
  return $("<main>", { id: "cataloguePage" }).append(
    $("<h1>", { text: "FUCK" })
  );
}
