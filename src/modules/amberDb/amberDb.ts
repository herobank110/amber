import { isDevMode } from "../../utils/utils";
import { Concert } from "../archive/amberDb";

type ID = number;

export function saveConcert(concert: Concert): Promise<ID> {
  console.debug(`saveConcert(${JSON.stringify(concert)})`);

  if (isDevMode()) {
    return new Promise((resolve, reject) => {
      console.log("saveConcert: (dev mode) auto resolve");
      setTimeout(() => resolve(1), 1000);
    });
  }

  const url = "/php/concertEdit.php";
  const formData = objectToFormData(concert);
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("saveConcert: resolved", data);
        resolve(data.id);
      })
      .catch(reject);
  });
}

function objectToFormData(obj: Record<string, { toString(): string }>) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    formData.append(key, value.toString());
  }
  return formData;
}
