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
                    <p className="card-description text-justify">
                    After working in the corporate world for many years, Pamela obtained a Master’s Degree in Occupational Education and started her coaching, career counseling and management training company.
                    <br></br>
                    <br></br>
                    She has worked with clients worldwide and has a reputation for facilitating clients through a process that enables them to find their true calling and obtain the success they desire.
                    <br></br>
                    <br></br>
                    In her management training, she has trained participants in communication skills, time management, stress management and overall leadership skills.
                    <br></br>
                    <br></br>
                    She brings decades of experience and success to her business.

She has now formed a company with her longtime friend and business partner to bring a conglomerate of talented coaches together. 

Our desire is to bring a variety of coaching expertise to a diverse group of participants.

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
                    <p className="card-description text-justify">
                    Sherry Holster has been a successful owner of three independent businesses.  She has over 25 years experience in finance and management with multi-million dollar corporations.  In her coaching practice she is a Money, Personal and Business coach. This enables her to support the client in every aspect of their life. She has successfully helped clients change their relationship with money and in turn change their financial destiny.
                    <br></br>
                    <br></br>
                    After years of collaboration with her friend of over '20' years their passion for bringing out the best in their clients has led them to form Evolution Consulting and Coaching Coalition.
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
