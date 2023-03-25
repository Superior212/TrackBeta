import React from "react";
import styles from  "./CustomerBtn.module.css";

const CustomerBtn = () => {
  return (
    <div className="container">
      <button className="text-white fs-5 fw-bold">
        Flawless Customer Return
      </button>

      <main className="row py-5 content">
        <div className="col">
          <h2 className="fw-bold">42%</h2>
          <p>conversion rate with the best delivery API</p>
        </div>
        <div className="col-sm-none line"></div>
        <div className="col">
          <h2 className="fw-bold">76%</h2>
          <p>Customer satisfaction</p>
        </div>
        <div className="col-sm-none line2"></div>
        <div className="col">
          <h2 className="fw-bold">3,100+</h2>
          <p>deliveries with our simple tracking integration</p>
        </div>
      </main>
    </div>
  );
};

export default CustomerBtn;
