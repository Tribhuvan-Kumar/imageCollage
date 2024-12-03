"use client";

import { dataOfImages } from "@/utils/contants";
import { AppDispatch, RootState } from "@/utils/store";
import Image from "next/image";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function AboveDiv() {
  const currentCountryImage = useTypedSelector(
    (state) => state.currentCountryImage.value
  );

  return (
    <div className="w-full h-full relative">
      {currentCountryImage.allImages.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={`px-2 pb-7 py-5 rounded-lg parent-custom bg-white absolute ${image.className}`}
          style={{
            animationDelay: `${image.imageDelay}ms`,
            animationFillMode: "forwards",
          }}
        >
          <Image
            src={image.src}
            alt="image"
            width={1000}
            height={1000}
            className={`w-[300px] h-[280px] object-cover rounded-lg img-custom`}
          />
        </div>
      ))}
    </div>
  );
}
