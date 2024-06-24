"use client";

import React, { useState } from 'react';
import { CODE_COLORS } from '@/lib/contants';
import { ChevronDown } from 'lucide-react';
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setCodeColor } from '@/store/features/editorSlice';

export const CodeColorSelector = () => {

  const dispatch = useDispatch();
  const selectedCodeColor = useSelector((state: RootState) => state.editorReducer.codecolor);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCodeColorChange = (codecolor: string) => {
    dispatch(setCodeColor(codecolor));
    setShowDropdown(false);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="w-max">
        <div className="relative">
          <p className="text-white text-lg text-left mb-2">Code Colors</p>
          <button
            className="w-40 bg-[#191919] py-2 px-3 rounded-lg flex items-center justify-between gap-x-2 border border-white"
            onClick={toggleDropdown}
          >
            <span className="text-base text-white">{selectedCodeColor}</span>
            <ChevronDown className="w-6 h-6 text-white" />
          </button>
          {showDropdown && (
            <div className="bg-[#191919] absolute w-40 top-20 mt-2">
              <div className="border w-full rounded-lg p-2 flex flex-col items-start justify-start">
                {CODE_COLORS.map((codecolor) => (
                  <button
                    key={codecolor}
                    className="text-white/50 text-lg px-2 py-1 cursor-pointer hover:bg-[#191919] hover:text-white"
                    onClick={() => handleCodeColorChange(codecolor)}
                  >
                    {codecolor}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </OutsideClickHandler>
  );
}
