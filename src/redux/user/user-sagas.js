/* eslint-disable import/prefer-default-export */
import { takeLatest, call, put, all } from "redux-saga/effects";
import userActionTypes from "./user-actionTypes";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess,
} from "./user-actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

function* createUserAndSignIn(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    put(signInFailure(err));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(createUserAndSignIn, user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(createUserAndSignIn, user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* checkUserSession() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield call(createUserAndSignIn, user);
  } catch (err) {
    yield put(signInFailure(err));
  }
}

function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserSession);
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    put(signOutFailure(err));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess());
    yield createUserAndSignIn(user, { displayName });
  } catch (err) {
    yield put(signUpFailure(err));
  }
}

function* onSignupStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onSignupStart),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
