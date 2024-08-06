"use client";

import { LanguageSelector } from "@/components/Editor/LanguageSelector";
import { PaddingSelector } from "@/components/Frame/PaddingSelector";
import { RadiusSelector } from "@/components/Frame/RadiusSelector";
import { BackgroundSelector } from "@/components/Frame/BackgroundSelector";
import { ThemeSelector } from "@/components/Editor/ThemeSelector";
import { LineNumberSelector } from "@/components/Editor/LineNumberSelector";
import { LineStartSelector } from "@/components/Editor/LineStartSelector";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { OpacitySelector } from "@/components/Frame/OpacitySelector";
import { BorderSelector } from "@/components/Frame/BorderSelector";
import { HeaderSelector } from "@/components/Window/HeaderSelector";
import { WatermarkSelector } from "@/components/Window/WatermarkSelector";
import { HeaderWindowStyle } from "@/components/Window/HeaderWindowStyle";

export const Sidebar2 = () => {
  const stateLineNumber = useSelector(
    (state: RootState) => state.editorReducer.linenumber
  );
  const stateHeaderWindow = useSelector(
    (state: RootState) => state.editorReducer.headerWindow
  );

  return (
    <div className="w-72 max-h-[90%] bg-[#121212] overflow-x-auto overflow-y-auto">
      <div className="w-full py-5 pl-4 flex flex-col items-center justify-center gap-5 z-0">
        <div className="w-full">
          <h1 className="text-white text-sm font-semibold">Frame</h1>
          <div className="w-full flex flex-col items-center justify-start gap-3 mt-4 pl-4">
            <PaddingSelector />
            <RadiusSelector />
            <BackgroundSelector />
            <OpacitySelector />
            <BorderSelector />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-white text-sm font-semibold">Editor</h1>
          <div className="w-full flex flex-col items-center justify-start gap-3 mt-4 pl-4">
            <LanguageSelector />
            <ThemeSelector />
            <LineNumberSelector />
            {stateLineNumber && <LineStartSelector />}
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-white text-sm font-semibold">Window</h1>
          <div className="w-full flex flex-col items-center justify-start gap-3 mt-4 pl-4">
            <HeaderSelector />
            {stateHeaderWindow && <HeaderWindowStyle />}
            <WatermarkSelector />
          </div>
        </div>
      </div>
    </div>
  );
};
