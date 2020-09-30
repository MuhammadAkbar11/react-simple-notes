import { _ChangePopup, _SetLoading } from "./Redux.actions";
import firebase from "config/firebase/index.firebase";

export const _UserRegistrationAPI = data => dispatch => {
  dispatch(_SetLoading(true));
  const { email, password } = data;
  return new Promise((resolve, reject) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(result => {
          dispatch(_SetLoading(false));
          console.log(result);
          return resolve({
            type: "success",
            message: "Registration has been successfuly",
          });
        })
        .catch(err => {
          const errorCode = err.code;
          const errorMessage = err.message;
          dispatch(_SetLoading(false));
          dispatch(_ChangePopup(errorMessage, true));
          return reject({
            type: errorCode,
            message: errorMessage,
          });
        });
    } catch (error) {
      reject(error);
    }
  });
};
