/* eslint-disable import/prefer-default-export */
import { all, call, put, takeLatest } from "redux-saga/effects";

import userActionTypes from "../user/user-actionTypes";
import { resetCart } from "./cart-actions";

function* onResetCart() {
  yield put(resetCart());
}

function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, onResetCart);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
