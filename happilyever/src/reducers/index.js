import { combineReducers } from "redux";
import { regReducer } from "./regReducer";
import { loginReducer } from "./loginReducer";

export default combineReducers({
  regReducer,
  loginReducer
});
