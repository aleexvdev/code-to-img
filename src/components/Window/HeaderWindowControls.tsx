"use client";

import { RootState } from "@/store/store";
import { Bolt, Check, X } from "lucide-react";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import { setShowAccent } from "@/store/features/editorSlice";
import { CardMacOSColorControls, CardMacOSGrayControls, CardMacOSOutlineControls, CardWindowControls, MiniCardMacOSColor, MiniCardMacOSGray, MiniCardMacOSOutline, MiniCardWindow } from "./Cards";

export const HeaderWindowControls = () => {
  const dispatch = useDispatch();
  const showAccentValue = useSelector(
    (state: RootState) => state.editorReducer.showAccent
  );
  const headerStyle = useSelector(
    (state: RootState) => state.editorReducer.headerWindowControls
  );

  const [showPopPup, setShowPopPup] = useState<boolean>(false);

  const togglePopPup = () => {
    setShowPopPup(!showPopPup);
  };

  const handleShowAccent = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setShowAccent(evt.target.checked));
  };

  const selectedHeaderStyle = () => {
    switch (headerStyle) {
      case "macOS - Color":
        return <MiniCardMacOSColor />;
      case "macOS - Gray":
        return <MiniCardMacOSGray />;
      case "macOS - Outline":
        return <MiniCardMacOSOutline />;
      default:
        return <MiniCardWindow />;
    }
  };

  return (
    <div
      className="relative grid w-full py-1 gap-x-2"
      style={{
        gridTemplateRows: "auto",
      }}
    >
      <div className="h-[30px] inline-flex pl-4 items-center select-none hyphens-auto break-words w-full">
        <span className="text-[#CCCCCC] text-xs text-left">Window Style</span>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => setShowPopPup(false)}
        display="contents"
      >
        <div className="w-full h-full flex col-start-1 -col-end-1 pl-3 py-2">
          <div className="flex flex-col gap-3 flex-1 h-full">
            <button
              className=" inline-flex items-center justify-between py-1.5 px-2 outline-none w-full 
              appearance-none border border-transparent bg-[#232323] gap-3
              rounded-lg h-auto"
              onClick={togglePopPup}
            >
              {selectedHeaderStyle()}
              <Bolt size={20} color="white" />
            </button>
          </div>
        </div>
        {showPopPup && (
          <div className="absolute right-0 bottom-16 min-w-max w-full z-50 bg-[#212121] rounded-md p-2 shadow-md shadow-black">
            <div className="p-2 w-full">
              <div className="w-full flex items-center justify-between">
                <p className="text-sm text-white">Window Style</p>
                <button
                  className="flex items-center justify-center rounded-lg hover:bg-[#151516] p-1 bg-[#0c0c0c] transition-colors"
                  onClick={() => setShowPopPup(false)}
                >
                  <X size={16} color="white" />
                </button>
              </div>
              <div className="mt-4 mb-2 flex flex-col items-center justify-center text-white bg-[#212121] rounded-lg p-1">
                <CardWindowControls />
                <CardMacOSColorControls />
                <CardMacOSGrayControls />
                <CardMacOSOutlineControls />
                <div className="mt-5 w-full">
                  <div className="w-full flex items-center relative">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={showAccentValue}
                        onChange={handleShowAccent}
                        className="appearance-none h-4 w-4 border border-[#404040] rounded-sm bg-[#303030] checked:bg-[#0072F5] checked:border-transparent focus:outline-none focus:ring-1 focus:ring-[#303030]"
                      />
                      <span className="ml-2 text-white text-xs">Show tab accent</span>
                    </label>
                    {showAccentValue && (
                      <Check
                        size={16}
                        color="white"
                        style={{ pointerEvents: "none" }}
                        className="absolute left-1 bg-transparent"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};
