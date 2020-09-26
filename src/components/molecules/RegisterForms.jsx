import React from "react";
import { Link } from "react-router-dom";

function RegisterForms() {
  return (
    <>
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
            type="text"
            className="input--control   "
            placeholder="Enter Your Password"
          />
        </div>
        <div className=" w-full  mt-5 ">
          <input
            type="text"
            className="input--control   "
            placeholder="Repeat Your Password"
          />
        </div>
        <div className=" w-full mt-5">
          <button className="btn btn-indigo w-full ">Register</button>
          <br />
          <p className="  text-center text-sm font-light mt-3 text-gray-900 ">
            Have an account?
            <Link className=" text-indigo-500 ml-2 " to="/login">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default RegisterForms;
