import {ILeaf} from "../entities/leaf";
import {IBrunch} from "../entities/brunch";

function addBrunch(tree: IBrunch, brunchId: string, brunch: IBrunch) {
  if (brunchId === tree.id)
    tree.levels.push(brunch)
  else
    tree.levels.forEach(level => {
      if (level.id === brunchId)
        level.levels.push(brunch)
      else
        return addBrunch(level, brunchId, brunch)
    })
  return tree;
}

function delBrunch(tree: IBrunch, levelId: string) {
  tree.levels.forEach((level, i, levels) => {
    if (level.id === levelId) {
      levels.splice(i, 1);

    }
    delBrunch(level, levelId);
  })
  return tree;
}

function addLeaf(levels: IBrunch[], levelId: string, leaf: ILeaf) {
  levels.forEach(level => {
    if (level.id === levelId)
      level.comps.push(leaf)
    else
      return addLeaf(level.levels, levelId, leaf)
  })
  return levels;
}

function delLeaf(levels: IBrunch[], compId: string) {
  levels.forEach(level => {
    if (level.comps.length) {
      let comps = level.comps.filter(comp => comp.id !== compId);
      level.comps = comps;
    }
    return delLeaf(level.levels, compId)
  })
  return levels;
}

interface ITreeOperations {
  addBrunch(tree: IBrunch, brunchId: string, brunch: IBrunch),

  delBrunch(tree: IBrunch, levelId: string),

  addLeaf(levels: IBrunch[], levelId: string, leaf: ILeaf),

  delLeaf(levels: IBrunch[], compId: string),
}

const treeOperations: ITreeOperations = {
  addBrunch,
  delBrunch,
  addLeaf,
  delLeaf,
}
export {treeOperations, ITreeOperations}