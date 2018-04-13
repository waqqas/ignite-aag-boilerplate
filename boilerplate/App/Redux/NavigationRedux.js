import AppNavigation from '../Navigation/AppNavigation'
import { NavigationActions } from 'react-navigation'

// eslint-no-prototype-builtins
function hasProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
// Gets the current route name
function getCurrentRouteName(nav) {
  if (!hasProp(nav, 'index') || !hasProp(nav, 'routes')) return nav.routeName;
  return getCurrentRouteName(nav.routes[nav.index]);
}

// Gets the destination route name
function getActionRouteName(action) {
  const hasNestedAction = Boolean(
    hasProp(action, 'action') && hasProp(action, 'type') && typeof action.action !== 'undefined',
  );

  const nestedActionWillNavigate = Boolean(hasNestedAction && action.action.type === NavigationActions.NAVIGATE);

  if (hasNestedAction && nestedActionWillNavigate) {
    return getCurrentRouteName(action.action);
  }

  return action.routeName;
}

const initialState = AppNavigation.router.getStateForAction(AppNavigation.router.getActionForPathAndParams('SplashScreen'));

export const reducer = (state = initialState, action) => {
  const { type } = action;

  // Return current state if no routes have changed
  if (type === NavigationActions.NAVIGATE) {
    const routeHasChanged = Boolean(getActionRouteName(action) !== getCurrentRouteName(state));
    if (!routeHasChanged) {
      return state;
    }
  }

  // Else return new navigation state or the current state
  return AppNavigation.router.getStateForAction(action, state) || state;
}
