import {makeid} from "../utils/makeid";

interface ILeaf {
  id: string;
}

class Leaf implements ILeaf {
  public id: string;

  constructor() {
    this.id = makeid();
  }
}

export {Leaf,ILeaf}