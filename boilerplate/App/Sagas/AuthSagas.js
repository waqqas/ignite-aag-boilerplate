import {call, cancelled, put, takeLatest, all} from 'redux-saga/effects';
import AuthActions, {AuthTypes} from '../Redux/AuthRedux';
import AppActions from '../Redux/AppRedux';
import {NavigationActions} from 'react-navigation';


const loginUser = function* (api, {email, password}) {
  const response = yield call(api.loginUser, email, password)
  if (response.ok) {
    yield put(AuthActions.loginUserSuccess(response.data.data))
  }
  else {
    yield put(AuthActions.loginUserFailure(response.data.error))
  }
};

const loginUserSuccess = function* (api, {user}) {
  api.setHeader('user-id', user.id)

  yield put(AppActions.startApp())

  // navigate to main screen
  const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({routeName: 'TabNav'})
    ]
  })
  yield put(resetAction)
};

const logoutUser = function* (api) {
  yield put(AuthActions.logoutUserSuccess({data: {success: true}}))
};

const logoutUserSuccess = function* (api) {
  api.setHeader('user-id', null)

  yield put(AppActions.stopApp())

  const resetAction = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({routeName: 'SplashScreen'}),
    ],
  });
  yield put(resetAction);
};

const resetPassword = function* (api, {email}) {
  const response = yield call(api.resetPassword, email)
  if (response.ok) {
    yield put(AuthActions.resetPasswordSuccess(response.data))
  }
  else {
    yield put(AuthActions.resetPasswordFailure(response.data.error))
  }
}

const sendMagicLink = function* (api, {email}) {
  const response = yield call(api.sendMagicLink, email)
  if (response.ok) {
    yield put(AuthActions.sendMagicLinkSuccess(response.data))
  }
  else {
    yield put(AuthActions.sendMagicLinkFailure(response.data.error))
  }
}


export default () => {
  function* watcher(api) {
    try {
      yield all([
        takeLatest(AuthTypes.LOGIN_USER, loginUser, api),
        takeLatest(AuthTypes.LOGIN_USER_SUCCESS, loginUserSuccess, api),
        takeLatest(AuthTypes.LOGOUT_USER, logoutUser, api),
        takeLatest(AuthTypes.LOGOUT_USER_SUCCESS, logoutUserSuccess, api),
        takeLatest(AuthTypes.SEND_MAGIC_LINK, sendMagicLink, api),
        takeLatest(AuthTypes.RESET_PASSWORD, resetPassword, api),
      ]);

    } finally {
      if (yield cancelled()) {
      }
    }
  }

  return {
    watcher,
  };
}
