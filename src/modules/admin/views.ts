import $ from "jquery";
import "./admin.scss";
import { isDevMode } from "../../utils/utils";

export const adminPage = () =>
  $("<div>", { class: "adminLoginPage" }).append(
    $("<h2>", { text: "Admin Section" }),
    $("<form>", { action: "/php/adminLogin.php", method: "post" }).append(
      $("<span>", { text: "Sorry, invalid credentials. Please try again", class: "errorMsg" }),
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
      $("<button>", { type: "submit", text: "Login" })
        //
        .on("click", () => {
          // preempt the admin login passing and just set true in case it worked.
          localStorage.setItem("admin", "true");
        }),
      isDevMode()
        ? $("<button>", { text: "Bypass Login [DEV]", class: "devMode" }).on(
            "click",
            (e) => {
              e.preventDefault();
              localStorage.setItem("admin", "true");
              window.location.href = "/";
            }
          )
        : $()
    )
  );
