import React, { Component } from "react";
import { Link } from "react-router-dom";

import coverRegister from "../../../assets/img/bg/simple-notes.jpg";
import AuthCard from "../../../components/molecules/AuthCard";
import RegisterForms from "../../../components/molecules/RegisterForms";

export class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="auth--wrapper bg-gray-100">
        <AuthCard>
          <div className="flex flex-col justify-between items-center h-screen w-full lg:w-9/12 mx-auto ">
            <div className="h-full md:flex md:flex-col md:justify-center md:items-center ">
              <div className="text-center text-4xl lg:text-5xl text-gray-900 my-0">
                Simple
                <span className="text-indigo-500">Notes</span>
              </div>
              <div className="text-center text-xs lg:text-md italic font-light text-gray-700 my-0">
                Register
              </div>
            </div>

            <RegisterForms />
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
            src={coverRegister}
            alt=""
          />
          <div className="absolute w-full h-screen opacity-75 bg-gray-800 "></div>
        </div>
      </div>
    );
  }
}
export default Register;
