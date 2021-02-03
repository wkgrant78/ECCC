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

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import HomeHeader from "components/Headers/HomeHeader.js";
import FooterHome from "components/Footers/FooterHome";

function Home() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("home");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("home");
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
        </>
    );
}

export default Home;