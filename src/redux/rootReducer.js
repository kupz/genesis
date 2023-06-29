import { combineReducers } from "@reduxjs/toolkit";
import pageReducer from "./pageSlice";
import modalReducer from './modalSlice'
const rootReducer = combineReducers({
  page: pageReducer,
  modal: modalReducer,
});

export default rootReducer;
