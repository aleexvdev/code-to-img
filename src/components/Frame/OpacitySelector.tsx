"use client";

import { setOpacity } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const OpacitySelector = () => {
  const dispatch = useDispatch();
  const rangeOpacity = useSelector(
    (state: RootState) => state.editorReducer.opacity
  );

  const handleOpacityChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setOpacity(evt.target.value));
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
        <span className="text-[#CCCCCC] text-xs text-left">Opacity</span>
      </div>
      <div className="w-full h-full flex col-start-2 -col-end-1 text-[#CCCCCC]">
        <div className="flex gap-3 flex-1 h-full">
          <div className="w-full flex items-center px-1 py-1 bg-transparent rounded-lg">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              className="w-full h-0.5 rounded-sm border-none outline-none text-xs"
              value={rangeOpacity}
              onChange={handleOpacityChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
