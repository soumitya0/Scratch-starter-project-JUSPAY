import React from "react";
import CatSprite from "./CatSprite";

import { workSpaceBlock } from "./data";

export default function PreviewArea(props) {
  console.log("child2", props.data);
  console.log("data", workSpaceBlock);

  const display = () => {
    return <h1>soumitya </h1>;
    // workSpaceBlock.map((val, idex) => <h1>a</h1>);
  };

  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      {/* {props.data =="WORKING" ?  } */}

      <CatSprite
        top="80"
        data={props.data}
        blockClickType={props.blockClickType}
      />

      {/* {props.data == "WORKING" ? (
        // display()
        workSpaceBlock.map((val, idex) => <h1>a</h1>)
      ) : (
        // <CatSprite top="80" data={props.data} />
        <h1>ss</h1>
      )} */}
    </div>
  );
}
