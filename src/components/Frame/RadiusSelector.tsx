"use client";

import { RADIUS } from "@/lib/contants";
import { setRadius } from "@/store/features/editorSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export const RadiusSelector = () => {
  const dispatch = useDispatch();
  const selectedRadius = useSelector(
    (state: RootState) => state.editorReducer.radius
  );

  const handleRadiusChange = (radius: string) => {
    dispatch(setRadius(radius));
  };

  return (
    <div
      className="relative grid w-full py-1 gap-x-2"
      style={{
        gridTemplateColumns: "minmax(0, 1.25fr) repeat(2, minmax(0, 1fr))",
        gridTemplateRows: "auto",
      }}
    >
      <div className="h-[30px] inline-flex relative pl-4 items-center select-none hyphens-auto break-words">
        <span className="text-[#CCCCCC] text-xs text-left">Radius</span>
      </div>
      <div className="w-full h-full flex col-start-2 -col-end-1 text-[#CCCCCC]">
        <div className="flex gap-3 flex-1 h-full">
          <div className="w-full flex items-center px-1 py-1 bg-[#232323] rounded-lg">
            {RADIUS.map((item) => (
              <button
                key={item}
                className={`h-full flex items-center justify-center px-1 py-0 w-full rounded-md text-xs ${
                  selectedRadius === item.toString() ? "bg-[#404040]" : ""
                }`}
                onClick={() => handleRadiusChange(item.toString())}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
