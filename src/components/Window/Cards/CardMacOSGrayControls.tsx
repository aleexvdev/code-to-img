"use client";

import { setHeaderWindowControls, setTitleDocument } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

interface CardMacOSGrayProps {
  background: string;
}

export const CardMacOSGrayControls = () => {
  const dispatch = useDispatch();
  const HeaderWindowStyle = useSelector(
    (state: RootState) => state.editorReducer.headerWindowControls
  );

  const handleHeaderStyleChange = () => {
    dispatch(setHeaderWindowControls("macOS - Gray"));
  };

  return (
    <div
      className={`w-full p-2 rounded-xl bg-[#303030] border ${
        HeaderWindowStyle === "macOS - Gray" ? "border-blue-300" : "border-transparent"
      } mb-2`}
      onClick={handleHeaderStyleChange}
    >
      <div className="w-full py-1.5 rounded-lg bg-[#181818] flex items-center justify-start px-3">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
        <div className="max-w-20 bg-[#303030] rounded-md px-2 py-0 ml-5 hover:bg-[#454545]">
          <span className="text-xs select-none text-[#CCCCCC]">Untitled</span>
        </div>
      </div>
    </div>
  );
};

export const CardMacOSGrayMain = ({ background }: CardMacOSGrayProps) => {
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
        background: `${selector.backgroundWindow ? '#181818' : background}`
      }}
    >
      <div className="flex items-center space-x-2">
          <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
          <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
      </div>
      <div className="w-max min-w-20 bg-[#303030] rounded-md px-2 py-0.5 ml-5">
        <input
          type="text"
          className="outline-none w-full h-full text-sm py-1.5 text-[#CCCCCC] bg-[#303030] rounded-lg"
          value={selector.titleDocument}
          onChange={handleTitleDocumentChange}
        />
      </div>
    </div>
  );
};

export const MiniCardMacOSGray = () => {
  return (
    <div className="w-full py-1 rounded-md bg-[#181818] flex items-center justify-start px-2 shadow-md shadow-black">
      <div className="flex items-center space-x-1">
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
      <div className="max-w-20 bg-[#303030] rounded-md px-2 py-0 ml-4">
        <span className="text-xs text-[#CCCCCC] select-none">Untitled</span>
      </div>
    </div>
  );
};
