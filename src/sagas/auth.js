import {
  fork,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from 'ducks/auth';

export function* fetchUser() {
  yield console.log('Hello World');
}

export function* watchFetchUser() {
  yield takeLatest(actions.FETCH, fetchUser);
}

export default function* rootSaga() {
  yield [
    fork(watchFetchUser)
  ];
}
