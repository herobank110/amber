import animate from "../../utils/animUtils";

// create the animations
animate(
  ".logoWrap",
  { position: ["fixed", "relative"], translate: ["", `0 ${80 * 0.5}lvh`] },
  { timeRange: "exit 15% 50%", fill: "both", easing: "steps(1)" }
);
animate(
  ".tagline",
  { visibility: ["hidden", "visible"], opacity: [0, 1] },
  { timeRange: "exit 0% 20%", fill: "both", easing: "ease-in" }
);

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
