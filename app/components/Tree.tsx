import * as React from "react";

const Tree = props => {
  let {BrunchComponent} = props;
  return (
    <div>
      {
        props.tree.levels.map(level => (
          <BrunchComponent key={level.id}
                           id={level.id}
                           levels={level.levels}
                           comps={level.comps}
                           addComp={props.addComp}
                           delComp={props.delComp}
                           delLevel={props.delLevel}
                           addLevel={props.addLevel}
                           LeafComponent={props.LeafComponent}/>
        ))
      }
      <div className="mb10 mt10">
        <span className="btn btn-grey" onClick={() => props.addLevel(props.tree.id)}>+ Level</span>
      </div>
    </div>
  )
}
export {Tree}