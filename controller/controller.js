import Elem from "../view/Elem.js";

class Controller {
  constructor() {
    for (let index = 0; index < 9; index++) {
      new Elem(false);
    }
  }
}

export default Controller;
