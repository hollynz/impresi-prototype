import Item from "./item";
export default class AbsoluteItem extends Item {
  constructor(impresi, options) {
    super(impresi, options);
    if (!options.x) {
      this.options.x = "10"; //default
    }
    if (!options.y) {
      this.options.y = "10"; //default
    }
    if (!options.fontSize) {
      this.options.fontSize = "4"; //default
    }
  }
}
