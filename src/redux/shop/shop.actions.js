/* eslint-disable import/prefer-default-export */
import shopActionTypes from "./shop.actionTypes";

export const updateCollections = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});
