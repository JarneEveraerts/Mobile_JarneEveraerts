import { combineReducers } from "@reduxjs/toolkit";
import { uidReducer } from "./uId/slice";
import { cartReducer } from "./cart/slice";
import { userReducer } from "./user/slice";

const rootReducer = combineReducers({
  uid: uidReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
