// @ts-ignore
declare var _: typeof import("../../node_modules/lil-gui/dist/lil-gui.esm.d.ts");

declare module "lil-gui" {
  export var BooleanController: typeof _.BooleanController;
  export var ColorController: typeof _.ColorController;
  export var Controller: typeof _.Controller;
  export var FunctionController: typeof _.FunctionController;
  export var GUI: typeof _.GUI;
  export var NumberController: typeof _.NumberController;
  export var OptionController: typeof _.OptionController;
  export var StringController: typeof _.StringController;
  export default _.default;
}
