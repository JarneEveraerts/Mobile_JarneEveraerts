import { createSlice } from "@reduxjs/toolkit";

const uidSlice = createSlice({
  initialState: {
    data: "",
  },
  name: "uid",
  reducers: {
    saveUid: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { saveUid } = uidSlice.actions;
export const uidReducer = uidSlice.reducer;
