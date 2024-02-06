import $ from "jquery";
import "./admin.scss";
import { isDevMode } from "../../utils/utils";

export const adminPage = () =>
  $("<div>", { class: "adminLoginPage" }).append(
    $("<h2>", { text: "Admin Section" }),
    $("<form>", { action: "/php/adminLogin.php", method: "post" }).append(
      $("<input>", { type: "text", name: "username", placeholder: "Username" }),
      $("<input>", {
        type: "password",
        name: "password",
        placeholder: "Password",
      }),
      $("<input>", {
        type: "hidden",
        name: "redirectTo",
        value: sessionStorage.getItem("adminLoginRedirectTo") || "/",
      }),
      $("<button>", { type: "submit", text: "Login" }),
      isDevMode()
        ? $("<button>", { text: "Bypass Login [DEV]", class: "devMode" }).on(
            "click",
            (e) => {
              e.preventDefault();
              window.localStorage.setItem("admin", "true");
              window.location.href = "/";
            }
          )
        : $()
    )
  );
