import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './Teams.css'
import adidas from "../../assests/adidas.png";
import jiji from "../../assests/jiji.png";
import zara from "../../assests/zara.png";
import kilimall from "../../assests/kilimall.png";
import supermarket from "../../assests/supermarket.png";

const Teams = () => {
  return (
    <div className='teams bg-white mx-auto'>
        <p className='pt-4'>Trusted by teams at over 200,000 of the world’s leading organisations</p>
        <div className=''> 
            <img src={adidas}  className="mx-5" alt="" />
            <img src={jiji}  className="mx-5" alt="" />
            <img src={zara}  className="mx-5" alt="" />
            <img src={kilimall}  className="mx-5" alt="" />
            <img src={supermarket} className="mx-5" alt="" />
        </div>
    </div>
  )
}

export default Teams