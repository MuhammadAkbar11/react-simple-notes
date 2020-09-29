import ReduxActionTypes from "../actions/Redux.actionTypes";
import * as Action from "config/redux/actions/Redux.actions";

import { globalState } from "../store/Redux.store";

const ReduxReducer = (state = globalState, action) => {
  if (action.type === ReduxActionTypes.SHOW_POPUP) {
    return Action.changePopup(state, action.value.text, action.value.status);
  }

  return state;
};

export default ReduxReducer;
