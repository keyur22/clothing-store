import { cartActionTypes } from "./cart-actionTypes";

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const toggleCartDropdown1 = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});
