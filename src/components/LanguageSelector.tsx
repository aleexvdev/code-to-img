"use client";

import { LANGUAGES } from "@/lib/contants";
import { setLanguage } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";

export const LanguageSelector = () => {

  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state: RootState) => state.editorReducer.language);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleLanguageChange = (language: string) => {
    dispatch(setLanguage(language));
    setShowDropdown(false);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="w-max">
        <div className="relative">
          <p className="text-white text-lg text-left mb-2">Language</p>
          <button
            className="w-40 bg-[#191919] py-2 px-3 rounded-lg flex items-center justify-between gap-x-2 border border-white/60"
            onClick={toggleDropdown}
          >
            <span className="text-base text-white">{selectedLanguage}</span>
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
          {showDropdown && (
            <div className="bg-[#191919] absolute w-40 top-20 mt-2">
              <div className="border w-full rounded-lg p-2 flex flex-col items-start justify-start border-white/60">
                {LANGUAGES.map((language) => (
                  <button
                    key={language}
                    className="text-white/50 text-lg px-2 py-1 cursor-pointer hover:bg-[#191919] hover:text-white"
                    onClick={() => handleLanguageChange(language)}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  );
};
