/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import ServicesHeader from "components/Headers/ServicesHeader.js";
import FooterHome from "components/Footers/FooterHome";

function Services() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
      document.body.classList.add("services");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
          document.body.classList.remove("services");
      };
  });
  // const [activePill, setActivePill] = React.useState("1");
  return (
    <>
      <MainNavbar />
      <ServicesHeader />
      <div className="section section-project cd-section" id="projects">
        {/* ********* PROJECTS 3 ********* */}
        <div className="projects-3" id="projects-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <div className="space-top" />
                <h6 className="category">Our work</h6>
                <h2 className="title">Corporate Training</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your projects. Keep you user engaged by providing meaningful
                  information.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/angelo-pantazis.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Productivity tools</h6>
                    <CardTitle tag="h4">
                      Beautiful Desktop for Designers
                    </CardTitle>
                    <p className="card-description">
                      As this technology matures it will be cool to see what
                      hackers are able to do with it.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/patrick-tomasso.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Web Design</h6>
                    <CardTitle tag="h4">
                      Famous Website Redesign Implementation
                    </CardTitle>
                    <p className="card-description">
                      Streaming services once again top the list of this year’s
                      Emmy nominations
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/luke-chesser.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Marketing tools</h6>
                    <CardTitle tag="h4">
                      The Best Productivity Applications
                    </CardTitle>
                    <p className="card-description">
                      Dietary supplements don’t need approval from the Food and
                      Drug Administration.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/rawpixel-coms.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Website</h6>
                    <CardTitle tag="h4">Behance Redesign</CardTitle>
                    <p className="card-description">
                      The HDR rollout is being enabled via support from two
                      major studio partners.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/patrick-tomasso.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Android App</h6>
                    <CardTitle tag="h4">Analytics for Android</CardTitle>
                    <p className="card-description">
                      Google did not offer an estimate as to when HDR support
                      reaches its other global markets.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardImg top tag="div">
                    <a
                      href="http://www.creative-tim.com/product/paper-kit-react?ref=pkpr-sections-page"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img"
                        src={require("assets/img/sections/rawpixel-coms.jpg")}
                      />
                    </a>
                  </CardImg>
                  <CardBody>
                    <h6 className="card-category">Material</h6>
                    <CardTitle tag="h4">How to find the contacts.</CardTitle>
                    <p className="card-description">
                      Boom, the invitations start flying and Brella makes it
                      easy to accept/decline
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* ********* END PROJECTS 3 ********* */}
        </div>
      </div>
    </>
  );
}

export default Services;
