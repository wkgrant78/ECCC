import React from "react";
// import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// import ProfilePage from "views/examples/ProfilePage.js";


// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import OurCoachesHeader from "components/Headers/OurCoachesHeader.js";
import FooterHome from "components/Footers/FooterHome";
import CoachesPersonal from "./CoachesPersonal";
import CoachesProfessional from "./CoachesProfessional"


function Coaches() {
  return (
    <>
      <MainNavbar />
      <OurCoachesHeader />
      <div className="main">
                <div className="section">
                    <Container>
                        <h3 className="title-uppercase">All About Our Coaches</h3>
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
                            What Can Coaches Do for You....
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
      <div className="section section-team cd-section" id="teams">
      <div
          className="team-2 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/eccc/black.jpg") + ")",
          }}
        >
        {/* ********* START FOUNDERS ********* */}
        <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">ECCC Founders</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/kaci-baum-1.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Pamela Grant</CardTitle>
                    <h6 className="card-category">Cofounder</h6>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>

                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-twitter" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h4">Sherry Holster</CardTitle>
                    <h6 className="card-category">Cofounder</h6>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>

                    <CardFooter>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-link btn-just-icon mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <CoachesPersonal />
        <CoachesProfessional />
      </div>
      <FooterHome />
    </>
  );
}

export default Coaches;
