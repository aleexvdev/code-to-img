"use client";

import { setLineStart } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const LineStartSelector = () => {
  const dispatch = useDispatch();
  const lineSelector = useSelector(
    (state: RootState) => state.editorReducer.linestart
  );
  const handleLineStartChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    if (parseInt(value) >= 1) {
      dispatch(setLineStart(value));
    }
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
        <span className="text-[#CCCCCC] text-xs text-left">Line start</span>
      </div>
      <div className="w-full h-full flex col-start-2 -col-end-1 text-[#CCCCCC]">
        <div className="flex gap-3 flex-1 h-full">
          <div className="w-full flex items-center px-1 py-1 bg-[#232323] rounded-lg">
            <input
              className="w-full px-1 outline-none bg-[#232323] text-xs [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              name=""
              id=""
              value={lineSelector}
              onChange={handleLineStartChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
