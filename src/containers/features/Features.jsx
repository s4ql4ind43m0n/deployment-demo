import React from "react";
import "./features.css";
import blog5 from "../../assets/blog5.PNG";
import { Link } from "react-router-dom";

import blog2 from "../../assets/blog2.PNG";

import blog3 from "../../assets/blog3.jpg";

const featuresData = [
  {
    id:0,
    title: "Medical",
    text: "In this world, with the increase in pandemics and business and all the hustle, booking a nurse or a nanny or a caretaker is becoming a trend now. It has a lot of perks of using this website",
    img: blog5,
  },
  {
    id:1,
    title: "Caretakers",
    text: "In this world, with the increase in pandemics and business and all the hustle, booking a nurse or a nanny or a caretaker is becoming a trend now. It has a lot of perks of using this website",
    img: blog3,
  },
  {
    id:2,
    title: "Other Staff",
    text: "In this world, with the increase in pandemics and business and all the hustle, booking a nurse or a nanny or a caretaker is becoming a trend now. It has a lot of perks of using this website",
    img: blog2,
  },
];

const Features = () => {
  return (
    <>
    <div id="aboutus">

      <div className="card p-5 my-3">


        <div className="d-flex flex-column align-items-center">
          <h2 className="green-clr">Browse Our Categories</h2>
          <div className=" w-50">
            <p className="card-text text-center">
              From skilled nurses and caretakers to reliable other staff, we
              offer everything you need to keep your home running smoothly.{" "}
            </p>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            {featuresData.map((e, i) => {
              return (
                <div className="col-lg-4 d-flex my-3 justify-content-center">
                  {e.title == "Other Staff"? 
                  <Link to ="../home/categories/others">
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        class="card-img-top"
                        src={e.img}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title green-clr">{e.title}</h5>
                        <p class="card-text">{e.text}</p>
                      </div>
                    </div>
                  </Link>
                  :
                  <Link to={`../home/categories/${e.title}`}>
                    <div class="card" style={{ width: "18rem" }}>
                      <img
                        class="card-img-top"
                        src={e.img}
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <h5 class="card-title green-clr">{e.title}</h5>
                        <p class="card-text">{e.text}</p>
                      </div>
                    </div>
                  </Link>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Features;
