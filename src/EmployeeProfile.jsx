import React, { useState, useEffect } from "react";
import { db } from "./DbLayer/firebase-config";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const EmployeeProfile = () => {

  const {employeeType, username } = useParams();
  const [emp, setEmp] = useState([]);

  const employeeCollectionRef = collection(db, employeeType);

  console.log(employeeType)

  useEffect(() => {
    const getEmployees = async () => {
      const data = await getDocs(employeeCollectionRef);
      setEmp(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getEmployees();
  }, []);

  const found =
    emp &&
    emp.find((obj) => {
      return String(obj.username) === String(username);
    });

    const [userData, setUserData] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      age: null,
      gender:"",
      previousHistory:"",
    });
  
    let name, value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;
  
      setUserData({ ...userData, [name]: value });
    };
  
    const submitData = async (e) => {
      e.preventDefault();
  
      await setDoc(doc(db, "appointment", userData.phone), {
        ...userData,
      });
    };
  return (
    <div>
      {found && (
       <div className="card my-3 mx-5">
       <div className="row"> 
       <div className="card-header">{found.name}</div>
         <div className="col-md-8">
         <p className="card-subtitle mt-2 text">
          <FontAwesomeIcon icon={faStar}  className="mx-2" /> {found.star} by {found.users} users
        </p>
           <div className="card-body displ">
             <p>Age: {found.age}</p>
             
             <p>Experience: {found.experience}</p>
             <p>Qualifications: {found.qualification}</p>
             <p>City: {found.city}</p>
             <p>Gender: {found.gender == 1 ? "female" : "male"}</p>
           </div>
         </div>
         <div className="col-md-4 d-flex align-items-center justify-content-center">
           {found.image && <img className="card-img-top" style={{ width: "300px", float: "left", marginRight: "200px" }} src={found.image.downloadURL} />}
         </div>
       </div>
       <Link to={`/${employeeType}/${found.uid}`}>
        <button className="btn btn-success"  style={{ width: "300px", float: "left", margin: "10px" }}>
          Book an Appointment
        </button>
       </Link>
     </div>

      )}
    </div>
  );
};

export default EmployeeProfile;
