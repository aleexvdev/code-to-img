"use client";

import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardMacOSColorMain } from "../Window/Cards/CardMacOSColorControls";
import { CardWindowMain } from "../Window/Cards/CardWindowControls";
import { CardMacOSGrayMain } from "../Window/Cards/CardMacOSGrayControls";
import { CardMacOSOutlineMain } from "../Window/Cards/CardMacOSOutlineControls";

const windowControls = (value: string) => {
  switch (value) {
    case "macOS - Color":
      return <CardMacOSColorMain />;
    case "macOS - Gray":
      return <CardMacOSGrayMain />;
    case "macOS - Outline":
      return <CardMacOSOutlineMain />;
    default:
      return <CardWindowMain />;
  }
};

export const CodeEditor = () => {
  // const dispatch = useDispatch();
  const editorState = useSelector((state: RootState) => state.editorReducer);

  return (
    <div className="relative w-full h-full polka p-32">
      <div className="w-full h-full flex items-center justify-center">
        <div
          className="min-w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #252525 25%, transparent 0), linear-gradient(-45deg, #252525 25%, transparent 0), linear-gradient(45deg, transparent 75%, #252525 0), linear-gradient(-45deg, transparent 75%, #252525 0)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
          }}
        >
          <div
            className="min-w-full h-full p-8 relative"
            style={{
              width: editorState.width + "px",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: editorState.background,
                opacity: editorState.opacity + "%",
              }}
            />
            <div
              className="relative bg-[#1E1E1E] w-full h-full"
              style={{
                borderRadius: editorState.radius + "px",
              }}
            >
              {editorState.headerWindow &&
                windowControls(editorState.headerWindowControls)}
              <div className="text-white px-5 py-3">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
