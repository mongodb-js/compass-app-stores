import { combineReducers } from 'redux';
import errorMessage, {
  INITIAL_STATE as ERROR_MESSAGE_INITIAL_STATE
} from 'modules/instance/error-message';
import instance from 'modules/instance/instance';
import dataService from 'modules/instance/data-service';

import { RESET } from 'modules/instance/reset';
/**
 * The main reducer.
 */
const reducer = combineReducers({
  errorMessage,
  instance,
  dataService
});

/**
 * The root reducer.
 *
 * @param {Object} state - The state.
 * @param {Object} action - The action.
 *
 * @returns {Object} The new state.
 */
const rootReducer = (state, action) => {
  if (action.type === RESET) {
    return {
      ...state,
      errorMessage: ERROR_MESSAGE_INITIAL_STATE,
      instance: global.hadronApp.instance // TODO: reset??
    };
  }
  return reducer(state, action);
};

export default rootReducer;
