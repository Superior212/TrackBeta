import React from 'react'
import './Hero.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import hero from "../../assests/heroImage.png";

const Hero = () => {
  return (
    <section className='hero text-white'>
       <div className=' container row mx-auto'>
       <div className='col-sm-12 col-lg-6 heroText'>
            <h1>
            Efficient Order Tracking <br /><span className='text-start'>Made Easy with</span>  <br /> TrackBeta's API Solutions
            </h1>
            <p>Streamline your order tracking process and improve customer satisfaction with a reliable and customizable API solutions.</p>

            <button className='btn btn-warning px-4 text-white'>Get started</button>
        </div>

        <div className='col-sm-12 col-lg-6 '>
            <img src={hero} className="heroImg w-100" alt="" />
        </div>
       </div>
    </section>
  )
}

export default Hero