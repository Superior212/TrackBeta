import React from "react";
import styles from "./TrackingDashboard.module.css";
import computer from "../../assests/computer.png";

const TrackingDashboard = () => {
  return (
    <section className={`container ${styles.main}`}>
      <div className="row m-5 align-items-center">
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div className={`p-5 ${styles.DashboardText}`}>
            <h1>Our Tracking Dashboard</h1>
            <p className="text-sm-start text-wrap">
              Our dashboard provides businesses with a centralized platform to
              manage all of their package tracking and delivery information.
              With real-time tracking updates and customizable alerts, our
              dashboard allows businesses to stay up-to-date on package delivery
              status and monitor delivery performance
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <img src={computer} className="w-100" alt="" />
        </div>
      </div>
    </section>
  );
};

export default TrackingDashboard;
