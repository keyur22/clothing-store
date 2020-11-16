/* eslint-disable import/prefer-default-export */
import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import shopActionTypes from "./shop-actionTypes";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop-actions";

function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection("collections");
    const snapshot = yield collectionsRef.get();
    const transformedCollections = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(transformedCollections));
  } catch (err) {
    yield put(fetchCollectionsError(err.message));
  }
}

function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
