import React, { Component } from "react";
import CardBody from "components/molecules/Cards/CardBody";
import Card from "components/molecules/Cards/Card";
import CardTitle from "components/atoms/CardTitle";
import CardText from "components/atoms/CardText";
import FormsGroup from "components/molecules/FormsGroup";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

export class Login extends Component {
  render() {
    return (
      <div className="auth--wrapper bg-gray-100">
        <div className=" flex flex-wrap justify-center w-full ">
          <Card className=" m-auto w-10/12 sm:px-6 md:w-1/2 lg:w-1/2 xl:w-1/3 rounded-none">
            <CardBody className="relative flex flex-col items-center justify-between">
              <div className="text-center w-full py-3 ">
                <CardTitle className="text-center">
                  Simple <span className="text-indigo-600">Notes</span>
                </CardTitle>
                <CardText className=" text-sm text-gray-700 ">Login</CardText>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center ">
                <FormsGroup>
                  <Input placeholder="Enter Your Email" />
                </FormsGroup>
                <FormsGroup className="mt-4">
                  <Input placeholder="Enter Your Password" />
                </FormsGroup>
                <FormsGroup className="mt-4">
                  <Button className="tw-btn-indigo tw-btn-full ">Login</Button>
                  <p className="text-sm mt-4 text-center">
                    Don't have account?{" "}
                    <Link
                      className="text-indigo-400 font-light hover:text-indigo-600"
                      to="/register"
                    >
                      Registration now!
                    </Link>
                  </p>
                </FormsGroup>
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
}
export default Login;
