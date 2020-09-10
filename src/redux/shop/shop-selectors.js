import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

// eslint-disable-next-line import/prefer-default-export
export const selectCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);
