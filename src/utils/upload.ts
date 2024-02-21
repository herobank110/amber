import Noty from "noty";
import { isDevMode } from "./utils";

type Response =
  | { success: true; url: string }
  | { success: false; error: string };

const mockResponse: Response = {
  success: true,
  url: "https://wales-armenia.87.org.uk/share/homePage/splash01A.jpg",
};

/** Upload a file and return url, with status indicators. */
export async function uploadFile(file: File) {
  console.debug(`uploadFile(${file.name})`);
  const waitNoty = new Noty({
    text: "Uploading, please wait...",
    type: "info",
    layout: "center",
  });
  waitNoty.show();

  let data: Response;
  if (isDevMode()) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    data = mockResponse;
  } else {
    const form = new FormData();
    form.append("file", file);
    data = await fetch("/php/upload.php", {
      method: "POST",
      body: form,
    }).then((res) => res.json());
  }

  waitNoty.close();
  if (!data.success) {
    new Noty({
      text: "Failed to upload file: " + data.error,
      type: "error",
      layout: "center",
      timeout: 3000,
    }).show();
    return;
  }

  new Noty({
    text: "File uploaded successfully",
    type: "success",
    layout: "center",
    timeout: 3000,
  }).show();
  return data.url;
}
