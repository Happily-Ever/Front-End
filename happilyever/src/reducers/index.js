import { combineReducers } from "redux";
import { regReducer } from "./regReducer";
import { loginReducer } from "./loginReducer";
import { logoutReducer } from "./logoutReducer";
import { weddingReducer } from "./weddingReducer";
import { deletedWeddingReducer } from "./deleteWeddingReducer";

export default combineReducers({
  regReducer,
  loginReducer,
  logoutReducer,
  weddingReducer,
  deletedWeddingReducer
});
