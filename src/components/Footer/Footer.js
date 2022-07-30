import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import paymentOption from "../../images/logo/Pay-with.png";

const Footer = () => {
  return (
    <div
      className="container-fluid text-body footer pt-4 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ backgroundColor: "#00014a" }}
    >
      <div className="container py-3">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="text-white mb-4">Address</h5>
            <p className="mb-2" style={{ color: "#c5c4c4", fontSize: "16px" }}>
              <i className="fa fa-map-marker me-3"></i>House # 08, Road # 02,
              Block # C,<br></br> Banasree,Rampura, Dhaka- 1219,<br></br>{" "}
              Bangladesh.
            </p>
            <p className="mb-2" style={{ color: "#c5c4c4", fontSize: "16px" }}>
              <i className="fa fa-phone me-3"></i>(880) 9613345345
            </p>
            <p className="mb-2" style={{ color: "#c5c4c4", fontSize: "16px" }}>
              <i className="fa fa-envelope me-3"></i>support@triplover.com{" "}
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-square btn-outline-light btn-social"
                href="https://www.facebook.com/triploverbd/"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light btn-social"
                href="https://www.youtube.com/channel/UCf0d1Rf2V9mBjQmprn9aZhQ"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-square btn-outline-light btn-social"
                href="https://www.linkedin.com/company/triplover/about/?viewAsMember=true"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="text-white mb-4">Quick Links</h5>
            <Link className="btn btn-link" to="/contact">
              Contact
            </Link>
            <Link className="btn btn-link" to="/bankdetail">
              Bank Details
            </Link>
            <Link className="btn btn-link" to="/privacypolicy">
              Privacy Policy
            </Link>
            <Link className="btn btn-link" to="/termandcondition">
              Terms and Conditions
            </Link>
            <Link className="btn btn-link" to="/refundandcancellation">
              Refund & Cancellation
            </Link>
            <Link className="btn btn-link" to="/faq">
              FAQ
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="text-white mb-4">We Accept</h5>
            <div className="row g-2">
              <div className="col-12">
                <img className="img-fluid rounded" src={paymentOption} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="text-white mb-4">Download App</h5>

            <div className="app-icons">
              <a
                href="https://www.linkedin.com/company/triplover/about/?viewAsMember=true"
                className="me-2"
              >
                <img
                  className="apple border rounded img-fluid"
                  src="https://sharetrip.net/assets/images/playStore.png"
                  alt="Download on the App Store"
                />
              </a>
              <a href="https://www.linkedin.com/company/triplover/about/?viewAsMember=true">
                <img
                  className="android border rounded img-fluid"
                  alt="Get it on Google Play"
                  src="https://sharetrip.net/assets/images/appStore.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div
              className="col-md-12 text-center mb-3 mb-md-0 text-white"
              style={{ fontSize: "13px" }}
            >
              &copy; Copyright Triplover Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
