import { combineReducers } from "redux";
import adminAuthReducer from "../slices/AdminAuthSlice";
import fireReducer from "../slices/FirebseSlice";
import userReducer from "../slices/userSlicer";
import allUserReducer from "../slices/AllUser";

const rootReducer = combineReducers({
  adminAuth: adminAuthReducer,
  firebase: fireReducer,
  user: userReducer,
  allUsers: allUserReducer,
});

export default rootReducer;