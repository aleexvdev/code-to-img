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
              <div className="absolute top-10 right-0 z-10 w-full bg-[#232323] rounded-md p-2 shadow-lg">
                {LANGUAGES.map((language) => (
                  <button
                    key={language}
                    className="w-full text-sm px-2 py-1 text-white flex items-center justify-between hover:bg-[#404040] rounded-md"
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
  );
};