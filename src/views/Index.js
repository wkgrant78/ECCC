import React from "react";

// reactstrap components
import {
  Container,
} from "reactstrap";


// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import HomeHeader from "components/Headers/HomeHeader";
import FooterHome from "components/Footers/FooterHome";
// sections for this page
// import CoachesProfessional from "./CoachesProfessional";
// import CoachesPersonal from "./CoachesPersonal";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
            <MainNavbar />
            <HomeHeader />
            <div className="main">
                <div className="section">
                    <Container>
                        <h3 className="title-uppercase">We build great products.</h3>
                        <p>
                            Collaboratively administrate empowered markets via plug-and-play
                            networks. Dynamically procrastinate B2C users after installed base
                            benefits. Dramatically visualize customer directed convergence
                            without revolutionary ROI.
                        </p>
                        <p>
                            Efficiently unleash cross-media information without cross-media
                            value. Quickly maximize timely deliverables for real-time schemas.
                            Dramatically maintain clicks-and-mortar solutions without
                            functional solutions.
                        </p>
                        <h3 className="title-uppercase">
                            We
                        <i className="fa fa-heart heart mr-3 ml-1" />
                        what we do.
                        </h3>
                        <div className="home-p2">
                        <p>
                            Completely synergize resource taxing relationships via premier
                            niche markets. Professionally cultivate one-to-one customer
                            service with robust ideas. Dynamically innovate resource-leveling
                            customer service for state of the art customer service.
                        </p>
                        </div>
                    </Container>
                </div>
            </div>
            <FooterHome />
        </>  );
}

export default Index;
