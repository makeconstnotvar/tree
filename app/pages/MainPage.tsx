import * as React from "react";
import {Component} from "react";
import {BrunchCom} from "../components/BrunchCom";
import {ILevelsTree, LevelsTree} from "../entities/tree";
import {LeafCom} from "../components/LeafCom";
import {Tree} from "../components/Tree";
import {Helmet} from "react-helmet";

interface IMainPageState {
  tree: ILevelsTree
}

class MainPage extends Component<any, IMainPageState> {
  state = {
    tree: new LevelsTree()
  }

  addLeaf = (parentId) => {
    let {tree} = this.state;
    this.setState({tree: tree.addComponent(parentId)})
  }

  delLeaf = (leafId) => {
    let {tree} = this.state;
    this.setState({tree: tree.delComponent(leafId)})
  }

  addBrunch = (parentId) => {
    let {tree} = this.state;
    this.setState({tree: tree.addLevel(parentId)})
  }

  delBrunch = (levelId) => {
    let {tree} = this.state;
    this.setState({tree: tree.delLevel(levelId)})
  }

  log = () => {
    console.log(this.state.tree);
  }

  render() {
    let {tree} = this.state;
    return (
      <div className="container">
        <Helmet title="Endless tree"/>
        <h1>Endless tree</h1>
        <Tree tree={tree}
              addComp={this.addLeaf}
              delComp={this.delLeaf}
              delLevel={this.delBrunch}
              addLevel={this.addBrunch}
              LeafComponent={LeafCom}
              BrunchComponent={BrunchCom}/>
        <div className="mb10">
          <span className="btn btn-grey" onClick={this.log}>Лог</span>
        </div>
      </div>
    );
  }
}

export {MainPage}