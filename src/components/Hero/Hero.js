import React from "react";
import styles from "./Hero.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import hero from "../../assests/heroImage.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className={`${styles.hero} text-white`}>
      <div className="container row mx-auto">
        <div className={`col-md-6 ${styles.heroText}`}>
          <h1>
            Efficient Order Tracking <br />
            <span className="text-start">Made Easy with</span> <br />{" "}
            TrackBeta's API Solutions
          </h1>
          <p>
            Streamline your order tracking process and improve customer
            satisfaction with a reliable and customizable API solutions.
          </p>

          <Button className="heroBtn" label="Get started" />
        </div>

        <div className="col-md-6">
          <img src={hero} className={`${styles.heroImg} w-100`} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
