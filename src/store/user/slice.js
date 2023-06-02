import { createSlice } from "@reduxjs/toolkit";
import User from "../../../models/User";

const userSlice = createSlice({
  initialState: {
    data: null,
  },
  name: "user",
  reducers: {
    setUser: (state, action) => {
      const user = new User(
        action.payload.id,
        action.payload.name,
        action.payload.email,
        action.payload.orders
      );
      state.data = user;
      console.log("User set in Redux");
    },
    clearUser: (state) => {
      state.data = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
