import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataOfImages } from "../contants";

interface ImageDetails {
  _id: number;
  src: string;
  imageDelay: string;
  className: string;
}

interface CountryImages {
  text: string;
  allImages: ImageDetails[];
}

export interface CurrentCountryImagesState {
  [key: string]: CountryImages;
}

const initialState: CurrentCountryImagesState = {
  value: {
    text: "India",
    allImages: [
      {
        _id: 1,
        src: "/i1.avif",
        imageDelay: "500",
        className: "top-10 left-10 z-[1] rotate-12",
      },
      {
        _id: 2,
        src: "/i2.avif",
        imageDelay: "2000",
        className: "top-10 right-20 z-[4] -rotate-12",
      },
      {
        _id: 11,
        src: "/i8.avif",
        imageDelay: "3500",
        className: "top-10 right-80 z-[7] transform -translate-x-1/2 rotate-12",
      },
      {
        _id: 3,
        src: "/i3.avif",
        imageDelay: "1000",
        className:
          "top-10 left-1/2 transform z-[2] -translate-x-[100%] -rotate-12",
      },
      {
        _id: 4,
        src: "/i4.avif",
        imageDelay: "1500",
        className:
          "bottom-10 left-1/2 transform z-[3] -translate-x-[100%] rotate-12",
      },
      {
        _id: 5,
        src: "/i5.avif",
        imageDelay: "3000",
        className: "bottom-10 left-10 z-[6] -rotate-12",
      },
      {
        _id: 6,
        src: "/i6.avif",
        imageDelay: "2500",
        className: "bottom-10 right-20 z-[5] rotate-12",
      },
      {
        _id: 7,
        src: "/i7.avif",
        imageDelay: "4000",
        className:
          "bottom-10 right-80 z-[8] transform -translate-x-1/2 -rotate-12",
      },
      {
        _id: 8,
        src: "/i7.avif",
        imageDelay: "4500",
        className:
          "top-1/2 left-20 z-[9] transform translate-x-1/2 -translate-y-1/2",
      },
      {
        _id: 9,
        src: "/i5.avif",
        imageDelay: "5000",
        className:
          "top-1/2 left-1/2 z-[10] transform -translate-x-1/2 -translate-y-1/2",
      },
      {
        _id: 10,
        src: "/i8.avif",
        imageDelay: "5500",
        className:
          "top-1/2 z-[11] right-20 transform -translate-x-1/2 -translate-y-1/2",
      },
    ],
  },
};

const currentCountryImagesSlice = createSlice({
  name: "currentCountryImages",
  initialState,
  reducers: {
    changeCurrentCountryImages: (
      state,
      action: PayloadAction<{ value: string }>
    ) => {
      state.value = dataOfImages[action.payload.value.toLowerCase()];
    },
  },
});

export const { changeCurrentCountryImages } = currentCountryImagesSlice.actions;
export default currentCountryImagesSlice.reducer;