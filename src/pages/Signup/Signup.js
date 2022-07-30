import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { apiEndPoints } from "../../utility/apiEndPoints";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [registerData, setRegisterData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData, IsFromWeb: true };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };

  console.log(registerData);
  const handleSubmit = (e) => {
    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passsword Does not match!");
    }
    axios.post(apiEndPoints.register, registerData).then((response) => {
      console.log(response);
      if (response.data.isSuccess === true) {
        toast.success("Registration Successfully!");
      } else {
        toast.error("Something is wrong! Please try again!");
      }
    });
    e.preventDefault();
  };
  return (
    <div className="py-5">
      <ToastContainer />
      <div className="container infinity-container pt-5">
        <div className="row">
          <div className="col-md-1 infinity-left-space"></div>

          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
            <div className="text-center mb-4">
              <h4 className="pt-5">Create an account</h4>
            </div>

            <form onSubmit={handleSubmit} className="px-3">
              <div className="form-input">
                <span>
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  tabIndex="10"
                  onBlur={handleOnBlur}
                  required
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  tabIndex="10"
                  onBlur={handleOnBlur}
                  required
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  tabIndex="10"
                  onBlur={handleOnBlur}
                  required
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onBlur={handleOnBlur}
                  required
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Retype Password"
                  onBlur={handleOnBlur}
                  required
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-block w-100">
                  Register
                </button>
              </div>
              <div className="text-center mb-5" style={{ color: "#777" }}>
                Already have an account?
                <Link
                  className="login-link ms-1"
                  to="/login"
                  style={{ textDecoration: "none" }}
                >
                  Login here
                </Link>
              </div>
            </form>
          </div>
          <div className="col-md-1 infinity-right-space"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
