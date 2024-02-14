import amberDb from "../archive/amberDb";

export function getConcert() {
  const match = /\/concert\/(\d+)/.exec(location.pathname);
  if (!match) throw new Error("Invalid URL for concert viewer page");
  const id = +match[1];
  return amberDb.concerts.find((x) => x.id == id);
}
