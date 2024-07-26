"use client";

import { RADIUS } from "@/lib/contants";
import { setRadius } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RadiusSelector = () => {
  const dispatch = useDispatch();
  const selectedRadius = useSelector(
    (state: RootState) => state.editorReducer.radius
  );

  const handleRadiusChange = (radius: string) => {
    dispatch(setRadius(radius));
  };

  return (
    <div className="w-60 h-8">
      <div className="flex w-full gap-5 items-center h-8">
        <p className="text-[#CCCCCC] text-sm text-left mb-2">Radius</p>
        <div className="w-56 flex items-center text-[#CCCCCC]">
          <div className="w-full flex items-center px-1 py-1 bg-[#232323] rounded-lg">
            {RADIUS.map((item) => (
              <button
                key={item}
                className={`flex items-center justify-center px-1 w-full h-8 rounded-md text-sm ${
                  selectedRadius === item.toString() ? "bg-[#404040]" : ""
                } hover:bg-[#404040]`}
                onClick={() => handleRadiusChange(item.toString())}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
