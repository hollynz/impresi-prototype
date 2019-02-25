import Background from "./lib/background";
import Heading from "./lib/heading";
import Blurb from "./lib/blurb";
import Group from "./lib/group";
import Action from "./lib/action";

export default class Impresi {
  constructor(boardId, data, options = []) {
    if (!boardId) {
      throw new Error("ID for board is required");
    }
    this.board = document.querySelector("#" + boardId);
    if (!this.board) {
      throw new Error("No HTML element with the ID: " + boardId);
    }

    this.options = options;
    this.groups = [];
    this.index = 0;
    if (data) {
      this.addResources(data);
    }
    this.init();
  }

  init() {
    this.getAnimationStyles();
    this.setListeners();
  }

  setListeners() {
    let that = this;
    document.body.onkeyup = e => {
      //keys: space, down, right or enter
      if (
        e.keyCode === 32 ||
        e.keyCode === 40 ||
        e.keyCode === 39 ||
        e.keyCode === 13
      ) {
        that.next();
      }
    };
    document.onclick = () => {
      that.next();
    };
  }

  getAnimationStyles() {
    let styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.innerHTML =
      '@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");';

    this.board.appendChild(styleEl);
  }

  createBackground(options) {
    return new Background(this, options);
  }

  createHeading(text, options) {
    return new Heading(this, text, options);
  }

  createBlurb(text, options) {
    return new Blurb(this, text, options);
  }

  addActions(options) {
    if (options.out) {
      this.addGroup("out", options);
    }
    if (options.in) {
      this.addGroup("in", options);
    }

    return this;
  }

  addGroup(actionName, options) {
    let actions = [];
    options[actionName].forEach(item => {
      let action = new Action(item);
      actions.push(action);
    });
    let group = new Group(actionName, actions);
    this.groups.push(group);
  }

  next() {
    let group = this.groups[this.index];

    //if the group action is "out", stop the action
    if (group.actionName === "out") {
      if (!group.actions.length) {
        throw new Error("No actions provided.");
      }
      group.stop();
      this.increment();
      this.next();
    } else {
      group.run();
      this.increment();
    }
  }

  start() {
    if (!this.groups.length) {
      throw new Error("No groups of actions have been added yet.");
    }
    this.next();
  }

  increment() {
    if (this.index !== this.groups.length - 1) {
      this.index++;
    }
  }

  addResources(data) {
    if (!data.resources) {
      throw new Error("No resources exist in the data.");
    }
    let items = [];
    data.resources.forEach(resource => {
      if (!resource.type) {
        throw new Error("All items must have a type.");
      }
      if (!resource.id) {
        throw new Error("All items must have an id.");
      }
      resource.options.id = resource.id;
      switch (resource.type) {
        case "background":
          items.push(this.createBackground(resource.options));
          break;
        case "heading":
          items.push(this.createHeading(resource.text, resource.options));
          break;
        case "blurb":
          items.push(this.createBlurb(resource.text, resource.options));
          break;
        default:
          return;
      }
    });
    let actions = data.actions;
    actions.forEach(action => {
      for (var key in action) {
        if (action.hasOwnProperty(key)) {
          let actionsObj = {};
          actionsObj[key] = [];
          let itemIds = action[key];
          itemIds.forEach(itemId => {
            for (let item of items) {
              if (item.id == itemId) {
                actionsObj[key].push(item);
                break;
              }
            }
          });
          this.addActions(actionsObj);
        }
    }
    });
  }
}
