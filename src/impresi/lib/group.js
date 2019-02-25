export default class Group {
  constructor(actionName, actions) {
    this.actionName = actionName;
    this.actions = actions;
  }

  run() {
    this.actions.forEach(action => {
      action.run();
    });
  }

  stop() {
    this.actions.forEach(action => {
      action.stop();
    });
  }
}
