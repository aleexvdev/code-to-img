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
  const handleLineStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLineStart(e.target.value));
  };

  return (
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Line start</p>
        <div className="w-40 text-[#CCCCCC]">
          <div className="w-full flex items-center justify-between px-2 py-1 gap-2 bg-[#232323] rounded-lg">
            <input 
              className="w-full px-1 outline-none bg-[#232323]" 
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
