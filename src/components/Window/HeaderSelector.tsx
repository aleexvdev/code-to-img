"use client";

import React from "react";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderWindow } from "@/store/features/editorSlice";

export const HeaderSelector = () => {
  const dispatch = useDispatch();
  const headerWindowSelector = useSelector(
    (state: RootState) => state.editorReducer.headerWindow
  );

  const handleHeaderWindow = () => {
    dispatch(setHeaderWindow(!headerWindowSelector));
  };

  return (
    <div
      className="relative grid w-full py-1 gap-x-2"
      style={{
        gridTemplateColumns: "minmax(0, 1.25fr) repeat(2, minmax(0, 1fr))",
        gridTemplateRows: "auto",
      }}
    >
      <div className="h-[30px] inline-flex relative pl-4 items-center select-none hyphens-auto break-words">
        <span className="text-[#CCCCCC] text-xs text-left">Header</span>
      </div>
      <div className="w-full h-full flex col-start-2 -col-end-1 text-[#CCCCCC]">
        <div className="flex gap-3 flex-1 h-full">
          <div className="w-full flex items-center justify-between px-1 py-1 gap-2 bg-[#232323] rounded-lg">
            <button
              className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${
                headerWindowSelector ? "bg-[#404040]" : "bg-none"
              } rounded-md`}
              onClick={handleHeaderWindow}
            >
              Yes
            </button>
            <button
              className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${
                !headerWindowSelector ? "bg-[#404040]" : "bg-none"
              } rounded-md`}
              onClick={handleHeaderWindow}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
