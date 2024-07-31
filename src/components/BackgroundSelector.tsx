"use client";

import { BACKGROUNDS } from "@/lib/contants";
import { setBackground } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";

export const BackgroundSelector = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: RootState) => state.editorReducer.background
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCodeColorChange = (background: string) => {
    dispatch(setBackground(background));
    setShowDropdown(false);
  };

  return (
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Background</p>
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
          <div className="relative w-40 flex items-center text-[#CCCCCC]">
            <button
              className="w-full bg-[#232323] text-sm rounded-lg flex items-center p-1.5"
              onClick={toggleDropdown}
            >
              <span
                className="rounded-md w-full h-5"
                style={{ background: selectedTheme }}
              />
            </button>
            {showDropdown && (
              <div className="absolute top-10 right-0 z-10 w-full bg-[#232323] rounded-md p-2 shadow-lg">
                {BACKGROUNDS.map((background, index) => (
                  <div
                    key={index}
                    className="text-lg px-2 py-1 cursor-pointer hover:bg-[#232323] w-full"
                    onClick={() => handleCodeColorChange(background)}
                  >
                    <div
                      className="rounded-lg w-full h-5"
                      style={{ background: background }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};
