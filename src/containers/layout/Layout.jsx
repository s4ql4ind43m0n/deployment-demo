import { Button } from "bootstrap";
import React from "react";
import Goback from "../../components/buttons/Goback";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";
import "./layout.css";
const Layout = (props) => {
  return (
    <>
      {" "}
    
        <Navbar />
      <div className="gradient__bg">
     
        {props.children}
        </div>
         <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
