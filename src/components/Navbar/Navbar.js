import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo/logo-combined.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { onClickLogout, login, user } = useAuth();
  const logout = () => {
    onClickLogout();
  };
  useEffect(() => {
    var navbar = document.querySelector("nav");
    window.onscroll = function () {
      if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img className="brightness" src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler my-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mx-auto mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-bold"
                aria-current="page"
                to="/"
                style={{ fontSize: "13px" }}
              >
                <span className="me-1">
                  <i className="fas fa-umbrella-beach"></i>
                </span>
                Holiday
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-bold"
                to="/"
                style={{ fontSize: "13px" }}
              >
                <span className="me-1">
                  <i className="fas fa-location-arrow"></i>
                </span>
                Charter
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark fw-bold"
                to="/trackflight"
                style={{ fontSize: "13px" }}
              >
                <span className="me-1">
                  <i className="fas fa-plane-departure"></i>
                </span>
                Track Flight
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {login === true ? (
              <>
                <p className="pt-1 text-dark" style={{ fontSize: "12px" }}>
                  Help <i className="fa fa-phone me-1"></i>+8809613345345
                </p>
                <span className="mx-2">|</span>
                <p className="me-2 pt-1 text-dark" style={{ fontSize: "12px" }}>
                  {user?.fullName}
                </p>
                <li className="dropdown">
                  <Link
                    className="dropdown-toggle"
                    to="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="fs-6 text-dark fw-bold">
                      <i className="fas fa-user"></i>
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        {" "}
                        <span className="me-2">
                          <i className="fas fa-user"></i>
                        </span>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/bookingList">
                        <span className="me-2">
                          <i className="fas fa-tags"></i>
                        </span>
                        My Bookings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/makepayment">
                        <span className="me-2">
                          <i
                            className="fa fa-credit-card"
                            aria-hidden="true"
                          ></i>
                        </span>
                        Make Payment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/mytransaction">
                        <span className="me-2">
                          <i className="fas fa-book" aria-hidden="true"></i>
                        </span>
                        My Transactions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={() => logout()}
                      >
                        <span className="me-2">
                          <i className="fas fa-sign-out-alt"></i>
                        </span>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="btn btn-primary text-white px-3 m-1 fw-bold btn-sm rounded"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
