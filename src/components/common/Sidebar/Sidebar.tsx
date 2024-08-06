"use client";

import React from "react";
import { MaxContentItem } from "../MaxContentItem";
import { PaddingSelector } from "@/components/Frame/PaddingSelector";
import { BackgroundSelector } from "@/components/Frame/BackgroundSelector";
import "@/styles/CustomScrollbar.css";
import { RadiusSelector } from "@/components/Frame/RadiusSelector";
import { OpacitySelector } from "@/components/Frame/OpacitySelector";
import { BorderSelector } from "@/components/Frame/BorderSelector";
import { Separator } from "../Separator";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { LanguageSelector } from "@/components/Editor/LanguageSelector";
import { ThemeSelector } from "@/components/Editor/ThemeSelector";
import { LineNumberSelector } from "@/components/Editor/LineNumberSelector";
import { LineStartSelector } from "@/components/Editor/LineStartSelector";
import { HeaderSelector } from "@/components/Window/HeaderSelector";
import { WatermarkSelector } from "@/components/Window/WatermarkSelector";
import { HeaderWindowControls } from "@/components/Window/HeaderWindowControls";
import { BackgroundWindow } from "@/components/Window/BackgroundWindow";

export const Sidebar = () => {
  const stateLineNumber = useSelector(
    (state: RootState) => state.editorReducer.linenumber
  );
  const stateHeaderWindow = useSelector(
    (state: RootState) => state.editorReducer.headerWindow
  );

  return (
    <div className="h-full max-h-full w-[280px] bg-[#181818] overflow-y-auto overflow-x-hidden flex-shrink-0 custom-scrollbar">
      <div className="ml-4 mb-5">
        <MaxContentItem title="Frame">
          <PaddingSelector />
          <RadiusSelector />
          <BackgroundSelector />
          <OpacitySelector />
          <BorderSelector />
        </MaxContentItem>
        <Separator />
        <MaxContentItem title="Editor">
          <LanguageSelector />
          <ThemeSelector />
          <LineNumberSelector />
          {stateLineNumber && <LineStartSelector />}
        </MaxContentItem>
        <Separator />
        <MaxContentItem title="Window">
          <BackgroundWindow />
          <HeaderSelector />
          {stateHeaderWindow && <HeaderWindowControls />}
          <WatermarkSelector />
        </MaxContentItem>
      </div>
    </div>
  );
};
