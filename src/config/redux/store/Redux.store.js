import { createStore } from "redux";
import ReduxReducer from "../reducer/Redux.reducers";

export const globalState = {
  popUp: false,
  username: "Akbar",
  errorMessage: "",
};

const ReduxStore = createStore(ReduxReducer);

export default ReduxStore;
