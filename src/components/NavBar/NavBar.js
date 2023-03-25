import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Logo from "../../assests/TrackBetaLogo.png";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg text-light ${styles.navbar}`}>
        <div className="container-fluid p-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand ps-5" href="#">
              <img src={Logo} alt="" />
            </a>
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 ps-5 d-flex justify-content-between ${styles.navbarNav}`}
            >
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="whyus">
                  Why us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#howitwork">
                  How it works
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#partner">
                  Partners
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-light me-5">Login</a>
                </li>
              </ul>
              <Button label="Create Account" className="nav-btn" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
