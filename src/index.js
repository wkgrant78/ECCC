/*!

=========================================================
* Paper Kit PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/css/paper-kit.css";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Sections from "views/Sections.js";
import Coaches from "views/Coaches.js";
import AboutUs from "views/examples/AboutUs.js";
import CoachesPersonal from "./views/CoachesPersonal";
import CoachesProfessional from "./views/CoachesProfessional";
import ContactUs from "views/examples/ContactUs.js";
import Home from "views/examples/Home.js";
import Services from "views/examples/Services.js";
import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Settings from "views/examples/Settings.js";
import Membership from "views/examples/Membership";


// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />} />
      
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      

      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      
      <Route path="/home" render={(props) => <Home {...props} />} />

      <Route path="/membership" render={(props) => <Membership {...props} />} />

      
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
            
      <Route path="/coaches" render={(props) => <Coaches {...props} />} />
      
      <Route path="/coaches-professional" render={(props) => <CoachesProfessional {...props} />} />

      <Route path="/coaches-personal" render={(props) => <CoachesPersonal {...props} />} />

      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      
      <Route path="/services" render={(props) => <Services {...props} />} />
      
      
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      
      
      <Route path="/settings" render={(props) => <Settings {...props} />} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
