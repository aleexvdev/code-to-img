"use client";

import { THEME_COLORS } from "@/lib/contants";
import { setTheme } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSelector = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: RootState) => state.editorReducer.theme
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCodeColorChange = (themecolor: string) => {
    dispatch(setTheme(themecolor));
    setShowDropdown(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="w-max">
        <div className="relative">
          <p className="text-white text-lg text-left mb-2">Theme Selector</p>
          <button
            className="w-40 bg-[#191919] py-2 px-3 rounded-lg flex items-center justify-between gap-x-2 border border-white/60"
            onClick={toggleDropdown}
          >
            <span
              className="rounded-lg w-full h-5"
              style={{ background: selectedTheme }}
            />
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
          {showDropdown && (
            <div className="absolute w-40 top-20 mt-2">
              <div className="border w-full bg-[#191919] rounded-lg p-2 flex flex-col items-start justify-start border-white/60">
                {THEME_COLORS.map((themecolor, index) => (
                  <div
                    key={index}
                    className="text-lg px-2 py-1 cursor-pointer hover:bg-[#191919] w-full"
                    onClick={() => handleCodeColorChange(themecolor)}
                  >
                    <div
                      className="rounded-lg w-full h-5"
                      style={{ background: themecolor }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  );
};
