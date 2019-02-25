// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/impresi/lib/item.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Item = function Item(impresi, options) {
  _classCallCheck(this, Item);

  this.board = impresi.board;
  this.options = options;
  this.element = null; //resources created through JSON data need to provide an ID

  if (options.id) {
    this.id = options.id;
  }
};

exports.default = Item;
},{}],"src/impresi/lib/background.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _item = _interopRequireDefault(require("./item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Background =
/*#__PURE__*/
function (_Item) {
  _inherits(Background, _Item);

  function Background(impresi) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Background);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Background).call(this, impresi, options));

    _this.addElements();

    return _this;
  }

  _createClass(Background, [{
    key: "addElements",
    value: function addElements() {
      this.element = document.createElement("div");
      this.element.classList.add("background", "item");

      if (this.options.imageUrl) {
        var image = document.createElement("img");
        image.src = this.options.imageUrl;
        this.element.appendChild(image);
      } else if (this.options.bgColor) {
        this.element.style.backgroundColor = this.options.bgColor;
      }

      document.body.insertBefore(this.element, this.board);
    }
  }]);

  return Background;
}(_item.default);

exports.default = Background;
},{"./item":"src/impresi/lib/item.js"}],"src/impresi/lib/absolute-item.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _item = _interopRequireDefault(require("./item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AbsoluteItem =
/*#__PURE__*/
function (_Item) {
  _inherits(AbsoluteItem, _Item);

  function AbsoluteItem(impresi, options) {
    var _this;

    _classCallCheck(this, AbsoluteItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AbsoluteItem).call(this, impresi, options));

    if (!options.x) {
      _this.options.x = "10"; //default
    }

    if (!options.y) {
      _this.options.y = "10"; //default
    }

    if (!options.fontSize) {
      _this.options.fontSize = "4"; //default
    }

    return _this;
  }

  return AbsoluteItem;
}(_item.default);

exports.default = AbsoluteItem;
},{"./item":"src/impresi/lib/item.js"}],"src/impresi/lib/heading.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _absoluteItem = _interopRequireDefault(require("./absolute-item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Heading =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(Heading, _AbsoluteItem);

  function Heading(impresi, text) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Heading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Heading).call(this, impresi, options));
    _this.text = text;

    _this.addElements();

    return _this;
  }

  _createClass(Heading, [{
    key: "addElements",
    value: function addElements() {
      this.element = document.createElement("span");
      this.element.style.overflow = "hidden";

      if (this.options.width) {
        this.element.style.maxWidth = "".concat(this.options.width, "vw");
      }

      this.element.classList.add("heading", "item");
      var h1 = document.createElement("h1");
      this.element.style.left = "".concat(this.options.x, "vw");
      this.element.style.top = "".concat(this.options.y, "vh");
      h1.innerHTML = this.text;
      h1.style.fontSize = "".concat(this.options.fontSize, "vw");
      this.element.appendChild(h1);
      document.body.insertBefore(this.element, this.board);
    }
  }]);

  return Heading;
}(_absoluteItem.default);

exports.default = Heading;
},{"./absolute-item":"src/impresi/lib/absolute-item.js"}],"src/impresi/lib/blurb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _absoluteItem = _interopRequireDefault(require("./absolute-item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Blurb =
/*#__PURE__*/
function (_AbsoluteItem) {
  _inherits(Blurb, _AbsoluteItem);

  function Blurb(impresi, text) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Blurb);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blurb).call(this, impresi, options));
    _this.text = text;

    _this.addElements();

    return _this;
  }

  _createClass(Blurb, [{
    key: "addElements",
    value: function addElements() {
      this.element = document.createElement("div");
      this.element.style.overflow = "hidden";
      this.element.style.maxWidth = "".concat(this.options.width, "vw");
      this.element.classList.add("blurb", "item");
      this.element.style.left = "".concat(this.options.x, "vw");
      this.element.style.top = "".concat(this.options.y, "vh");
      var p = document.createElement("p");
      p.innerHTML = this.text;
      p.style.fontSize = "2vw";
      this.element.appendChild(p);
      document.body.insertBefore(this.element, this.board);
    }
  }]);

  return Blurb;
}(_absoluteItem.default);

