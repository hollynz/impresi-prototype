import AbsoluteItem from "./absolute-item";
export default class Blurb extends AbsoluteItem {
  constructor(impresi, text, options = {}) {
    super(impresi, options);
    this.text = text;
    this.addElements();
  }

  addElements() {
    this.element = document.createElement("div");
    this.element.style.overflow = "hidden";
    this.element.style.maxWidth = `${this.options.width}vw`;
    this.element.classList.add("blurb", "item");
    this.element.style.left = `${this.options.x}vw`;
    this.element.style.top = `${this.options.y}vh`;
    var p = document.createElement("p");
    p.innerHTML = this.text;
    p.style.fontSize = "2vw";
    this.element.appendChild(p);
    document.body.insertBefore(this.element, this.board);
  }
}
