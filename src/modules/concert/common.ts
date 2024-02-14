import amberDb, { Concert } from "../archive/amberDb";
// import placeholderPoster from "../../rsrc/posterPlaceholder.png";

export function getConcert(): Concert {
  if (location.pathname === "/concert/new") return defaultPoster();

  const match = /\/concert\/(\d+)/.exec(location.pathname);
  if (!match) throw new Error("Invalid URL for concert viewer page");
  const id = +match[1];
  return amberDb.concerts.find((x) => x.id == id)!;
}

function defaultPoster() {
  const now = new Date().toISOString().replace(/:\d{2}\.\d{3}Z$/, "");
  console.log("defaultPoster: now", now);
  return {
    id: -1,
    title: "Insert Title Here",
    when: now,
    poster: "https://placehold.it/300x400",
    thumb: "",
  };
}
