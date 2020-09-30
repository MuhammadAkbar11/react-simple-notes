import React, { Component } from "react";
import CardBody from "components/molecules/Cards/CardBody";
import Card from "components/molecules/Cards/Card";
import CardTitle from "components/atoms/CardTitle";
import CardText from "components/atoms/CardText";
import FormsLogin from "containers/organims/login/FormsLogin";

import { connect } from "react-redux";
import ReduxActionTypes from "config/redux/actions/Redux.actionTypes";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  setLoading = status => {
    this.setState({ loading: status });
  };

  componentDidMount() {
    document.title = "Simple Note | Login";
  }

  componentWillUnmount() {
    document.title = "Simple Note";
  }

  handleInputChange = e => {
    const event = e.target;
    const name = event.name;
    const value = event.value;

    this.setState(
      {
        ...this.state,
        [name]: value,
      },
      () => {
        if (this.props.popUp === true)
          this.props.actions.changePopup("", false);
      }
    );
  };

  submitLogin = e => {
    e.preventDefault();
    // const { email, password } = this.state;
    this.setLoading(true);
    // if (email === "" || password === "") {
    //   this.props.actions.changePopup("Field Email and Password is empty", true);
    // }
  };

  render() {
    const { email, password } = this.state;
    const { store } = this.props;
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
                {store.popUp ? (
                  <div className="my-3">
                    <h3 className="text-red-600">{store.errorMessage}</h3>
                  </div>
                ) : null}
                <br />
                <FormsLogin
                  form={{ email, password }}
                  handleInputChange={this.handleInputChange}
                  submit={this.submitLogin}
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
const mapStateToProps = state => {
  return {
    store: {
      ...state,
    },
  };
};

const mapDispatchToProops = dispatch => {
  return {
    actions: {
      changePopup: (text, status) =>
        dispatch({
          type: ReduxActionTypes.SHOW_POPUP,
          value: { text: text, status: status },
        }),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProops)(Login);
