import { combineReducers } from "redux";
import { regReducer } from "./regReducer";
import { loginReducer } from "./loginReducer";
import { logoutReducer } from "./logoutReducer";
import { weddingReducer } from "./weddingReducer";
import { deletedWeddingReducer } from "./deleteWeddingReducer";
import { editWeddingReducer } from "./editWeddingReducer";
import { getWeddingToEdit } from "./getWeddingToEdit";

export default combineReducers({
  regReducer,
  loginReducer,
  logoutReducer,
  weddingReducer,
  deletedWeddingReducer,
  editWeddingReducer,
  getWeddingToEdit
});
