import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentCountryState {
  value: string;
}

const initialState: CurrentCountryState = {
  value: "India",
};

const currentCountrySlice = createSlice({
  name: "currentCountry",
  initialState,
  reducers: {
    changeCurrentCountry: (state, action: PayloadAction<{ value: string }>) => {
      state.value = action.payload.value;
    },
  },
});

export const { changeCurrentCountry } = currentCountrySlice.actions;
export default currentCountrySlice.reducer;
