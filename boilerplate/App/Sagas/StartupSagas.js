import {cancelled, put, takeLatest, select, all} from 'redux-saga/effects';
import StartupActions, {StartupTypes} from '../Redux/StartupRedux';
import AuthActions from '../Redux/AuthRedux';
import {getUser} from '../Redux/AppRedux';

const startup = function* (api) {
  yield put(StartupActions.startupSuccess());
};

const startupSuccess = function* (api) {
  const user = yield select((state) => getUser(state))

  if (user) {
    yield put(AuthActions.loginUserSuccess(user))
  }
};

export default () => {
  function* watcher(api) {
    try {
      yield all([
        takeLatest(StartupTypes.STARTUP, startup, api),
        takeLatest(StartupTypes.STARTUP_SUCCESS, startupSuccess, api),
      ])
    } finally {
      if (yield cancelled()) {
      }
    }
  }

  return {
    watcher,
  };
}
