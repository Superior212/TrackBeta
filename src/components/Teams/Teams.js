import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import styles from "./Teams.module.css";
import adidas from "../../assests/adidas.png";
import jiji from "../../assests/jiji.png";
import zara from "../../assests/zara.png";
import kilimall from "../../assests/kilimall.png";
import supermarket from "../../assests/supermarket.png";

const Teams = () => {
  return (
    <section className="container-fluid">
      <div className={`${styles.teams} bg-white mx-auto`}>
        <p className="pt-4 text-center fw-bold">
          Trusted by teams at over 200,000 of the world’s leading organisations
        </p>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
            <img src={adidas} className="img-fluid" alt="adidas" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
            <img src={jiji} className="img-fluid" alt="jiji" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
            <img src={zara} className="img-fluid" alt="zara" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
            <img src={kilimall} className="img-fluid" alt="kilimall" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-4">
            <img src={supermarket} className="img-fluid" alt="supermarket" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
