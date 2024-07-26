"use client";

import { PADDINGS } from "@/lib/contants";
import { setPadding } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";

export const PaddingSelector = () => {
  const dispatch = useDispatch();
  const selectedPadding = useSelector(
    (state: RootState) => state.editorReducer.padding
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handlePaddingChange = (padding: string) => {
    dispatch(setPadding(padding));
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Padding</p>
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
          <div className="relative w-40 flex items-center text-[#CCCCCC]">
            <button
              className="w-full bg-[#232323] text-xs rounded-lg flex items-center justify-between px-3 py-2"
              onClick={toggleDropdown}
            >
              {selectedPadding}
              <ChevronsUpDown size={18} />
            </button>
            {showDropdown && (
              <ul className="absolute top-10 right-0 z-10 w-full bg-[#232323] rounded-md p-2 shadow-lg">
                {PADDINGS.map((padding) => (
                  <li
                    key={padding}
                    className="px-0 py-0 hover:bg-[#404040] rounded-md"
                  >
                    <button
                      onClick={() => handlePaddingChange(padding)}
                      className="w-full text-sm px-2 py-1 text-white flex items-center justify-between"
                    >
                      {padding}
                      {padding === selectedPadding && (
                        <Check size={18} className="mr-2" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );

  /* return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="w-max">
        <div className="relative">
          <p className="text-white text-lg text-left mb-2">Padding</p>

          <div className='w-full flex gap-3'>
            {
              PADDINGS.map((padding) => (
                <button
                  key={padding}
                  className={`rounded-md mr-2 text-lg px-2 py-1 cursor-pointer hover:bg-[#191919] hover:text-white ${
                    padding === selectedPadding? 'bg-[#404040] text-white' : 'text-white/30'
                  }`}
                  onClick={() => handlePaddingChange(padding)}
                >
                  {padding}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  ) */
};
