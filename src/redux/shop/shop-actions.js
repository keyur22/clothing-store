import shopActionTypes from "./shop-actionTypes";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsError = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errorMessage,
});
