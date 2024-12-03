import { configureStore } from "@reduxjs/toolkit";
import currentCountryReducer from "./features/currentCountrySlice";
import currentCountryImageReducer from "./features/currentCountryImagesSlice";

const store = configureStore({
  reducer: {
    currentCountry: currentCountryReducer,
    currentCountryImage: currentCountryImageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
