import { isDevMode } from "../../utils/utils";
import { Concert } from "../archive/amberDb";

export function saveConcert(concert: Concert) {
  console.debug(`saveConcert(${JSON.stringify(concert)})`);

  if (isDevMode()) {
    return new Promise<void>((resolve, reject) => {
      console.log("saveConcert: (dev mode) auto resolve");
      setTimeout(() => resolve(), 1000);
    });
  }

  const url = "/php/concertEdit.php";
  const formData = objectToFormData(concert);
  return fetch(url, {
    method: "POST",
    body: formData,
  });
}

function objectToFormData(obj: Record<string, { toString(): string }>) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    formData.append(key, value.toString());
  }
  return formData;
}
