"use client";

import { changeCurrentCountryImages } from "@/utils/features/currentCountryImagesSlice";
import { changeCurrentCountry } from "@/utils/features/currentCountrySlice";
import { AppDispatch, RootState } from "@/utils/store";
import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypedDispatch = () => useDispatch<AppDispatch>();

export default function ToggleButton() {
  const currentCountry = useTypedSelector(
    (state) => state.currentCountry.value
  );
  const dispatch = useTypedDispatch();

  useEffect(() => {
    const i = setTimeout(() => {
      dispatch(changeCurrentCountryImages({ value: currentCountry }));
    }, 0);

    return () => clearTimeout(i);
  }, [currentCountry]);

  const handleCountryChange = () => {
    if (currentCountry.toLowerCase() === "india") {
      dispatch(changeCurrentCountry({ value: "Europe" }));
    } else {
      dispatch(changeCurrentCountry({ value: "India" }));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full mb-12">
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              onChange={handleCountryChange}
              id="toggleB"
              className="sr-only"
            />
            <div className="block bg-yellow-300 border border-black w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">{currentCountry}</div>
        </label>
      </div>
    </div>
  );
}
