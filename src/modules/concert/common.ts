// @ts-ignore
import placeholderPoster from "../../rsrc/placeholderConcert.png";
import { Concert, getConcerts } from "../amberDb/amberDb";

export async function getConcert(): Promise<Concert> {
  if (location.pathname === "/concert/new") return defaultPoster();

  const match = /\/concert\/(\d+)/.exec(location.pathname);
  if (!match) throw new Error("Invalid URL for concert viewer page");
  const id = +match[1];

  const concerts = await getConcerts();
  return concerts.find((x) => x.id == id)!;
}

function defaultPoster() {
  const now = new Date().toISOString().replace(/:\d{2}\.\d{3}Z$/, "");
  console.log("defaultPoster: now", now);
  return {
    id: -1,
    title: "",
    when: now,
    poster: placeholderPoster,
    thumb: "",
  };
}
