import React, { useState, useEffect } from "react";
import { workSpaceBlock } from "./data";
import * as uuid from "uuid";

export default function MidArea(props) {
  console.log(workSpaceBlock, "block drop");

  const [getXaxis, setXaxis] = useState(0);

  const [getYaxis, setYaxis] = useState(0);

  //DELETING BLOCKS
  const removeElement = (e) => {
    console.log("double click", e.target.id);

    workSpaceBlock.map((obj) => {
      if (obj.id == `${e.target.id}`) {
        obj.isActive = false;
      }
    });

    var element = document.getElementById(e.target.id);
    element.parentNode.removeChild(element);
  };

  // MOVEING THE CATS
  const start = (e) => {
    let blockName = e.target.id.slice(0, 9);

    console.log("BLOCK CLICK IS:", e.target.id);

    console.log(e.target.id.includes("TurnRight15"));

    if (e.target.id.includes("whenClick")) {
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "whenClick");
    }
    if (e.target.id.includes("Move10")) {
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "Move10");
    }
    if (e.target.id.includes("TurnLeft15")) {
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "TurnLeft15");
    }

    if (e.target.id.includes("TurnRight15")) {
      console.log("here");
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "TurnRight15");
    }

    if (e.target.id.includes("sayHello")) {
      console.log("here");
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "sayHello");
    }

    if (e.target.id.includes("sayHello2Sec")) {
      console.log("here");
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "sayHello2Sec");
    }

    if (e.target.id.includes("thinkHmmm")) {
      console.log("here");
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "thinkHmmm");
    }

    if (e.target.id.includes("thinkHmmm2Sec")) {
      console.log("here");
      sessionStorage.setItem("isStart", true);
      props.sendData("runIt", "thinkHmmm2Sec");
    }

    // if (blockName == "whenClick") {
    //   console.log("whenClick ");

    //   console.log("workSpaceBlock DATA", workSpaceBlock);
    //   workSpaceBlock.filter((obj) => {
    //     if (obj.name == "whenClick" && obj.isActive == true) {
    //       console.log("FOUND");
    //       sessionStorage.setItem("isStart", true);
    //       props.sendData("runIt");
    //     }
    //   });
    // }
  };

  const drag = (ev) => {
    console.log("drag MIDArea");

    ev.dataTransfer.setData("workSpace", ev.target.id);
  };

  const allowDrop = (ev) => {
    console.log("allowDrop");

    setXaxis(ev.clientX);
    setYaxis(ev.clientY);

    ev.preventDefault();
  };

  const drop = (ev) => {
    console.log("drop MID");

    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");

    console.log("DROP ELEMENT ARE", data);
    console.log(document.getElementById(data));

    if (document.getElementById(data) !== null) {
      let nodeCopy = document.getElementById(data).cloneNode(true);

      let uuidData = uuid.v4();
      let uId = `${data}_workSpace`.concat(uuidData);

      // IMP
      nodeCopy.id = uId; /* We cannot use the same ID */

      workSpaceBlock.push({
        id: uId,
        name: `${data}`,
        isActive: true,
      });

      // DISPLAYING THE BLOCK IN X,Y axis
      nodeCopy.style.position = "absolute";
      nodeCopy.style.top = `${getYaxis}px`;
      nodeCopy.style.left = `${getXaxis}px`;
      nodeCopy.addEventListener("dragstart", drag);
      nodeCopy.addEventListener("dblclick", removeElement);
      nodeCopy.addEventListener("click", start);

      ev.target.appendChild(nodeCopy);
    } else {
      var data = ev.dataTransfer.getData("workSpace");
      let nodeCopy = document.getElementById(data);
      nodeCopy.style.position = "absolute";
      nodeCopy.style.top = `${getYaxis}px`;
      nodeCopy.style.left = `${getXaxis}px`;
      doccument.getElementById("myDrop").appendChild(nodeCopy);
    }
  };

  // const demoMethod = () => {
  //   props.sendData("runIt");
  // };
  // demoMethod();

  // useEffect(() => {
  //   // props.setAuthenticated(true);
  //   props.sendData("runIt");
  // }, []);

  return (
    <div
      id="myDrop"
      className="flex-1 h-full overflow-auto"
      onDrop={(event) => drop(event)}
      onDragOver={(event) => allowDrop(event)}
      style={{ userSelect: "none" }}
    >
      MID area <br />
      <ul>
        <li>
          <span style={{ color: "red" }}> DUBBLE CLICK </span> delete the blocks
        </li>

        <li>
          <span style={{ color: "red" }}>SINGLE CLICK</span> move Cat
        </li>
      </ul>
    </div>
  );
}
