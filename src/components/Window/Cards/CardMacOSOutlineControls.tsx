"use client";

import { setHeaderWindowControls } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const CardMacOSOutlineControls = () => {
  const dispatch = useDispatch();
  const HeaderWindowStyle = useSelector(
    (state: RootState) => state.editorReducer.headerWindowControls
  );

  const handleHeaderStyleChange = () => {
    dispatch(setHeaderWindowControls("macOS - Outline"));
  };

  return (
    <div
      className={`w-full p-2 rounded-xl bg-[#303030] border ${
        HeaderWindowStyle === "macOS - Outline" ? "border-blue-300" : "border-transparent"
      } mb-2`}
      onClick={handleHeaderStyleChange}
    >
      <div className="w-full py-1.5 rounded-lg bg-[#181818] flex items-center justify-start px-3">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-transparent rounded-full border-2 border-red-500"></span>
          <span className="w-3 h-3 bg-transparent rounded-full border-2 border-yellow-500"></span>
          <span className="w-3 h-3 bg-transparent rounded-full border-2 border-green-500"></span>
        </div>
        <div className="max-w-20 bg-[#303030] rounded-md px-2 py-0 ml-5 hover:bg-[#454545]">
          <span className="text-xs select-none text-[#CCCCCC]">Untitled</span>
        </div>
      </div>
    </div>
  );
};

export const MiniCardMacOSOutline = () => {
  return (
    <div className="w-full py-1 rounded-md bg-[#181818] flex items-center justify-start px-2 shadow-md shadow-black">
      <div className="flex items-center space-x-1">
        <span className="w-3 h-3 bg-transparent rounded-full border-2 border-red-500"></span>
        <span className="w-3 h-3 bg-transparent rounded-full border-2 border-yellow-500"></span>
        <span className="w-3 h-3 bg-transparent rounded-full border-2 border-green-500"></span>
      </div>
      <div className="max-w-20 bg-[#303030] rounded-md px-2 py-0 ml-4">
        <span className="text-xs text-[#CCCCCC] select-none">Untitled</span>
      </div>
    </div>
  );
};
