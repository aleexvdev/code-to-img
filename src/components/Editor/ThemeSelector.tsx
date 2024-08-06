"use client";

import { THEMES } from "@/lib/contants";
import { setTheme } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
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

  const handleThemeChange = (theme: string) => {
    dispatch(setTheme(theme));
    setShowDropdown(false);
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
        <span className="text-[#CCCCCC] text-xs text-left">Theme</span>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => setShowDropdown(false)}
        display="contents"
      >
        <div className="w-full h-full flex col-start-2 -col-end-1">
          <div className="flex flex-col gap-3 flex-1 h-full">
            <button
              className="relative inline-flex items-center justify-between py-1 px-3 outline-none w-full 
              appearance-none border border-transparent bg-[#212121] 
              rounded-md h-full"
              onClick={toggleDropdown}
            >
              <span className="text-[#CCCCCC] text-xs">{selectedTheme}</span>
              <ChevronsUpDown size={15} color="white" />
            </button>
            {showDropdown && (
              <div className="absolute top-10 min-w-max w-[150px] z-50 bg-[#232323] rounded-md p-2 shadow-lg shadow-black">
                {THEMES.map((theme) => (
                  <button
                    key={theme}
                    className="w-full text-sm p-1 text-white flex items-center justify-between hover:bg-[#404040] rounded-md"
                    onClick={() => handleThemeChange(theme)}
                  >
                    {theme}
                    {theme === selectedTheme && (
                      <Check size={18} className="mr-2" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
