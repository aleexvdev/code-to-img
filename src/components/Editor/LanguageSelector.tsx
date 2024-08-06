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
              <div
                className="absolute min-w-max w-[150px] z-50 top-10"
              >
                <ul className="w-full bg-[#212121] rounded-md p-2 shadow-lg shadow-black overflow-auto z-50 flex flex-col gap-y-1 outline-none max-h-80">
                  {LANGUAGES.map((language) => (
                    <button
                      key={language}
                      onClick={() => handleLanguageChange(language)}
                      className="w-full text-sm p-1.5 text-white flex items-center justify-between hover:bg-[#404040] rounded-md"
                    >
                      {language}
                      {language === selectedLanguage && (
                        <Check size={18} className="mr-2" />
                      )}
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

  /* return (
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Language</p>
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
          <div className="relative w-40 flex items-center text-[#CCCCCC]">
            <button
              className="w-full bg-[#232323] text-xs rounded-lg flex items-center justify-between px-3 py-2"
              onClick={toggleDropdown}
            >
              {selectedLanguage}
              <ChevronsUpDown size={18} />
            </button>
            {showDropdown && (
              <div className="absolute top-10 right-0 z-10 w-full bg-[#232323] rounded-md p-2 shadow-lg shadow-black">
                {LANGUAGES.map((language) => (
                  <button
                    key={language}
                    className="w-full text-sm p-1 text-white flex items-center justify-between hover:bg-[#404040] rounded-md"
                    onClick={() => handleLanguageChange(language)}
                  >
                    {language}
                    {language === selectedLanguage && (
                      <Check size={18} className="mr-2" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  ); */
};
