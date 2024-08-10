"use client";

import { setHeaderWindowControls, setTitleDocument } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { Minus, Square, X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface CardWindowProps {
  background: string;
}

export const CardWindowControls = () => {
  const dispatch = useDispatch();
  const HeaderWindowStyle = useSelector(
    (state: RootState) => state.editorReducer.headerWindowControls
  );
  const showAccentValue = useSelector(
    (state: RootState) => state.editorReducer.showAccent
  );

  const handleHeaderStyleChange = () => {
    dispatch(setHeaderWindowControls("Windows"));
  };

  return (
    <div
      className={`w-full p-2 rounded-xl bg-[#303030] border ${
        HeaderWindowStyle === "Windows"
          ? "border-blue-300"
          : "border-transparent"
      } mb-2`}
      onClick={handleHeaderStyleChange}
    >
      <div className="w-full py-1.5 rounded-lg bg-[#181818] flex items-center justify-between px-3 shadow-md shadow-black">
        <div className="max-w-20 bg-[#303030] rounded-md px-2 py-0 hover:bg-[#454545]">
          <span className="text-xs text-[#CCCCCC] select-none">Untitled</span>
        </div>
        <div className="w-full flex items-center justify-end gap-x-2">
          <Minus size={12} />
          <Square size={11} />
          <X size={13} />
        </div>
      </div>
    </div>
  );
};

export const CardWindowMain = ({ background }: CardWindowProps) => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state.editorReducer);

  const handleTitleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleDocument(parseInt(e.target.value)));
  };

  return (
    <div
      className="w-full py-3 bg-[#181818] flex items-center justify-start px-5"
      style={{
        borderTopLeftRadius: selector.radius + "px",
        borderTopRightRadius: selector.radius + "px",
      }}
    >
      <div className="w-max min-w-20 bg-[#303030] rounded-md px-2 py-0.5">
        <input
          type="text"
          className="outline-none w-full h-full text-sm py-1.5 text-[#CCCCCC] bg-[#303030] rounded-lg"
          value={selector.titleDocument}
          onChange={handleTitleDocumentChange}
        />
      </div>
      <div className="w-full flex items-center justify-end gap-x-2">
        <Minus size={15} color="white" />
        <Square size={15} color="white" />
        <X size={15} color="white" />
      </div>
    </div>
  );
};

export const MiniCardWindow = () => {
  return (
    <div className="w-full py-1 rounded-md bg-[#181818] flex items-center justify-between px-2 shadow-md shadow-black">
      <div className="max-w-20 bg-[#303030] rounded-md px-2 py-0">
        <span className="text-xs text-[#CCCCCC] select-none">Untitled</span>
      </div>
      <div className="w-full flex items-center justify-end gap-x-2">
        <Minus size={11} color="white" />
        <Square size={11} color="white" />
        <X size={13} color="white" />
      </div>
    </div>
  );
};
