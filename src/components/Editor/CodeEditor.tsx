"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const CodeEditor = () => {
  // const dispatch = useDispatch();s
  const editorState = useSelector((state: RootState) => state.editorReducer);

  return (
    <div className="w-full h-full text-white px-3 py-5">
      <div className="w-full h-full flex items-center justify-center bg-[#0F0F10] rounded-3xl p-5">
        <div
          className="border border-white w-full h-full"
          style={{
            padding: editorState.padding + "px",
            background: editorState.background,
            borderRadius: editorState.radius + "px",
          }}
        >
          <div className="w-full h-12 bg-black mb-5">
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
  );
};
