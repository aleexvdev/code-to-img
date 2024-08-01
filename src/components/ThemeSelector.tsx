import { THEMES } from "@/lib/contants";
import { setTheme } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";

export const ThemeSelector = () => {
  const dispatch = useDispatch();
  const selectedTheme = useSelector(
    (state: RootState) => state.editorReducer.theme
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (theme: string) => {
    dispatch(setTheme(theme));
    setShowDropdown(false);
  };

  return (
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Theme</p>
        <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
          <div className="relative w-40 flex items-center text-[#CCCCCC]">
            <button
              className="w-full bg-[#232323] text-xs rounded-lg flex items-center justify-between px-3 py-2"
              onClick={toggleDropdown}
            >
              {selectedTheme}
              <ChevronsUpDown size={18} />
            </button>
            {showDropdown && (
              <div className="absolute top-10 right-0 z-10 w-full bg-[#232323] rounded-md p-2 shadow-lg shadow-black">
                {THEMES.map((theme) => (
                  <button
                    key={theme}
                    className="w-full text-sm p-1 text-white flex items-center justify-between hover:bg-[#404040] rounded-md"
                    onClick={() => handleThemeChange(theme)}
                  >
                    {theme}
                    {theme === selectedTheme && (
                      <Check size={18} className="mr-2" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};
