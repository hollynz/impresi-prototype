import Item from "./item";
export default class Background extends Item {
  constructor(impresi, options = {}) {
    super(impresi, options);
    this.addElements();
  }

  addElements() {
    this.element = document.createElement("div");
    this.element.classList.add("background", "item");
    if (this.options.imageUrl) {
      let image = document.createElement("img");
      image.src = this.options.imageUrl;
      this.element.appendChild(image);
    } else if (this.options.bgColor) {
      this.element.style.backgroundColor = this.options.bgColor;
    }
    document.body.insertBefore(this.element, this.board);
  }
}
