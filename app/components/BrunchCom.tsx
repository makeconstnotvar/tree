import * as React from "react";

const BrunchCom = props => {
  let {LeafComponent} = props;
  return (
    <div className="level-box ">
      <div className="level  mb10">
        <div className="flex-row mb10">
          <div className="mr10">Level</div>
          <div className="mr10">{props.id}</div>
          <div className="ml-auto">
            <span className="btn btn-grey" onClick={() => props.delLevel(props.id)}>Удалить</span>
          </div>
        </div>
        <div>
          {
            props.comps.map(comp => <LeafComponent key={comp.id} id={comp.id} remove={props.delComp}/>)
          }
        </div>
        <span className="btn btn-grey" onClick={() => props.addComp(props.id)}>+ Comp</span>
      </div>
      <div className="ml20 subs mb10">
        {
          props.levels.map(item => <BrunchCom key={item.id}
                                              levels={item.levels}
                                              id={item.id}
                                              comps={item.comps}
                                              addComp={props.addComp}
                                              delComp={props.delComp}
                                              delLevel={props.delLevel}
                                              addLevel={props.addLevel}
                                              LeafComponent={props.LeafComponent}/>)
        }
      </div>
      <span className="btn btn-grey" onClick={() => props.addLevel(props.id)}>&#8628; Sub Level</span>
    </div>
  )
}
export {BrunchCom}
