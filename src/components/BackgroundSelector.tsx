"use client";

import { BACKGROUNDS, COLORS } from "@/lib/contants";
import { setBackground } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { X } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";

export const BackgroundSelector = () => {
  const dispatch = useDispatch();
  const selectedBackground = useSelector(
    (state: RootState) => state.editorReducer.background
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [activeTabPallette, setActiveTabPallette] =
    useState<string>("gradient");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCodeColorChange = (background: string) => {
    dispatch(setBackground(background));
  };

  return (
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Background</p>
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
          <div className="relative w-full flex items-center text-[#CCCCCC]">
            <button
              className="w-40 bg-[#232323] text-sm rounded-lg flex items-center p-1.5"
              onClick={toggleDropdown}
            >
              <span
                className="rounded-md w-full h-5"
                style={{ background: selectedBackground }}
              />
            </button>
            {showDropdown && (
              <div className="absolute top-0 left-44 z-50 w-60 bg-[#212121] rounded-md p-2 shadow-lg shadow-black">
                <div className="p-2 w-full">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-white">Background Color</p>
                    <button 
                      className="flex items-center justify-center rounded-lg bg-black p-1 hover:bg-[#202020] transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="mt-3 mb-2 flex items-center justify-center text-white bg-[#232323] rounded-lg p-1">
                    <button
                      className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${
                        activeTabPallette == "gradient"
                          ? "bg-[#404040]"
                          : "bg-none"
                      } rounded-md`}
                      onClick={() => setActiveTabPallette("gradient")}
                    >
                      Gradient
                    </button>
                    <button
                      className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${
                        activeTabPallette == "color"
                          ? "bg-[#404040]"
                          : "bg-none"
                      } rounded-md`}
                      onClick={() => setActiveTabPallette("color")}
                    >
                      Color
                    </button>
                  </div>
                  <div className="w-full bg-[#232323] py-1 px-2 rounded-lg">
                    <input
                      type="text"
                      className="w-full rounded-lg bg-[#232323] outline-none text-xs"
                      value={selectedBackground}
                    />
                  </div>
                  <div className="w-full grid grid-cols-4 gap-4 mt-6 mb-3">
                    {activeTabPallette == "gradient"
                      ? BACKGROUNDS.map((background, index) => (
                          <div
                            key={index}
                            className="cursor-pointer rounded-full w-max"
                            onClick={() => handleCodeColorChange(background)}
                          >
                            <div
                              className="w-10 h-10 rounded-full"
                              style={{ background: background }}
                            />
                          </div>
                        ))
                      : COLORS.map((color, index) => (
                          <div
                            key={index}
                            className="cursor-pointer rounded-full w-max"
                            onClick={() => handleCodeColorChange(color)}
                          >
                            <div
                              className="rounded-full w-10 h-10"
                              style={{ background: color }}
                            />
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};
