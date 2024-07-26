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
    <div className="w-full h-max">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#CCCCCC] text-xs text-left">Radius</p>
        <div className="w-40 text-[#CCCCCC]">
          <div className="w-full flex items-center px-1 py-1 bg-[#232323] rounded-lg">
            {RADIUS.map((item) => (
              <button
                key={item}
                className={`h-full flex items-center justify-center px-1 py-1 w-full rounded-md text-xs ${
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
