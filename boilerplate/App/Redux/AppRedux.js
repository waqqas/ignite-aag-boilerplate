import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  loginUserSuccess: ['user'],
  logoutUserSuccess: ['response'],
  startApp: null,
  stopApp: null,
  getSettingsSuccess: ['data'],
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  connectionType: 'unknown',
  user: null,
  settings: null
});

/* ------------- Reducers ------------- */

export const loginUserSuccess = (state, {user}) => state.merge({user});

export const logoutUserSuccess = (state) => state.merge(INITIAL_STATE);

export const getSettingsSuccess = (state, {data}) => state.merge({settings: data.data});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_USER_SUCCESS]: loginUserSuccess,
  [Types.LOGOUT_USER_SUCCESS]: logoutUserSuccess,
  [Types.GET_SETTINGS_SUCCESS]: getSettingsSuccess,
});

/* ------------- Selectors ------------- */

export const getUser = (state) => state.app.user

export const getUserSettings = (state) => (state.app.settings)
export const getAvailableLocations = (state) => (state.app.settings ? state.app.settings.company_info.available_location : [])
export const getCurrentLocation = (state) => (state.app.settings ? state.app.settings.company_info.my_location : null)
export const getShippingAddress = (state) => (state.app.settings ? state.app.settings.shipping_address : null)
