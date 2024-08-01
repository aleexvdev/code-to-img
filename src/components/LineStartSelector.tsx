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
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Line start</p>
        <div className="w-40 text-[#CCCCCC]">
          <div className="w-full flex items-center justify-between px-2 py-2 gap-2 bg-[#232323] rounded-lg">
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
