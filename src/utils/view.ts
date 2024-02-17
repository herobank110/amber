import $ from "jquery";
import "./utils.scss";

export const footer = () =>
  $("<footer>").append(
    $("<div>", { class: "footerInner" }).append(
      $("<a>", {
        href: "https://davidkanekanian.co.uk",
        text: "Website By David Kanekanian",
      }),
      $("<br>"),
      $("<span>", { html: "&copy; 2023 Roath Chamber Orchestra" }),
      $("<br>"),
      link({ text: "Switch to admin mode", href: "/admin" }).on(
        "click",
        () => {
          sessionStorage.setItem("adminLoginRedirectTo", window.location.href);
        }
      )
    )
  );

export const facebookLogo = () =>
  $(
    `<svg viewBox="0 0 36 36" fill="#0866ff" height="40" width="40"><path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path><path fill="#fff" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path></svg>`
  );

export const facebookButton = (href: string) =>
  $("<a>", { class: "fbLink", href }).append(
    //
    facebookLogo(),
    $("<span>", { text: "View on Facebook" })
  );

export const closeButton = () =>
  $(
    `
    <svg viewBox="0 0 10 10" stroke="#000">
      <path d="M1,1L9,9"/>
      <path d="M1,9L9,1"/>
    </svg>
  `
  ).addClass("closeButton");

type BasicInputProps = {
  name: string;
  label: string;
  type?: string;
};

export const textField = (props: BasicInputProps) =>
  $("<div>", { class: "inpTextfield" }).append(
    $("<label>", { for: `lb-${props.name}`, text: props.label }),
    $("<input>", {
      name: props.name,
      id: `lb-${props.name}`,
      type: props.type ?? "text",
    })
  );

type FileUploadFieldProps = BasicInputProps & {
  /** MIME types, eg image/jpeg, etc */
  accept: string[];
};

export const fileUploadField = (props: FileUploadFieldProps) =>
  textField({ ...props, type: "file" })
    .find("input")
    .attr("accept", props.accept.join(","))
    .closest("div");

export const checkboxField = (props: BasicInputProps) =>
  textField({ ...props, type: "checkbox" });

type LinkProps = {
  href: string;
  text?: string;
  class?: string;
};

export const LINK_CHANGED = "amber:linkChanged";

type ClickHandler = (e: JQuery.ClickEvent) => void;

export const link = (props: LinkProps) => {
  let handlers: ClickHandler[] = [];

  const el = $("<a>", props).on("click", (e) => {
    e.preventDefault();
    for (const handler of handlers) {
      handler(e);
      if (e.isPropagationStopped()) {
        return;
      }
    }
    history.pushState({}, "", props.href);
    window.dispatchEvent(new Event(LINK_CHANGED));
  });

  const origOn = el.on;
  function onOverride() {
    if (arguments[0] == "click") {
      handlers.push(arguments[1]);
      // @ts-ignore
      return this;
    } else {
      // @ts-ignore
      return origOn.apply(this, arguments);
    }
  }
  // @ts-ignore
  el.on = onOverride;

  return el;
};
