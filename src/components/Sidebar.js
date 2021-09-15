import React from "react";
import Icon from "./Icon";

export default function Sidebar() {
  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>

      <div
        id="whenClick"
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        style={{ height: "28px", width: "100px" }}
        onDragStart={(event) => drag(event)}
      >
        {"When  "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>

      <div
        id={"spriteClick"}
        className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"When this sprite clicked"}
      </div>

      {/* MOTION */}
      <div className="font-bold"> {"Motion"} </div>
      <div
        id={"Move10"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"Move 10 steps"}
      </div>
      <div
        id={"TurnLeft15"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"Turn "}
        <Icon name="undo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>
      <div
        id={"TurnRight15"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"Turn "}
        <Icon name="redo" size={15} className="text-white mx-2" />
        {"15 degrees"}
      </div>

      {/* Look */}
      <div className="font-bold"> {"Look"} </div>
      <div
        style={{ background: "#9966FF" }}
        id={"sayHello"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"Say hello"}
      </div>

      <div
        style={{ background: "#9966FF" }}
        id={"sayHello2Sec"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"Say hello 2 second "}
      </div>

      <div
        style={{ background: "#9966FF" }}
        id={"thinkHmmm"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"think Hmmm"}
      </div>
      <div
        style={{ background: "#9966FF" }}
        id={"thinkHmmm2Sec"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"think Hmmm 2 second "}
      </div>

      {/* Control */}
      <div className="font-bold"> {"Control"} </div>
      <div
        id={"ifElseCase"}
        style={{ background: "#FFAB19" }}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"If Else"}
      </div>

      <div
        style={{ background: "#FFAB19" }}
        id={"wait1Sec"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"wait 1 second "}
      </div>

      <div
        style={{ background: "#FFAB19" }}
        id={"stopAll"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"stopAll"}
      </div>
      <div
        style={{ background: "#FFAB19" }}
        id={"ifCase"}
        className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        draggable="true"
        onDragStart={(event) => drag(event)}
      >
        {"if"}
      </div>
    </div>
  );
}
