import "./App.css";

import Homepage from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";

import Features from "./containers/features/Features";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Category from "./components/category-card/Category";
import Layout from "./containers/layout/Layout";
import Home from "./containers/home/Home";
import ClientSignUp from "./Pages/ClientSignUp";
import SubStaff from "./DbLayer/SubStaff";
import MedicalSub from "./components/category-card/Subcategories/Medical";
import CTSub from "./components/category-card/Subcategories/Caretaker";
import OSCategory from "./components/category-card/Subcategories/Otherstaff";
import EmployeeProfile from "./EmployeeProfile";
import ContactForm from "./Pages/ContactForm";
import WorkingStaff from "./WorkingStaff";
import WorkerSignUp from "./Pages/WorkerSignUp";
import WorkerSignIn from "./Pages/WorkerSignIn";
import Login from "./Pages/Login";
import Admin from "./Pages/AddEmployeeFields";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import AddEmployee from "./Pages/AddEmployee";
import ApplicationForm from "./Pages/ApplicationForm";
import SignUpTypes from "./Pages/SignUpTypes";
import WorkerCategorySignUp from "./Pages/WorkerCategorySignUp";
import AdminPanel from "./Pages/AdminPanel";
import Users from "./DbLayer/Users";
import ViewUsers from "./Pages/ViewUsers";
import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import WhatMEHFOOZ from "./containers/whatMEHFOOZ/WhyChooseUs";
import Appointment from "./Pages/Appointment";

// import Appointment from "./Pages/Appointment";
function App() {
  // const { currentUser } = useContext(AuthContext);

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/signin"></Navigate>;
  // };
  return (
    <div className="App background">
      <BrowserRouter basename="/mg-main">
        <Layout>
        <Routes>
          <Route exact path="mg-main" element={<Home />} />
          <Route
            path="/header"
            element={
              
                <Header />
              
            }
          />
          <Route
            path="/howitworks"
            element={
              
                <Brand />
              
            }
          />
          <Route
            path="/whychooseus"
            element={
              
                <WhatMEHFOOZ />
              
            }
          />
          <Route
            path="/services"
            element={
              
                <Services />
              
            }
          />

          <Route
            path="/home/types"
            element={
              
                <SignUpTypes />
              
            }
          />

          <Route
            path="/:employeeType/:id"
            element={
              
                <Appointment />
              
            }
          />
          <Route
            path="/home/types/Worker"
            element={
              
                <WorkerCategorySignUp />
              
            }
          />

          <Route
            path="/clientSignUp"
            element={
              
                <ClientSignUp />
              
            }
          />

          <Route
            path="/about"
            element={
              
                <About />
              
            }
          />
          {/* Staff categories*/}
          <Route
            path="/staff/:subCategory"
            element={
              
                <SubStaff />
              
            }
          />
          <Route
            path="/addEmployee"
            element={
              
                <AddEmployee />
              
            }
          />
          <Route
            path="/viewUsers"
            element={
              
                <Users />
              
            }
          />

          <Route
            path="/viewUsers/:type"
            element={
              
                <ViewUsers />
              
            }
          />
          <Route
            path="/EmployeeFields/:type"
            element={
              
                <Admin />
              
            }
          />

          <Route
            path="/home/categories"
            element={
              
                <Category />
              
            }
          />
          <Route
            path="/home/categories/medical"
            element={
              
                <MedicalSub />
              
            }
          />
          <Route
            path="/home/categories/caretakers"
            element={
              
                <CTSub />
              
            }
          />
          <Route
            path="/ApplicationForm"
            element={
              
                <ApplicationForm />
              
            }
          />
          <Route
            path="/worker-signin"
            element={
              
                <WorkerSignIn />
              
            }
          />
          <Route
            path="/Admin"
            element={
              
                <AdminPanel />
              
            }
          />

          <Route
            path="/home/categories/others"
            element={
              
                <OSCategory />
              
            }
          />
          <Route
            path="/:employeeType/:username"
            element={
              
                <EmployeeProfile />
              
            }
          />

          <Route
            path="/1"
            element={
              
                <WorkingStaff />
              
            }
          />

          <Route
            path="/home/feature"
            element={
              
                <Features />
              
            }
          />
          <Route
            path="/signin"
            element={
              
                <Login />
              
            }
          />

          <Route
            path="/contact"
            element={
              
                <ContactForm />
              
            }
          />
         
        </Routes> </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
