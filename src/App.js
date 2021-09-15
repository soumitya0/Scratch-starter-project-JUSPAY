import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

var isData;
sessionStorage.setItem("isStart", false);

export default function App() {
  const [impData, setImpData] = useState("notRun");
  const [blockClickType, setblockClickType] = useState("");

  const getData = (val, val2) => {
    // debugger;
    isData = val;
    console.log(val, "PARENTS");

    console.log(val2, "PARENTS");
    setImpData("WORKING");
    setblockClickType(val2);
  };

  console.log(impData, "impDat");

  return (
    <div className="bg-blue-100 pt-6 font-sans" style={{ userSelect: "none" }}>
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar />

          <MidArea sendData={getData} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            left="150px"
            data={impData}
            blockClickType={blockClickType}
          />
        </div>
      </div>
    </div>
  );
}
