import ReduxActionTypes from "./Redux.actionTypes";

export const _ChangePopup = (text, status) => dispatch => {
  return dispatch({
    type: ReduxActionTypes.SHOW_POPUP,
    value: { text: text, status: status },
  });
};

export const _SetLoading = status => dispatch => {
  return dispatch({
    type: ReduxActionTypes.SET_LOADING,
    value: { status: status },
  });
};
