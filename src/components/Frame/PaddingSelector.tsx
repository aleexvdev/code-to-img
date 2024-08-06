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
    <div
      className="relative grid w-full py-1 gap-x-2"
      style={{
        gridTemplateColumns: "minmax(0, 1.25fr) repeat(2, minmax(0, 1fr))",
        gridTemplateRows: "auto",
      }}
    >
      <div className="h-[30px] inline-flex relative pl-4 items-center select-none hyphens-auto break-words">
        <span className="text-[#CCCCCC] text-xs text-left">Padding</span>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => setShowDropdown(false)}
        display="contents"
      >
        <div className="w-full h-full flex col-start-2 -col-end-1">
          <div className="flex flex-col gap-3 flex-1 h-full w-full">
            <button
              className="relative inline-flex items-center justify-between py-1 px-3 outline-none w-full 
              appearance-none border border-transparent bg-[#212121] 
              rounded-md h-full"
              onClick={toggleDropdown}
            >
              <span className="text-[#CCCCCC] text-xs">{selectedPadding}</span>
              <ChevronsUpDown size={15} color="white" />
            </button>
            {showDropdown && (
              <div className="absolute min-w-max w-[150px] z-50 top-10">
                <ul className="w-full bg-[#212121] rounded-md p-2 shadow-lg shadow-black overflow-auto flex flex-col gap-y-1 outline-none max-h-80">
                  {PADDINGS.map((padding) => (
                    <button
                      key={padding}
                      onClick={() => handlePaddingChange(padding)}
                      className="w-full text-sm p-1 text-white flex items-center justify-between hover:bg-[#404040] rounded-md"
                    >
                      {padding}
                      {padding === selectedPadding && (
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
};
