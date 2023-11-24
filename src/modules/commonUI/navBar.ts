import $ from "jquery";
import "./navBar.scss";

export const makeNavBar = () =>
  $("<nav>", {class: "navBar"}).append(
    $("<ul>").append(
      navItem({ text: "Upcoming", href: "/#upcoming" }),
      navItem({ text: "Ten Years", href: "/#tenYears" }),
      navItem({ text: "About Us", href: "/#about" }),
      $("<a>", { href: "/", class: "logo" }),
      navItem({ text: "Archive", href: "/?archive" }),
      navItem({ text: "Contact Us", href: "/#contact" }),
      $("<span>")
    )
  );

type NavItemProps = {
  text: string;
  href: string;
};

const navItem = (props: NavItemProps) =>
  $("<li>", { class: "navItem" }).append(
    $("<a>", { href: props.href, text: props.text })
  );
