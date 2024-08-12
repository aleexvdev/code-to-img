"use client";

import Link from "next/link";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import {
  Check,
  Computer,
  Copy,
  Download,
  Image as ImgLucide,
  Keyboard,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { SCALES, THEMES_APP } from "@/lib/contants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setScale } from "@/store/features/editorSlice";
import OutsideClickHandler from "react-outside-click-handler";
import { setThemeApp } from "@/store/features/themeSlice";
import { motion } from "framer-motion";

export const Navbar = () => {
  const dispatch = useDispatch();
  const selectedScale = useSelector(
    (state: RootState) => state.editorReducer.scale
  );
  const selectedThemeApp = useSelector(
    (state: RootState) => state.themeAppReducer
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isDropdownOpenTheme, setIsDropdownOpenTheme] =
    useState<boolean>(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleScaleChange = (scale: string) => {
    dispatch(setScale(scale));
  };

  const handleDropdownToggleTheme = () => {
    setIsDropdownOpenTheme(!isDropdownOpenTheme);
  };

  const handleThemeChange = (themeApp: string) => {
    dispatch(setThemeApp(themeApp));
    setIsDropdownOpenTheme(false);
  };

  return (
    <>
      <nav className="w-full px-4 h-20 bg-[#181818]">
        <MaxWidthWrapper>
          <div className="w-full h-full flex items-center justify-between">
            <OutsideClickHandler
              onOutsideClick={() => setIsDropdownOpenTheme(false)}
            >
              <div className="relative font-semibold text-2xl w-64 flex items-center justify-between">
                <Link href="/" className="text-white">
                  Co<span className="text-blue-400">deSh</span>
                  <span className="text-blue-500">ot</span>
                </Link>
                <motion.button
                  className="mr-2.5 border border-[#5757573b] flex items-center justify-center p-2 rounded-md hover:bg-[#232323] hover:text-white hover:shadow-md hover:shadow-[#1D1D1D]"
                  onClick={handleDropdownToggleTheme}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {selectedThemeApp.themeApp === "system" && (
                    <Computer size={20} color="white" />
                  )}
                  {selectedThemeApp.themeApp === "dark" && (
                    <Moon size={20} color="white" />
                  )}
                  {selectedThemeApp.themeApp === "light" && (
                    <Sun size={20} color="white" />
                  )}
                </motion.button>
                {isDropdownOpenTheme && (
                  <motion.div
                    className="absolute top-11 right-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full flex flex-col items-center px-1 py-1 bg-[#232323] text-[#CCCCCC] rounded-lg shadow-lg shadow-black">
                      {THEMES_APP.map((theme) => (
                        <motion.button
                          key={theme}
                          className={`h-full flex items-center justify-center py-2 px-3 w-full rounded-md text-xs capitalize ${
                            selectedThemeApp.themeApp === theme
                              ? "bg-[#404040]"
                              : ""
                          }`}
                          onClick={() => handleThemeChange(theme)}
                        >
                          {theme}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </OutsideClickHandler>
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
