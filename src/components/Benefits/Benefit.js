import React from "react";
import styles from "./Benefit.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import realTime from "../../assests/realTime.png";
import multiCarrier from "../../assests/multiCarrier.png";
import analytics from "../../assests/analytics.png";

const Benefit = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className={`col-md-6 ${styles.benefitText}`}>
          <h1 className="text-start">What you stand to enjoy with TrackBeta</h1>
          <p className="text-start">
            Our API order tracking solution provides businesses with a wide
            range of customizable features to meet their specific needs and
            requirements.
          </p>
        </div>

        <div className={`col-2 d-none d-md-block ${styles.line}`}></div>
        <div className="col-sm-23 col-lg-6 ps-5">
          <div className="card p-4 my-3 shadow rounded w-90 mx-auto">
            <div className="row">
              <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
                <img src={realTime} className="img-fluid py-3 ps-1" alt="..." />
              </div>
              <div className="col-md-9">
                <h6 className="text-start pb-1 ">
                  What you stand to enjoy with TrackBeta
                </h6>
                <p className="fs-6 text-wrap text-start">
                  Our API order tracking solution provides businesses with a
                  wide range of customizable features to meet their specific
                  needs and requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-3 my-3 shadow rounded">
            <div className="row align-items-center">
              <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
                <img
                  src={multiCarrier}
                  className="img-fluid py-3 ps-1"
                  alt="..."
                />
              </div>
              <div className="col-12 col-md-9">
                <h6 className="text-start pb-1">Multi-carrier support</h6>
                <p className="fs-6 text-wrap text-start">
                  Our API order tracking solution supports multiple carriers,
                  including USPS, UPS, FedEx, DHL, and more, allowing businesses
                  to track packages from different carriers on a single
                  platform.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-3 my-3 shadow rounded">
            <div className="row">
              <div className="col-md-3 d-flex justify-content-center align-items-center mb-3 mb-md-0">
                <img src={analytics} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-9 d-flex flex-column justify-content-center">
                <h6 className="text-start pb-1">Analytics and reporting</h6>
                <p className="fs-6 text-wrap text-start">
                  Our API order tracking solution provides businesses with data
                  and analytics on package delivery times, shipping costs, and
                  other key metrics. This helps businesses optimize their
                  shipping processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
