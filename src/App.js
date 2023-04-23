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
        <Routes>
          <Route exact path="/mg-main" element={<Home />} />
          <Route
            path="/header"
            element={
              <Layout>
                <Header />
              </Layout>
            }
          />
          <Route
            path="/howitworks"
            element={
              <Layout>
                <Brand />
              </Layout>
            }
          />
          <Route
            path="/whychooseus"
            element={
              <Layout>
                <WhatMEHFOOZ />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />

          <Route
            path="/home/types"
            element={
              <Layout>
                <SignUpTypes />
              </Layout>
            }
          />

          <Route
            path="/:employeeType/:id"
            element={
              <Layout>
                <Appointment />
              </Layout>
            }
          />
          <Route
            path="/home/types/Worker"
            element={
              <Layout>
                <WorkerCategorySignUp />
              </Layout>
            }
          />

          <Route
            path="/clientSignUp"
            element={
              <Layout>
                <ClientSignUp />
              </Layout>
            }
          />

          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          {/* Staff categories*/}
          <Route
            path="/staff/:subCategory"
            element={
              <Layout>
                <SubStaff />
              </Layout>
            }
          />
          <Route
            path="/addEmployee"
            element={
              <Layout>
                <AddEmployee />
              </Layout>
            }
          />
          <Route
            path="/viewUsers"
            element={
              <Layout>
                <Users />
              </Layout>
            }
          />

          <Route
            path="/viewUsers/:type"
            element={
              <Layout>
                <ViewUsers />
              </Layout>
            }
          />
          <Route
            path="/EmployeeFields/:type"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />

          <Route
            path="/home/categories"
            element={
              <Layout>
                <Category />
              </Layout>
            }
          />
          <Route
            path="/home/categories/medical"
            element={
              <Layout>
                <MedicalSub />
              </Layout>
            }
          />
          <Route
            path="/home/categories/caretakers"
            element={
              <Layout>
                <CTSub />
              </Layout>
            }
          />
          <Route
            path="/ApplicationForm"
            element={
              <Layout>
                <ApplicationForm />
              </Layout>
            }
          />
          <Route
            path="/worker-signin"
            element={
              <Layout>
                <WorkerSignIn />
              </Layout>
            }
          />
          <Route
            path="/Admin"
            element={
              <Layout>
                <AdminPanel />
              </Layout>
            }
          />

          <Route
            path="/home/categories/others"
            element={
              <Layout>
                <OSCategory />
              </Layout>
            }
          />
          <Route
            path="/:employeeType/:username"
            element={
              <Layout>
                <EmployeeProfile />
              </Layout>
            }
          />

          <Route
            path="/1"
            element={
              <Layout>
                <WorkingStaff />
              </Layout>
            }
          />

          <Route
            path="/home/feature"
            element={
              <Layout>
                <Features />
              </Layout>
            }
          />
          <Route
            path="/signin"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout>
                <ContactForm />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
