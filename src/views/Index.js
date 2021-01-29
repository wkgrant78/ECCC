import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import HomeHeader from "components/Headers/HomeHeader";
import FooterHome from "components/Footers/FooterHome";
// sections for this page
// import SectionButtons from "./index-sections/SectionButtons.js";
// import SectionNavigation from "./index-sections/SectionNavigation.js";
// import SectionNavbars from "./index-sections/SectionNavbars.js";
// import SectionPreFooterAreas from "./index-sections/SectionPreFooterAreas.js";
// import SectionFooterAreas from "./index-sections/SectionFooterAreas.js";
// import SectionDescriptionAreas from "./index-sections/SectionDescriptionAreas.js";
// import SectionTypography from "./index-sections/SectionTypography.js";
// import SectionNotification from "./index-sections/SectionNotification.js";
// import SectionTables from "./index-sections/SectionTables.js";
// import SectionComments from "./index-sections/SectionComments.js";
// import SectionCommentsAreaSmall from "./index-sections/SectionCommentsAreaSmall.js";
// import SectionJavaScript from "./index-sections/SectionJavaScript.js";
// import SectionCards from "./index-sections/SectionCards.js";

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
            <ColorNavbar />
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
                        <p>
                            Completely synergize resource taxing relationships via premier
                            niche markets. Professionally cultivate one-to-one customer
                            service with robust ideas. Dynamically innovate resource-leveling
                            customer service for state of the art customer service.
                        </p>
                    </Container>
                </div>
            </div>
            <FooterHome />
        </>  );
}

export default Index;
