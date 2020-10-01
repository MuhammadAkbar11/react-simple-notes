import React, { Fragment } from "react";

import FormsGroup from "components/molecules/FormsGroup";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";
import InputRef from "components/atoms/Input";

function FormAuth(props) {
  const { email, password } = props.form;
  return (
    <Fragment>
      <FormsGroup>
        <InputRef
          type="text"
          placeholder="Enter Your Email"
          name="email"
          onChange={props.handleInputChange}
          value={email || ""}
        />
      </FormsGroup>
      <FormsGroup className="mt-4">
        <InputRef
          placeholder="Enter Your Password"
          name="password"
          onChange={props.handleInputChange}
          value={password || ""}
        />
      </FormsGroup>

      <FormsGroup className="mt-4">
        <Button
          className={`tw-btn-indigo tw-btn-full flex justify-center`}
          onClick={props.submit}
          disabled={props.loading ? true : false}
        >
          {props.loading
            ? "Sending..."
            : !props.isLogin
            ? "Registration"
            : "Login"}
        </Button>
        <p className="text-sm mt-4 text-center">
          {!props.isLogin ? (
            <Fragment>
              Have account?{" "}
              <Link
                className="text-indigo-400 font-light hover:text-indigo-600"
                to="/login"
              >
                Login now!
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              You don't have account?{" "}
              <Link
                className="text-indigo-400 font-light hover:text-indigo-600"
                to="/registration"
              >
                Registration now!
              </Link>
            </Fragment>
          )}
        </p>
      </FormsGroup>
    </Fragment>
  );
}

export default FormAuth;
