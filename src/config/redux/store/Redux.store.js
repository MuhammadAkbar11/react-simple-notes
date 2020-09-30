import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import ReduxReducer from "../reducer/Redux.reducers";

export const globalState = {
  popUp: false,
  username: "Guest",
  errorMessage: "",
  isLoading: false,
};

const ReduxStore = createStore(ReduxReducer, applyMiddleware(reduxThunk));

export default ReduxStore;
