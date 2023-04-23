import React from "react";
import "./header.css";
import people from "../../assets/Group 81.png";
import nurse1 from "../../assets/nurse1.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const benefits = [
  "Hassle Free, at-home healthcare \n",
  "Trustworthy caretakers for your loved ones \n",
  "Convenient handymen services \n",
  "Quality services for a range of needs \n",
];

const Header = () => {
  return (

        <div className="row mehfoozghar__header section__margin ">
          <div className="col-5 p-3">
            <h1 className="fw-bold">
              <span className="secondary-clr">Transform</span> Your House &
              Workplace
            </h1>
            <p className="basic-clr">
              From skilled nurses and caretakers to reliable handyman services,
              we offer everything you need to keep your home running smoothly.
            </p>

            {benefits.map((e, i) => {
              return (
                <div className="d-flex  align-items-center basic-clr">
                  <Icon
                    icon="mdi:tick-circle"
                    style={{ color: "#FA5D26", width: "24px", height: "24px" }}
                  />
                  <p className="mb-0 ms-2 fs-24"> {e}</p>
                </div>
              );
            })}

            <div className="mehfoozghar__header-content__input fs-20">
              <Link to="/home/types">
                <button type="button" className="secondary-clr">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="col-6 mehfoozghar__header-image d-flex justify-content-end">
            <img src={nurse1} alt="nurse1" className="hero-img" />{" "}
          </div>
        </div>

  );
};

export default Header;
