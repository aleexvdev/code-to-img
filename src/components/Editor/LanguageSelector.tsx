"use client";

import { LANGUAGES } from "@/lib/contants";
import { setLanguage } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";

export const LanguageSelector = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootState) => state.editorReducer.language
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language));
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
        <span className="text-[#CCCCCC] text-xs text-left">Language</span>
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
              <span className="text-[#CCCCCC] text-xs">{selectedLanguage}</span>
              <ChevronsUpDown size={15} color="white" />
            </button>
            {showDropdown && (
              <div className="absolute min-w-max w-[150px] z-50 top-10">
                <ul className="w-full bg-[#212121] rounded-md p-2 shadow-lg shadow-black overflow-auto z-50 flex flex-col gap-y-1 outline-none max-h-80">
                  {LANGUAGES.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageChange(language)}
                      className="flex items-center w-full p-0.5 text-[#CCCCCC]/50 hover:text-[#CCCCCC]"
                    >
                      <div className="w-4 h-4 flex items-center justify-center">
                        {language === selectedLanguage && (
                          <Check size={14} color="white" />
                        )}
                      </div>
                      <span
                        className={`ml-2 text-sm ${
                          language === selectedLanguage ? "text-[#CCCCCC]" : ""
                        }`}
                      >
                        {language}
                      </span>
                    </button>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
