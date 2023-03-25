import React from "react";
import videoImage from "../../assests/videoImage.png";

const GettingStarted = () => {
  return (
    <section className="container p-4">
      <div className="row m-5 align-items-center">
        <div className="col-lg-6 order-lg-2">
          <img src={videoImage} className="w-100" alt="" />
        </div>
        <div className="col-lg-6 order-lg-1">
          <div className="p-5">
            <h1 className="text-center text-lg-start">Get started in a snap</h1>
            <p className="text-center text-lg-start text-wrap">
              You can know how your products are being shipped and track their
              progress! Learn how your products can get tracked in real-time
              with the best digital solution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
