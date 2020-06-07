import * as React from "react";

const LeafCom = props => {
  return (
    <div className="comp flex-row mb10">
      <div className="mr10">Component</div>
      <div className="mr10">{props.id}</div>
      <div className="ml-auto">
        <span className="btn btn-red " onClick={() => props.remove(props.id)}>&times;</span>
      </div>
    </div>
  )
}

export {LeafCom}