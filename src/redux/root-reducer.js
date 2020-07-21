import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};

export default combineReducers(rootReducer);
