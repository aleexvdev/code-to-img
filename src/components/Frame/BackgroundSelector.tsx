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
  const [showPopPup, setShowPopPup] = useState<boolean>(false);
  const [activeTabPallette, setActiveTabPallette] =
    useState<string>("gradient");

  const togglePopPup = () => {
    setShowPopPup(!showPopPup);
  };

  const handleCodeColorChange = (background: string) => {
    dispatch(setBackground(background));
  };

  return (
    <div
      className="grid w-full py-1 gap-x-2 relative"
      style={{
        gridTemplateColumns: "minmax(0, 1.25fr) repeat(2, minmax(0, 1fr))",
        gridTemplateRows: "auto",
      }}
    >
      <div className="h-[30px] inline-flex pl-4 items-center select-none hyphens-auto break-words">
        <span className="text-[#CCCCCC] text-xs text-left">Background</span>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => setShowPopPup(false)}
        display="contents"
      >
        <div className="w-full h-full flex col-start-2 -col-end-1">
          <div className="flex flex-col gap-3 flex-1 h-full">
            <button
              className="inline-flex items-center justify-between py-1 px-1 outline-none w-full 
              appearance-none border border-transparent bg-[#232323] rounded-lg h-auto"
              onClick={togglePopPup}
            >
              <span
                className="rounded-md w-full h-5"
                style={{ background: selectedBackground }}
              />
            </button>
          </div>
        </div>
        {showPopPup && (
          <div className="absolute right-0 top-10 min-w-max w-full z-50 bg-[#212121] rounded-md p-2 shadow-md shadow-black">
            <div className="p-2 w-full">
              <div className="w-full flex items-center justify-between">
                <p className="text-sm text-white">Background Color</p>
                <button
                  className="flex items-center justify-center rounded-lg hover:bg-[#151516] p-1 bg-[#0c0c0c] transition-colors"
                  onClick={() => setShowPopPup(false)}
                >
                  <X size={16} color="white" />
                </button>
              </div>
              <div className="mt-3 mb-2 flex items-center justify-center text-white bg-[#2a2a2a] rounded-lg p-1">
                <button
                  className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${
                    activeTabPallette == "gradient" ? "bg-[#404040]" : "bg-none"
                  } rounded-md`}
                  onClick={() => setActiveTabPallette("gradient")}
                >
                  Gradient
                </button>
                <button
                  className={`w-1/2 flex items-center justify-center text-xs py-1 font-semibold ${
                    activeTabPallette == "color" ? "bg-[#404040]" : "bg-none"
                  } rounded-md`}
                  onClick={() => setActiveTabPallette("color")}
                >
                  Color
                </button>
              </div>
              <div className="w-full bg-[#2a2a2a] py-1 px-2 rounded-lg">
                <input
                  type="text"
                  className="w-full rounded-lg bg-[#2a2a2a] outline-none text-xs text-white"
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
      </OutsideClickHandler>
    </div>
  );
};
