export default class Item {
  constructor(impresi, options) {
    this.board = impresi.board;
    this.options = options;
    this.element = null;
    //resources created through JSON data need to provide an ID
    if (options.id) {
      this.id = options.id;
    }
  }
}
