import { combineReducers } from "@reduxjs/toolkit";
import { uidReducer } from "./uId/slice";
import { cartReducer } from "./cart/slice";

const rootReducer = combineReducers({
  uid: uidReducer,
  cart: cartReducer,
});

export default rootReducer;
