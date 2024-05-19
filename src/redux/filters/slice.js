import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "", number: "" },
  reducers: {
    changeFilterName(state, action) {
      state.name = action.payload.toLowerCase();
    },
    changeFilterNumber(state, action) {
      state.number = action.payload.toLowerCase();
    },
  },
});

export default slice.reducer;
export const { changeFilterName, changeFilterNumber } = slice.actions;
