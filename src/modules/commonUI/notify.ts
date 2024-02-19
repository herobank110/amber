import Noty from "noty";
import "./noty.scss";

type Type = "error" | "success" | "info";

export function notify(message: string, type: Type = "info") {
  new Noty({
    text: message,
    type: "success",
    // timeout: 2000,
  }).show();
}
