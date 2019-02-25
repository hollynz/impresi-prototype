import AbsoluteItem from "./absolute-item";
export default class Heading extends AbsoluteItem {
  constructor(impresi, text, options = {}) {
    super(impresi, options);
    this.text = text;
    this.addElements();
  }

  addElements() {
    this.element = document.createElement("span");
    this.element.style.overflow = "hidden";
    if (this.options.width) {
      this.element.style.maxWidth = `${this.options.width}vw`;
    }
    this.element.classList.add("heading", "item");
    var h1 = document.createElement("h1");
    this.element.style.left = `${this.options.x}vw`;
    this.element.style.top = `${this.options.y}vh`;
    h1.innerHTML = this.text;
    h1.style.fontSize = `${this.options.fontSize}vw`;
    this.element.appendChild(h1);
    document.body.insertBefore(this.element, this.board);
  }
}
