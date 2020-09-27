import React, { Fragment } from "react";
import FormsGroup from "components/molecules/FormsGroup";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

function FormsRegister(props) {
  const { email, password1, password2 } = props.form;

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
          name="password1"
          onChange={props.handleInputChange}
          value={password1}
        />
      </FormsGroup>
      <FormsGroup className="mt-4">
        <Input
          placeholder="Repeat Your Password"
          name="password2"
          onChange={props.handleInputChange}
          value={password2}
        />
      </FormsGroup>
      <FormsGroup className="mt-4">
        <Button
          className={`tw-btn-indigo tw-btn-full flex justify-center ${
            props.loading ? " tw-btn-disabled cursor-not-allowed " : ""
          }`}
          onClick={props.submit}
        >
          {props.loading ? "Sending..." : "Registration"}
        </Button>
        <p className="text-sm mt-4 text-center">
          Have account?{" "}
          <Link
            className="text-indigo-400 font-light hover:text-indigo-600"
            to="/login"
          >
            Login now!
          </Link>
        </p>
      </FormsGroup>
    </Fragment>
  );
}

export default FormsRegister;