exports.default = Blurb;
},{"./absolute-item":"src/impresi/lib/absolute-item.js"}],"src/impresi/lib/group.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Group =
/*#__PURE__*/
function () {
  function Group(actionName, actions) {
    _classCallCheck(this, Group);

    this.actionName = actionName;
    this.actions = actions;
  }

  _createClass(Group, [{
    key: "run",
    value: function run() {
      this.actions.forEach(function (action) {
        action.run();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.actions.forEach(function (action) {
        action.stop();
      });
    }
  }]);

  return Group;
}();

exports.default = Group;
},{}],"src/impresi/lib/action.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Action =
/*#__PURE__*/
function () {
  function Action(item) {
    _classCallCheck(this, Action);

    this.item = item;
    this.inAnimationName = this.item.options.inAnimationName != undefined ? item.options.inAnimationName : "fadeIn";
    this.outAnimationName = item.options.outAnimationName != undefined ? item.options.outAnimationName : "fadeOut";
  }

  _createClass(Action, [{
    key: "run",
    value: function run() {
      this.item.element.classList.add("animated", this.inAnimationName);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.item.element.classList.remove(this.inAnimationName);
      this.item.element.classList.add(this.outAnimationName);
      this.item.element.classList.add("hide");
    }
  }]);

  return Action;
}();

exports.default = Action;
},{}],"src/impresi/impresi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _background = _interopRequireDefault(require("./lib/background"));

var _heading = _interopRequireDefault(require("./lib/heading"));

var _blurb = _interopRequireDefault(require("./lib/blurb"));

var _group = _interopRequireDefault(require("./lib/group"));

