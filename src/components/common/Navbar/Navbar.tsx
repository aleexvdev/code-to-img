"use client";

import Link from "next/link";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { Copy, Download, Image as ImgLucide, Keyboard } from "lucide-react";
import { useState } from "react";
import { SCALES } from "@/lib/contants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setScale } from "@/store/features/editorSlice";
import OutsideClickHandler from "react-outside-click-handler";

export const Navbar = () => {
  const dispatch = useDispatch();
  const selectedScale = useSelector(
    (state: RootState) => state.editorReducer.scale
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScaleChange = (scale: string) => {
    dispatch(setScale(scale));
  };

  return (
    <>
      <nav className="w-full px-4 h-20 bg-[#181818]">
        <MaxWidthWrapper>
          <div className="w-full h-full flex items-center justify-between">
            <div className="font-semibold text-2xl">
              <Link href="/" className="text-white">
                Code<span className="text-blue-400">To</span>
                <span className="text-blue-500">Image</span>
              </Link>
            </div>
            <OutsideClickHandler
              onOutsideClick={() => setIsDropdownOpen(false)}
            >
              <div className="relative flex items-center justify-end gap-10">
                <div className="font-semibold text-sm">
                  <button className="flex items-center gap-2 rounded-lg py-2 px-3 hover:bg-[#404040] text-white transition-colors">
                    <Keyboard size={18} /> Shortcuts
                  </button>
                </div>
                <div className="font-semibold text-sm">
                  <button
                    className="flex items-center gap-3 bg-blue-800 rounded-lg py-2 px-5 text-white hover:bg-blue-700 transition-colors"
                    onClick={handleDropdownToggle}
                  >
                    <Download size={18} />
                    Export
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 min-w-52 bg-[#1D1D1D] rounded-lg shadow-lg z-30 shadow-black">
                      <div className="p-2 w-full">
                        <div className="w-full flex items-center justify-between gap-4 py-2 px-2">
                          <p className="text-[#CCCCCC] text-sm text-left">
                            Scale
                          </p>
                          <div className="w-full text-[#CCCCCC]">
                            <div className="w-full flex items-center px-1 py-1 bg-[#232323] rounded-lg">
                              {SCALES.map((scale) => (
                                <button
                                  key={scale}
                                  className={`h-full flex items-center justify-center px-1 py-1 w-full rounded-md text-xs 
                                    ${
                                      selectedScale === scale
                                        ? "bg-[#404040]"
                                        : ""
                                    }`}
                                  onClick={() => handleScaleChange(scale)}
                                >
                                  {scale}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm w-full">
                          <button className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-[#404040] text-[#CCCCCC] transition-colors w-full">
                            <ImgLucide size={18} /> Save PNG
                          </button>
                        </div>
                        <div className="text-sm w-full">
                          <button className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-[#404040] text-[#CCCCCC] transition-colors w-full">
                            <ImgLucide size={18} /> Save SVG
                          </button>
                        </div>
                        <div className="text-sm w-full">
                          <button className="flex items-center gap-2 rounded-md py-2 px-2 hover:bg-[#404040] text-[#CCCCCC] transition-colors w-full">
                            <Copy size={18} /> Copy Image
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </OutsideClickHandler>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
};
