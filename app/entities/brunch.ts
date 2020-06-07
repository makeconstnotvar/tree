import {makeid} from "../utils/makeid";
import {ILeaf} from "./leaf";

interface IBrunch {
  id: string
  levels: IBrunch[]
  comps?: ILeaf[]
}

class Brunch implements IBrunch {
  public id: string;
  public levels: [];
  public comps: [];

  constructor() {
    this.id = makeid();
    this.levels = [];
    this.comps = [];
  }
}

export {Brunch, IBrunch}