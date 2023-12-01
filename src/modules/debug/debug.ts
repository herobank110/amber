import LilGui from "lil-gui";

// auto apply debug gui
export function addScrollDebugUI() {
  if (window.location.hostname == "localhost") {
    const debugGui = new LilGui();
    const debugSettings = {
      opacity: 100,
    };
    debugGui.add(debugSettings, "opacity", 0, 100, 1).onChange(() => {
      document.body.style.setProperty(
        "--debug-opacity",
        debugSettings.opacity + "%"
      );
    });
  }
}
