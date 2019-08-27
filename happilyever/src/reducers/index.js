import { combineReducers } from "redux";
import { regReducer } from "./regReducer";
import { loginReducer } from "./loginReducer";
import { logoutReducer } from "./logoutReducer";

export default combineReducers({
  regReducer,
  loginReducer,
  logoutReducer
});
