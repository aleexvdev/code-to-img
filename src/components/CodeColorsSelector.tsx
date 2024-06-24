"use client";

import React, { useState } from 'react';
import { CODE_COLORS } from '@/lib/contants';
import { ChevronDown } from 'lucide-react';
import OutsideClickHandler from "react-outside-click-handler";

export const CodeColorsSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>(
    CODE_COLORS[0]
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="w-max">
        <div className="relative">
          <p className="text-white text-lg text-left mb-2">Code Colors</p>
          <button
            className="w-40 bg-[#191919] py-2 px-3 rounded-lg flex items-center justify-between gap-x-2 border border-white"
            onClick={toggleDropdown}
          >
            <span className="text-base text-white">{selectedTheme}</span>
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
          {showDropdown && (
            <div className="absolute w-40 top-20 mt-2">
              <ul className="border w-full rounded-lg p-2">
                {CODE_COLORS.map((theme) => (
                  <li
                    key={theme}
                    className="text-white/50 text-lg px-2 py-1 cursor-pointer hover:bg-[#191919] hover:text-white"
                    onClick={() => { setSelectedTheme(theme); setShowDropdown(false)}}
                  >
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  );
}
