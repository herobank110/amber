import $ from "jquery";
import "./navBar.scss";

export const makeNavBar = () =>
  $("<nav>").append(
    //
    deskopNav(),
    mobileNav()
  );

type NavItemProps = {
  text: string;
  href: string;
};

const deskopNav = () =>
  $("<ul>", { class: "desktop" }).append(
    navItem({ text: "Upcoming", href: "/#upcoming" }),
    navItem({ text: "Ten Years", href: "/#tenYears" }),
    navItem({ text: "About Us", href: "/#about" }),
    logoItem(),
    navItem({ text: "Archive", href: "/?archive" }),
    navItem({ text: "Contact Us", href: "/#contact" }),
    $("<span>")
  );

const navItem = (props: NavItemProps) =>
  $("<li>", { class: "navItem" }).append(
    $("<a>", { href: props.href, text: props.text })
  );

const logoItem = () =>
  //
  $("<a>", { href: "/", class: "logo" });

const mobileNav = () =>
  $("<div>", { class: "mobile" }).append(
    $("<div>", { class: "hamburger" })
      //
      .on("click", () => toggleSideBar()),
    logoItem(),
    sideBar()
  );

const sideBar = () =>
  $("<div>", { class: "sidebar" }).append(
    $("<div>", { class: "inner" }).append(
      $("<div>", { class: "close" }).append(
        $("<div>", { class: "img" })
          //
          .on("click", () => toggleSideBar())
      ),
      $("<ul>").append(
        navItem({ text: "Upcoming", href: "/#upcoming" }),
        navItem({ text: "Ten Years", href: "/#tenYears" }),
        navItem({ text: "About Us", href: "/#about" }),
        navItem({ text: "Archive", href: "/?archive" }),
        navItem({ text: "Contact Us", href: "/#contact" })
      )
    )
  );

function toggleSideBar() {
  $("nav .mobile .sidebar").toggleClass("show");
}
