"use client";

import { setLineNumber } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const LineNumberSelector = () => {

  const dispatch = useDispatch();
  const lineNumberSelector = useSelector(
    (state: RootState)=> state.editorReducer.linenumber,
  );

  const handleIncrementLine = () => {
    dispatch(setLineNumber(!lineNumberSelector));
  };

  return (
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Line number</p>
        <div className="w-40 text-[#CCCCCC]">
          <div className="w-full flex items-center justify-between px-1 py-1 gap-2 bg-[#232323] rounded-lg">
            <button className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${lineNumberSelector ? 'bg-[#404040]' : 'bg-none'} rounded-md`} onClick={handleIncrementLine}>Show</button>
            <button className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${!lineNumberSelector ? 'bg-[#404040]' : 'bg-none'} rounded-md`} onClick={handleIncrementLine}>Hide</button>
          </div>
        </div>
      </div>
    </div>
  );
};
