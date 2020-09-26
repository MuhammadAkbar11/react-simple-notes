import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function LoginForms() {
  return (
    <Fragment>
      {/* forms */}
      <div className=" w-full h-full  flex justify-center flex-col items-center ">
        <div className=" w-full ">
          <input
            type="text"
            className="input--control   "
            placeholder="Enter Your Email"
          />
        </div>
        <div className=" w-full  mt-5 ">
          <input
            type="password"
            className="input--control   "
            placeholder="Enter Your Password"
          />
        </div>
        <div className=" w-full mt-5">
          <button className="btn btn-indigo w-full ">Login</button>
          <br />
          <p className="  text-center text-sm font-light mt-3 text-gray-900 ">
            Dont Have account?
            <Link className=" text-indigo-500 ml-2 " to="/register">
              Registration now
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginForms;
