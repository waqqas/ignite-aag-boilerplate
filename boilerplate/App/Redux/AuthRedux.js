import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginUser: ['email', 'password'],
  loginUserSuccess: ['user'],
  loginUserFailure: ['error'],
  logoutUser: null,
  logoutUserSuccess: ['response'],
  logoutUserFailure: ['response'],
  sendMagicLink: ['email'],
  sendMagicLinkSuccess: ['data'],
  sendMagicLinkFailure: ['error'],
  resetPassword: ['email'],
  resetPasswordSuccess: ['data'],
  resetPasswordFailure: ['error'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  loginUser: {
    fetching: null,
    error: null,
  },
  logoutUser: {
    fetching: null,
    error: null,
  },
  sendMagicLink: {
    fetching: null,
    error: null,
  },
  resetPassword: {
    fetching: null,
    error: null,
  },
  email: '',
});

/* ------------- Reducers ------------- */

export const loginUser = (state) => state.merge({loginUser: {fetching: true, error: null}});

export const loginUserSuccess = (state) => state.merge({loginUser: {fetching: false, error: null}});

export const loginUserFailure = (state, {error}) => state.merge({loginUser: {fetching: false, error}});

export const logoutUser = (state) => state.merge({logoutUser: {fetching: true, error: null}});

export const logoutUserSuccess = (state) => state.merge(INITIAL_STATE);

export const logoutUserFailure = (state, {error}) => state.merge({logoutUser: {fetching: false, error}});

export const sendMagicLink = (state, {email}) => state.merge({sendMagicLink: {fetching: true, error: null}, email});

export const sendMagicLinkSuccess = (state) => state.merge({sendMagicLink: {fetching: false, error: null}});

export const sendMagicLinkFailure = (state, {error}) => state.merge({sendMagicLink: {fetching: false, error}});

export const resetPassword = (state, {email}) => state.merge({resetPassword: {fetching: true, error: null}, email});

export const resetPasswordSuccess = (state) => state.merge({resetPassword: {fetching: false, error: null}});

export const resetPasswordFailure = (state, {error}) => state.merge({resetPassword: {fetching: false, error}});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER]: loginUser,
  [Types.LOGIN_USER_SUCCESS]: loginUserSuccess,
  [Types.LOGIN_USER_FAILURE]: loginUserFailure,
  [Types.LOGOUT_USER]: logoutUser,
  [Types.LOGOUT_USER_SUCCESS]: logoutUserSuccess,
  [Types.LOGOUT_USER_FAILURE]: logoutUserFailure,
  [Types.SEND_MAGIC_LINK]: sendMagicLink,
  [Types.SEND_MAGIC_LINK_SUCCESS]: sendMagicLinkSuccess,
  [Types.SEND_MAGIC_LINK_FAILURE]: sendMagicLinkFailure,
  [Types.RESET_PASSWORD]: resetPassword,
  [Types.RESET_PASSWORD_SUCCESS]: resetPasswordSuccess,
  [Types.RESET_PASSWORD_FAILURE]: resetPasswordFailure,
});


export const getLoginUserAuthError = (state) => state.auth.loginUser.error
export const getLoginUserFetching = (state) => state.auth.loginUser.fetching
export const getSendMagicLinkAuthError = (state) => state.auth.sendMagicLink.error
export const getSendMagicLinkFetching = (state) => state.auth.sendMagicLink.fetching
export const getResetPasswordAuthError = (state) => state.auth.resetPassword.error
export const getResetPasswordFetching = (state) => state.auth.resetPassword.fetching
export const getAuthEmail = (state) => state.auth.email