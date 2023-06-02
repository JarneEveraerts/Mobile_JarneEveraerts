import { createSlice } from "@reduxjs/toolkit";
import User from "../../../models/User";

const userSlice = createSlice({
  initialState: {
    data: new User(),
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
    },
    clearUser: (state) => {
      state.data = null;
    },
    addUserOrder: (state, action) => {
      const order = action.payload;
      const orders = state.data.orders || []; // Initialize as empty array if undefined
      orders.push(order);
      state.data.orders = orders;
    },
  },
});

export const { setUser, clearUser, addUserOrder } = userSlice.actions;
export const userReducer = userSlice.reducer;
