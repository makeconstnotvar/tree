import {makeid} from "../utils/makeid";
import {ITreeOperations, treeOperations} from "../utils/treeOperations";
import {Leaf} from "./leaf";
import {IBrunch, Brunch} from "./brunch";

interface ILevelsTree {
  id: string;
  levels: IBrunch[];
  operations: ITreeOperations;
  addComponent(parentLevelId:string);
  delComponent(componentId:string);
  addLevel(parentLevelId:string);
  delLevel(parentLevelId:string);
}

class LevelsTree implements ILevelsTree, IBrunch {
  public id: string;
  public levels: IBrunch[];
  public operations: ITreeOperations;

  constructor() {
    this.id = makeid();
    this.levels = [new Brunch()];
  }


  addComponent(levelId) {
    this.operations.addLeaf(this.levels, levelId, new Leaf());
    return this;
  }

  delComponent(componentId) {
    this.operations.delLeaf(this.levels, componentId);
    return this;
  }

  addLevel(levelId) {
    this.operations.addBrunch(this, levelId, new Brunch());
    return this;
  }

  delLevel(levelId) {
    this.operations.delBrunch(this, levelId);
    return this;
  }
}

LevelsTree.prototype.operations = treeOperations

export {LevelsTree,ILevelsTree}