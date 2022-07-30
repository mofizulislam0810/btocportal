import axios from "axios";
import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
import { apiEndPoints } from "../../utility/apiEndPoints";

const Login = () => {
  const { onClickLoginButton, setLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    let loginData = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    onClickLoginButton(loginData, location, navigate);
    e.preventDefault();
  };
  const responseGoogle = (response) => {
    let obj = {
      loginProvider: "Google",
      providerKey: response.profileObj?.googleId,
      name: response.profileObj?.name,
      email: response.profileObj?.email,
    };
    console.log(response);
    async function googleData() {
      await axios
        .post(apiEndPoints.externalUser, obj, apiEndPoints.headerToken)
        .then((res) => {
          console.log(res);
          if (res.data.isSuccess === true) {
            sessionStorage.setItem("token", JSON.stringify(res.data.data));
            const destination = location.state?.from || "/";
            navigate(destination);
            window.location.reload();
            setLogin(true);
          } else {
            toast.error("Something is wrong. Please try again.");
          }
        });
    }
    googleData();
  };

  const responseFacebook = (response) => {
    console.log(response);
    let obj = {
      loginProvider: "Facebook",
      providerKey: response.userID,
      name: response.name,
      email: response.email,
    };
    async function facebookData() {
      await axios
        .post(apiEndPoints.externalUser, obj, apiEndPoints.headerToken)
        .then((res) => {
          if (res.data.isSuccess === true) {
            sessionStorage.setItem("token", JSON.stringify(res.data.data));
            const destination = location.state?.from || "/";
            navigate(destination);
            window.location.reload();
          } else {
            toast.error("Something is wrong. Please try again.");
          }
        });
    }
    if (response.status === "unknown") {
    } else {
      facebookData();
    }
  };

  return (
    <div className="py-5">
      <ToastContainer />
      <div className="container infinity-container pt-3">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
            <div className="text-center mb-4">
              <h4 className="pt-5">Login into account</h4>
            </div>
            <form onSubmit={handleSubmit} className="px-3">
              <div className="form-input">
                <span>
                  <i className="fa fa-envelope"></i>
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  tabIndex="10"
                  required
                />
              </div>
              <div className="form-input">
                <span>
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="row mb-3">
                <div className="col-auto d-flex align-items-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="cb1"
                    />
                    <label className="custom-control-label ms-1" htmlFor="cb1">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-block w-100">
                  Login
                </button>
              </div>
              <div className="text-end">
                <a
                  href="reset.html"
                  className="forget-link"
                  style={{ textDecoration: "none" }}
                >
                  Forgot password?
                </a>
              </div>
              <div className="text-center mb-2">
                <div className="text-center mb-3" style={{ color: "#777" }}>
                  or login with
                </div>
                <GoogleLogin
                  clientId="188218811904-4m0amjem5pii8fe0utc03rchon6b8638.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="btn btn-social btn-google"
                      onClick={renderProps.onClick}
                    >
                      <i className="fa fa-google"></i>
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <FacebookLogin
                  appId="1220938075942013"
                  callback={responseFacebook}
                  fields="name,email,picture"
                  cssClass="btn btn-social btn-facebook"
                  icon="fa-facebook"
                />
              </div>
              <div className="text-center mb-5" style={{ color: "#777" }}>
                Don't have an account?
                <Link
                  className="register-link ms-1"
                  to="/register"
                  style={{ textDecoration: "none" }}
                >
                  Register here
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

export default Login;
