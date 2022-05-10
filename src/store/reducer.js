import { combineReducers } from "redux";
import hotelsReducer from "./hotels.js";

export const reducer = combineReducers({
  hotels: hotelsReducer,
});
