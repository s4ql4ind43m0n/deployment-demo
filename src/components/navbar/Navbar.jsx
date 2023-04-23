import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import Abar from "./Abar";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";
const Menu = () => (
  <>
    <p>
      <Link to ='/header'>Home</Link>
    </p>
    <p>
      <Link to='/howItWorks'>How It Works</Link>
    </p>
    <p>
      <Link to="/whychooseus">Why Choose Us</Link>
    </p>
    <p>
      <Link to="/home/feature">Categories</Link>
    </p>
    <p>
      <a href="/contact">Contact Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="mg__top">
      <div className="mg__top-text">
        <div>
          <Abar />
        </div>
        </div>
        <div className=" mehfoozghar__navbar">
          <div className="mehfoozghar__navbar-links">
            <div className="mehfoozghar__navbar-links_logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="mehfoozghar__navbar-links_container">
            <Menu />
          </div>
        <div className="mehfoozghar__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#002f5d"
              size={16}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#0025fd"
              size={16}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="mehfoozghar__navbar-menu_container scale-up-center">
              <div className="mehfoozghar__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div></div>
        
      </div>
  );
};

export default Navbar;
