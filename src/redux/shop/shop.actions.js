/* eslint-disable import/prefer-default-export */
import shopActionTypes from "./shop.actionTypes";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";

const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

const fetchCollectionsError = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errorMessage,
});

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionsRef = firestore.collection("collections");
    console.log(collectionsRef);

    collectionsRef
      .get()
      .then((snapshot) => {
        const transformedCollections = convertCollectionsSnapshotToMap(
          snapshot
        );
        dispatch(fetchCollectionsSuccess(transformedCollections));
      })
      .catch((err) => dispatch(fetchCollectionsError(err.message)));
  };
};
