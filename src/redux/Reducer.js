import { combineReducers } from "redux";
import counterReducer from "../slices/CounterSlicer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;