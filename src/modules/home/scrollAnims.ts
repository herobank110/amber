import animate from "../../utils/animUtils";

// create the animations
// animate(
//   ".logoWrap",
//   { position: ["fixed", "relative"], translate: ["", `0 ${80 * 0.5}lvh`] },
//   { timeRange: "exit 15% 50%", fill: "both", easing: "steps(1)" }
// );
animate(
  ".tagline",
  {
    visibility: ["hidden", "visible", "visible", "visible", "hidden"],
    opacity: [0, 1, 1, 1, 0],
  },
  { timeRange: "exit 0% 80%", fill: "both", easing: "ease-in" }
);
// animate(
//   ".tagline",
//   { marginTop: ["20px", "23vmin"] },
//   { timeRange: "exit 65% 80%", fill: "both", easing: "linear" }
// )
animate(
  "#logo",
  { width: ["100vmin", "100px"] },
  { timeRange: "exit 40% 80%", fill: "both", easing: "linear" }
);
animate(
  ".logoWrap",
  { height: ["80lvh", "100px"] },
  { timeRange: "exit 60% 100%", fill: "both", easing: "linear" }
);
animate(
  ".upcomingCover",
  [
    { visibility: "visible", opacity: 1 },
    { visibility: "hidden", opacity: 0 },
  ],
  { timeRange: "exit 40% 100%", fill: "both", easing: "linear" }
);

[1, 3].forEach((n) => {
  animate(
    `.posters>:nth-child(${n})`,
    // { marginTop: ["0%", "-120%"] },
    { marginTop: ["-50lvh", "0lvh"] },
    { timeRange: "cover 0% 100%", fill: "both", easing: "linear" }
  );
});

[2, 4].forEach((n) => {
  animate(
    `.posters>:nth-child(${n})`,
    // { marginTop: ["-120%", "0%"] },
    // { marginTop: ["0%", "-120%"] },
    { marginTop: ["-50lvh", "0lvh"] },
    { timeRange: "cover 0% 100%", fill: "both", easing: "linear" }
  );
});

// animate(
//   ".upcoming",
//   { marginTop: ["20lvh", "-10lvh"]},
//   { timeRange: "contain -120% 20%", fill: "both", easing: "ease-out" }
// )

// animate(
//   ".splash",
//   { position: ["fixed", "relative"], translate: ["", "0 24lvh"] },
//   { timeRange: "exit 0% 30%", fill: "both", easing: "steps(1)" }
// );
// animate(
//   ".splash",
//   { translate: ["0 24lvh", "0 -20lvh"] },
//   {
//     timeRange: "exit 30% 100%",
//     fill: "forwards",
//     easing: "cubic-bezier(0.3, 0.3, 0.1, 1)",
//   }
// );

// animate(
//   ".upcoming",
//   [
//     { visibility: "hidden", opacity: 0, top: "23lvh" },
//     { visibility: "visible", opacity: 1, top: "16lvh", offset: 0.15 },
//     // { visibility: "visible", opacity: 1, top: "16lvh", offset: 0.6 },
//     // { visibility: "hidden", opacity: 0, top: "-50lvh" },
//     { visibility: "visible", opacity: 1, top: "16lvh" },
//   ],
//   {
//     timeRange: "contain -65% 250%",
//     fill: "both",
//     easing: "linear",
//   }
// );

// // animate(
// //   ".warped1 .mask1",
// //   { "stroke-dashoffset": [0, 200] },
// //   // { "opacity": [0, 1] },
// //   { timeRange: "contain 10% 30%", fill: "both", easing: "linear" }
// // );

// // fade out upcoming header and text
// [".upcoming>h2", ".upcoming .info"].forEach((selector) =>
//   animate(
//     selector,
//     [
//       { visibility: "visible", opacity: 1 },
//       { visibility: "hidden", opacity: 0 },
//     ],
//     { timeRange: "contain 40% 100%", fill: "both", easing: "linear" }
//   )
// );

// // fade out poster slightly later, 'crossfade' to past posters
// animate(".upcoming .poster",
//     [
//       { visibility: "visible", opacity: 1 },
//       { visibility: "hidden", opacity: 0 },
//     ],
//     { timeRange: "contain 120% 160%", fill: "both", easing: "linear" }
// )

// // crossfade in past poster grid
// animate(".past",
//     [
//       { visibility: "hidden", opacity: 0 },
//       { visibility: "visible", opacity: 1 },
//     ],
//     { timeRange: "enter 80% 130%", fill: "both", easing: "linear" }

// )

// // window.addEventListener("load", () => {
// //   const pastEl = document.querySelector(".past")
// //   if (!pastEl) throw new Error("couldn't find pastEl");

// //   pastEl.innerHTML =

// // })