var _action = _interopRequireDefault(require("./lib/action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impresi =
/*#__PURE__*/
function () {
  function Impresi(boardId, data) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Impresi);

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

  _createClass(Impresi, [{
    key: "init",
    value: function init() {
      this.getAnimationStyles();
      this.setListeners();
    }
  }, {
    key: "setListeners",
    value: function setListeners() {
      var that = this;

      document.body.onkeyup = function (e) {
        //keys: space, down, right or enter
        if (e.keyCode === 32 || e.keyCode === 40 || e.keyCode === 39 || e.keyCode === 13) {
          that.next();
        }
      };

      document.onclick = function () {
        that.next();
      };
    }
  }, {
    key: "getAnimationStyles",
    value: function getAnimationStyles() {
      var styleEl = document.createElement("style");
      styleEl.type = "text/css";
      styleEl.innerHTML = '@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");';
      this.board.appendChild(styleEl);
    }
  }, {
    key: "createBackground",
    value: function createBackground(options) {
      return new _background.default(this, options);
    }
  }, {
    key: "createHeading",
    value: function createHeading(text, options) {
      return new _heading.default(this, text, options);
    }
  }, {
    key: "createBlurb",
    value: function createBlurb(text, options) {
      return new _blurb.default(this, text, options);
    }
  }, {
    key: "addActions",
    value: function addActions(options) {
      if (options.out) {
        this.addGroup("out", options);
      }

      if (options.in) {
        this.addGroup("in", options);
      }

      return this;
    }
  }, {
    key: "addGroup",
    value: function addGroup(actionName, options) {
      var actions = [];
      options[actionName].forEach(function (item) {
        var action = new _action.default(item);
        actions.push(action);
      });
      var group = new _group.default(actionName, actions);
      this.groups.push(group);
    }
  }, {
    key: "next",
    value: function next() {
      var group = this.groups[this.index]; //if the group action is "out", stop the action

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
  }, {
    key: "start",
    value: function start() {
      if (!this.groups.length) {
        throw new Error("No groups of actions have been added yet.");
      }

      this.next();
    }
  }, {
    key: "increment",
    value: function increment() {
      if (this.index !== this.groups.length - 1) {
        this.index++;
      }
    }
  }, {
    key: "addResources",
    value: function addResources(data) {
      var _this = this;

      if (!data.resources) {
        throw new Error("No resources exist in the data.");
      }

      var items = [];
      data.resources.forEach(function (resource) {
        if (!resource.type) {
          throw new Error("All items must have a type.");
        }

        if (!resource.id) {
          throw new Error("All items must have an id.");
        }

        resource.options.id = resource.id;

        switch (resource.type) {
          case "background":
            items.push(_this.createBackground(resource.options));
            break;

          case "heading":
            items.push(_this.createHeading(resource.text, resource.options));
            break;

          case "blurb":
            items.push(_this.createBlurb(resource.text, resource.options));
            break;

          default:
            return;
        }
      });
      var actions = data.actions;
      actions.forEach(function (action) {
        for (var key in action) {
          if (action.hasOwnProperty(key)) {
            (function () {
              var actionsObj = {};
              actionsObj[key] = [];
              var itemIds = action[key];
              itemIds.forEach(function (itemId) {
                for (var _i = 0; _i < items.length; _i++) {
                  var item = items[_i];

                  if (item.id == itemId) {
                    actionsObj[key].push(item);
                    break;
                  }
                }
              });

              _this.addActions(actionsObj);
            })();
          }
        }
      });
    }
  }]);

  return Impresi;
}();

exports.default = Impresi;
},{"./lib/background":"src/impresi/lib/background.js","./lib/heading":"src/impresi/lib/heading.js","./lib/blurb":"src/impresi/lib/blurb.js","./lib/group":"src/impresi/lib/group.js","./lib/action":"src/impresi/lib/action.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _impresi = _interopRequireDefault(require("../src/impresi/impresi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var impresi;
var isCreateByConfig = true; //There are two ways to create slides, by config or by code. Below shows examples of both ways

if (isCreateByConfig) {
  createByConfig(impresi);
} else {
  createByCode(impresi);
}

function createByCode(impresi) {
  impresi = new _impresi.default("board"); //create resources

  var b1 = impresi.createBackground({
    imageUrl: "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/KoFb-cag.jpg"
  });
  var b1h1 = impresi.createHeading("Christchurch Art Gallery Website User Testing", {
    inAnimationName: "slideInUp",
    fontSize: 3
  });
  var b1b1 = impresi.createBlurb("Yoobee Web & UX Design Class of 2019", {
    inAnimationName: "slideInUp",
    width: 100,
    x: 10,
    y: 20
  });
  var b2 = impresi.createBackground({
    imageUrl: "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/u4o4-ux-testing.jpg"
  });
  var b2h1 = impresi.createHeading("Second heading", {
    inAnimationName: "slideInUp"
  });
  var b2b1 = impresi.createBlurb("This is a blurb for the second heading", {
    inAnimationName: "slideInUp",
    x: 50,
    y: 10
  });
  var b2b2 = impresi.createBlurb("This is another blurb for the second heading", {
    inAnimationName: "slideInUp",
    x: 50,
    y: 20
  });
  var b3 = impresi.createBackground({
    bgColor: "#ccc"
  });
  var b3h1 = impresi.createHeading("Thank you :)", {
    inAnimationName: "slideInUp",
    x: 37,
    y: 20
  }); //add actions

  impresi.addActions({
    "in": [b1, b1h1, b1b1]
  }).addActions({
    "out": [b1, b1h1, b1b1],
    "in": [b2, b2h1, b2b1]
  }).addActions({
    "in": [b2b2]
  }).addActions({
    "out": [b2, b2h1, b2b1, b2b2],
    "in": [b3, b3h1]
  });
  impresi.start();
}

function createByConfig(impresi) {
  var resources = {
    "resources": [{
      "id": "b1",
      "type": "background",
      "options": {
        "imageUrl": "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/KoFb-cag.jpg"
      }
    }, {
      "id": "b1h1",
      "type": "heading",
      "text": "Christchurch Art Gallery Website User Testing",
      "options": {
        "inAnimationName": "slideInUp",
        "fontSize": 3
      }
    }, {
      "id": "b1b1",
      "type": "blurb",
      "text": "Yoobee Web & UX Design Class of 2019",
      "options": {
        "inAnimationName": "slideInUp",
        "width": 100,
        "x": 10,
        "y": 20
      }
    }, {
      "id": "b2",
      "type": "background",
      "options": {
        "imageUrl": "https://uploads.codesandbox.io/uploads/user/fb7343ed-58b4-4220-b73d-9c46dd5128c4/u4o4-ux-testing.jpg"
      }
    }, {
      "id": "b2h1",
      "type": "heading",
      "text": "Second heading",
      "options": {
        "inAnimationName": "slideInUp"
      }
    }, {
      "id": "b2b1",
      "type": "blurb",
      "text": "This is a blurb for the second heading",
      "options": {
        "inAnimationName": "slideInUp",
        "x": 50,
        "y": 10
      }
    }, {
      "id": "b2b2",
      "type": "blurb",
      "text": "This is another blurb for the second heading",
      "options": {
        "inAnimationName": "slideInUp",
        "x": 50,
        "y": 20
      }
    }, {
      "id": "b3",
      "type": "background",
      "options": {
        "bgColor": "#ccc"
      }
    }, {
      "id": "b3h1",
      "type": "heading",
      "text": "Thank You :)",
      "options": {
        inAnimationName: "slideInUp",
        x: 37,
        y: 20
      }
    }],
    "actions": [{
      "in": ["b1", "b1h1", "b1b1"]
    }, {
      "out": ["b1", "b1h1", "b1b1"],
      "in": ["b2", "b2h1", "b2b1"]
    }, {
      "in": ["b2b2"]
    }, _defineProperty({
      "in": ["b2", "b2h1", "b2b1", "b2b2"]
    }, "in", ["b3", "b3h1"])]
  };
  impresi = new _impresi.default("board", resources);
  impresi.start();
}
},{"../src/impresi/impresi":"src/impresi/impresi.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53231" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map