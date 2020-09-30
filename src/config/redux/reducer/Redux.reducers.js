import ReduxActionTypes from "../actions/Redux.actionTypes";
import * as TypesReducer from "./TypesReducer";

import { globalState } from "../store/Redux.store";

const ReduxReducer = (state = globalState, action) => {
  if (action.type === ReduxActionTypes.SHOW_POPUP) {
    return TypesReducer.changePopup(
      state,
      action.value.text,
      action.value.status
    );
  }

  if (action.type === ReduxActionTypes.SET_LOADING) {
    return TypesReducer.setLoading(state, action.value.status);
  }

  return state;
};

export default ReduxReducer;
