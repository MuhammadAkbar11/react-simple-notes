export const changePopup = (state, message = "opps", status = true) => {
  if (state.popUp === false) {
    return { ...state, popUp: status, errorMessage: message };
  } else {
    return { ...state, popUp: status, errorMessage: message };
  }
};

export const setLoading = (state, status) => {
  return {
    ...state,
    isLoading: status,
  };
};
