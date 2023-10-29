import animate from "../../utils/animUtils";

// create the animations
// animate(
//   ".logoWrap",
//   { position: ["fixed", "relative"], translate: ["", `0 ${80 * 0.5}lvh`] },
//   { timeRange: "exit 15% 50%", fill: "both", easing: "steps(1)" }
// );
animate(
  ".tagline",
  { visibility: ["hidden", "visible", "visible", "visible", "hidden"], opacity: [0, 1, 1, 1, 0] },
  { timeRange: "exit 0% 60%", fill: "both", easing: "ease-in" }
);
animate(
  ".tagline",
  { marginTop: ["0lvh", "23vmin"] },
  { timeRange: "exit 65% 80%", fill: "both", easing: "linear" }
)
animate(
  "#logo",
  {width: ["100vmin", "100px"]},
  { timeRange: "exit 40% 80%", fill: "both", easing: "linear" }
)

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
