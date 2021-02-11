import React from "react";
// react plugin used to create DropdownMenu for selecting items
// import Select from "react-select";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function FooterHome() {
  return (
    <>
      <footer className="footer footer-big footer-black">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="9" sm="9" xs="12">
              <Row>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Discover
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          We're Hiring
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" sm="3" xs="6">
                  <div className="links">
                    <ul className="uppercase-links stacked-links">
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          How it works
                        </a>
                      </li>
                      <li>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="3" xs="6">
                  <div className="social-area">
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="facebook"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="twitter"
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round mr-1"
                      color="google"
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-round"
                      color="pinterest"
                    >
                      <i className="fa fa-pinterest-p" />
                    </Button>
                  </div>
                </Col>
              </Row>
              <hr />
              <div className="copyright">
                <div className="pull-left">
                  © {new Date().getFullYear()} WKG, made with love
                </div>
                <div className="links pull-right">
                  <ul>
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Company Policy
                      </a>
                    </li>
                    |{" "}
                    <li className="mr-1">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Terms
                      </a>
                    </li>
                    |{" "}
                    <li>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterHome;
