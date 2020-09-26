import React, { Component } from "react";

import loginCover from "../../../assets/img/bg/login.jpg";
import AuthCard from "../../../components/molecules/AuthCard";
import LoginForms from "../../../components/molecules/LoginForms";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authCardStyle: {
        sm: "sm:w-10/12 sm:px-8 ",
        md:
          "md:px-9 md:relative md:shadow-none md:w-1/2 md:h-screen md:order-2 md:shadow-none md:pt-7",
        lg: "lg:w-2/6",
      },
    };
  }

  render() {
    const { authCardStyle } = this.state;
    return (
      <div className="auth--wrapper bg-gray-100">
        <AuthCard>
          <div className="flex flex-col justify-between items-center h-screen w-full lg:w-9/12 mx-auto ">
            <div className="h-full md:flex md:flex-col md:justify-center md:items-center ">
              <div className="text-center text-4xl lg:text-5xl text-indigo-500 my-0">
                Simple
                <span className="text-gray-900 ">Notes</span>
              </div>
              <div className="text-center text-xs lg:text-md italic font-light text-gray-700 my-0">
                Login
              </div>
            </div>

            <LoginForms />

            <div className="pb-6 w-full h-full text-center flex flex-col justify-end">
              <div className=" text-sm font-sans font-light ">
                Muhammad Akbar <span className="text-indigo-500">2020</span>
              </div>
            </div>
          </div>
        </AuthCard>
        {/* cover */}
        <div className="hidden md:block md:relative md:w-1/2 md:order-1 lg:w-8/12 ">
          <img
            className=" absolute object-cover w-full h-screen "
            src={loginCover}
            alt=""
          />
          <div className="absolute w-full h-screen opacity-75 bg-gray-800 "></div>
        </div>
      </div>
    );
  }
}
export default Login;
