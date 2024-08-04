"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const CodeEditor = () => {
  // const dispatch = useDispatch();
  const editorState = useSelector((state: RootState) => state.editorReducer);

  return (
    <div className="relative w-full h-full bg-[#0F0F10] flex items-center justify-center rounded-3xl p-5 z-10">
      <div
        className="absolute w-full h-full text-white px-3 py-5 z-20"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #252525 25%, transparent 0), linear-gradient(-45deg, #252525 25%, transparent 0), linear-gradient(45deg, transparent 75%, #252525 0), linear-gradient(-45deg, transparent 75%, #252525 0)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
          width: editorState.width + "px",
          height: editorState.height + "px",
          borderRadius: editorState.radius + "px",
        }}
      />
      <div
        className="absolute w-full h-full z-30"
        style={{
          background: editorState.background,
          borderRadius: editorState.radius + "px",
          opacity: editorState.opacity + "%",
          padding: editorState.padding + "px",
          width: editorState.width + "px",
          height: editorState.height + "px",
        }}
      />
      <div
        className="absolute w-full h-full flex flex-col rounded-lg bg-transparent shadow-md shadow-black p-10 z-50"
        style={{
          width: editorState.width + "px",
          height: editorState.height + "px",
          padding: editorState.padding + "px",
        }}
      >
        <div className="w-full h-full rounded-xl bg-[#000000b2] ">
          <div className="w-full flex items-center px-4 py-3 rounded-t-xl">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="w-full flex items-center justify-center text-center mr-12">
              <input
                type="text"
                value="Title"
                className="bg-transparent text-gray-200 text-center min-w-20"
              />
            </div>
          </div>
          <div
            className="w-full h-full text-white px-5 py-2"
          >
            hola mundo!!
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
<div className="w-full h-full text-white px-3 py-5">
      <div className="w-full h-full flex items-center justify-center bg-[#0F0F10] rounded-3xl p-5">
        <div
          className="border border-white w-full h-full relative"
          style={{
            padding: editorState.padding + "px",
            background: editorState.background,
            borderRadius: editorState.radius + "px",
            opacity: editorState.opacity + "%"
          }}
        >
          <div className="absolute w-full h-12 bg-black mb-5">
            <div className="w-full h-full flex items-center bg-gray-800 p-2">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <div className="flex-grow text-center">
                <input
                  type="text"
                  value="Title"
                  className="bg-transparent text-gray-200 text-center min-w-20"
                />
              </div>
            </div>
          </div>
          <div></div>
          Editor
        </div>
      </div>
    </div>
*/
