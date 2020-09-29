import React, { Fragment } from "react";
import FormsGroup from "components/molecules/FormsGroup";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

function FormsLogin(props) {
  const { email, password } = props.form;

  return (
    <Fragment>
      <FormsGroup>
        <Input
          placeholder="Enter Your Email"
          name="email"
          onChange={props.handleInputChange}
          value={email}
        />
      </FormsGroup>
      <FormsGroup className="mt-4">
        <Input
          placeholder="Enter Your Password"
          name="password"
          onChange={props.handleInputChange}
          value={password}
        />
      </FormsGroup>
      <FormsGroup className="mt-4">
        <Button
          className={`tw-btn-indigo tw-btn-full flex justify-center ${
            props.loading ? " tw-btn-disabled cursor-not-allowed " : ""
          }`}
          onClick={props.submit}
        >
          {props.loading ? "Sending..." : "Login"}
        </Button>
        <p className="text-sm mt-4 text-center">
          Don't have account?{" "}
          <Link
            className="text-indigo-400 font-light hover:text-indigo-600"
            to="/register"
          >
            SignUp now!
          </Link>
        </p>
      </FormsGroup>
    </Fragment>
  );
}

export default FormsLogin;
