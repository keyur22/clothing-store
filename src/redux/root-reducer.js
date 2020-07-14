import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";

const rootReducer = {
  user: userReducer,
};

export default combineReducers(rootReducer);
