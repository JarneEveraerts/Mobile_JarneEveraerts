import { combineReducers } from "@reduxjs/toolkit";
import { uidReducer } from "./uId/slice";

const rootReducer = combineReducers({
  uid: uidReducer,
});

export default rootReducer;
