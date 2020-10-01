import React, { useRef, useState, useEffect, useCallback } from "react";
import CardBody from "components/molecules/Cards/CardBody";
import Card from "components/molecules/Cards/Card";
import CardTitle from "components/atoms/CardTitle";
import CardText from "components/atoms/CardText";

import { connect } from "react-redux";
import { _ChangePopup, _SetLoading } from "config/redux/actions/Redux.actions";
import { _UserRegistrationAPI } from "config/redux/actions/Redux.Auth.actions";
import FormAuth from "containers/organims/auth/formAuth";
import useIsLogin from "hooks/useIsLogin";

function Registrations(props) {
  const inputsValue = {
    email: "",
    password: "",
  };

  const { isLogin, title } = useIsLogin(props.match.path);

  const [inputs, setInputs] = useState(inputsValue);

  console.log(props);

  const handleInputChange = e => {
    const event = e.target;
    const name = event.name;
    const value = event.value;

    setInputs(prevState => {
      if (props.popUp === true) props.changePopup("", false);
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitRegistration = e => {
    e.preventDefault();
    const { email, password } = inputs;
    props
      .registration({ email, password })
      .then(res => {
        console.log("register", res);
        setInputs({
          email: "",
          password: "",
        });
      })
      .catch(err => {
        console.log("Register", err);
        if (err.type === "auth/week-password") {
          setInputs(prev => {
            return {
              ...prev,
              password: "",
            };
          });
        }
      });
  };

  const { email, password } = inputs;
  return (
    <div className="auth--wrapper bg-gray-100">
      <div className=" flex flex-wrap justify-center w-full ">
        <Card className=" m-auto w-10/12 sm:px-6 md:w-1/2 lg:w-1/2 xl:w-1/3 rounded-none">
          <CardBody className="flex flex-col items-center justify-between">
            <div className="text-center w-full py-3 ">
              <CardTitle className="text-center">
                Simple <span className="text-indigo-600">Notes</span>
              </CardTitle>
              <CardText className=" text-sm text-gray-700 ">{title}</CardText>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center  my-auto ">
              {props.popUp ? (
                <div className="my-3">
                  <h3 className="text-red-600">{props.errorMessage}</h3>
                </div>
              ) : null}
              <br />
              <FormAuth
                form={{ email, password }}
                handleInputChange={handleInputChange}
                submit={submitRegistration}
                loading={props.isLoading}
                isLogin={isLogin}
                {...props}
              />
            </div>
            <div className="w-full h-auto flex flex-col justify-end items-center pt-4">
              <small className="text-gray-600">Muhammad Akbar 2020</small>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProops = dispatch => {
  return {
    changePopup: (text, status) => dispatch(_ChangePopup(text, status)),
    registration: data => dispatch(_UserRegistrationAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProops)(Registrations);
