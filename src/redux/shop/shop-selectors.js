import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectIsCollectionFetching = createSelector(
  selectShop,
  (shop) => shop.isFetching
);

export const selectCollections = createSelector(
  selectShop,
  (shop) => shop.collections
);

export const isCollectionsLoaded = createSelector(
  selectCollections,
  (collections) => Object.keys(collections).length > 0
);
export const selectCollectionsForPreview = createSelector(
  selectCollections,
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionId) =>
  createSelector(selectCollections, (collections) => collections[collectionId])
);
