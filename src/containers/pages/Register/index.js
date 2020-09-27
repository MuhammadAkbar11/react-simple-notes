import React, { Component } from "react";
import CardBody from "components/molecules/Cards/CardBody";
import Card from "components/molecules/Cards/Card";
import CardTitle from "components/atoms/CardTitle";
import CardText from "components/atoms/CardText";

import firebase from "config/firebase/index.firebase";
import FormsRegister from "containers/organims/register/FormsRegister";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password1: "",
      password2: "",
      loading: false,
    };
  }

  setLoading = status => {
    this.setState({ loading: status });
  };

  handleInputChange = e => {
    const event = e.target;
    const name = event.name;
    const value = event.value;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  submitRegistration = e => {
    e.preventDefault();
    const { password1, password2 } = this.state;
    this.setLoading(true);
    if (password1 !== password2) {
      this.setLoading(false);
      console.log("password doesn't match");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password1)
        .then(res => {
          this.setLoading(false);
          console.log(res);
          this.setState({
            email: "",
            password1: "",
            password2: "",
          });
        })
        .catch(err => {
          const errorCode = err.code;
          const errorMessage = err.message;
          this.setLoading(false);
          if (err.code === "auth/email-already-in-use") {
            this.setState({
              email: "",
              password1: "",
              password2: "",
            });
          }
          console.log(errorCode, errorMessage);
        });
    }
  };

  render() {
    const { email, password1, password2 } = this.state;
    return (
      <div className="auth--wrapper bg-gray-100">
        <div className=" flex flex-wrap justify-center w-full ">
          <Card className=" m-auto w-10/12 sm:px-6 md:w-1/2 lg:w-1/2 xl:w-1/3 rounded-none">
            <CardBody className="relative flex flex-col items-center justify-between">
              <div className="text-center w-full py-3 ">
                <CardTitle className="text-center">
                  Simple <span className="text-indigo-600">Notes</span>
                </CardTitle>
                <CardText className=" text-sm text-gray-700 ">
                  Registration
                </CardText>
              </div>
              <div className="w-full h-full flex flex-col justify-center items-center ">
                <FormsRegister
                  form={{ email, password1, password2 }}
                  handleInputChange={this.handleInputChange}
                  submit={this.submitRegistration}
                  loading={this.state.loading}
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
}
export default Register;
