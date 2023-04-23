import React from "react";
import "./whatMEHFOOZ.css";
import nurse from "../../assets/blog2.PNG";
import mono from "../../assets/mono.png";

import img from "../../assets/svg/1.svg"
const WhatMEHFOOZ = () => {
  const title = "Why Choose Us";
  const subtitle =
    " Mehfooz Ghar provides hassle free, at-home quality services for a range of your needs.";
  const benefits = [
    "One platform. Multiple services. Total convenience.",
    "Reliable services for your peace of mind.",
    "Schedule an appointment with professionals anytime, anywhere.",
    "Browse our Muhafiz in just one application.",
  "Verified professionals at your service.",
    "Trust us for all your healthcare and handyman needs.",
    "Your ultimate solution for home and workplace services.",
    "Simplify your life with our one-stop-shop.",
    "The easiest way to transform your space.",
    "Experience a hassle-free and seamless service.",
  ];
  return (
    <div>
      <div className="text-center" id="services">
        <h2 className="green-clr">{title}</h2>
        <p>{subtitle}</p>
      </div>
      
        < div class="catchphrase-boxes">
          {benefits.map((b,i)=>{return(<div class="catchphrase-box">
            <div class="catchphrase-box__svg">
             <img className="svgs" src={img}/> 
            </div>
            <div class="catchphrase-box__text">
              <h2>{b}</h2>
            </div>
          </div>)})}
        
       
      </div>
    </div>
  );
};

export default WhatMEHFOOZ;
