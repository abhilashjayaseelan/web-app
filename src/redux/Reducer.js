import { combineReducers } from "redux";
import adminAuthReducer from "../slices/AdminAuthSlice";
import fireReducer from "../slices/FirebseSlice";
import userReducer from "../slices/userSlicer";

const rootReducer = combineReducers({
  adminAuth: adminAuthReducer,
  firebase: fireReducer,
  user: userReducer
});

export default rootReducer;