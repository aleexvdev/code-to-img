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
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Opacity</p>
        <div className="w-40 text-[#CCCCCC] py-2">
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
