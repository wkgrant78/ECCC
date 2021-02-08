import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
import MembershipHeader from "components/Headers/MembershipHeader.js";
import FooterHome from "components/Footers/FooterHome";

function Membership() {
  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState("personal");
  return (
    <>
      <MainNavbar />
      <MembershipHeader />
      <div className="section section-pricing cd-section" id="pricing">
        <div className="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h5>
                <br />
                <Nav className="nav-pills-danger justify-content-center" pills>
                  <NavItem>
                    <NavLink
                      className={activePill === "1" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setActivePill("1");
                      }}
                    >
                      Monthly
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={activePill === "2" ? "active" : ""}
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        setActivePill("2");
                      }}
                    >
                      Yearly
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={"pill-" + activePill}>
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                </TabContent>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/daniel-olahh.jpg") +
                      ")",
                  }}
                >
                  <CardBody>
                    <h5 className="card-category">Personal</h5>
                    <CardTitle tag="h1">
                      <small>$</small>0 <small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>5</b> Sharing Tools
                      </li>
                      <li>
                        <b>10</b> Design Tools
                      </li>
                      <li>
                        <b>100</b> Private Messages
                      </li>
                      <li>
                        <b>2</b> Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/forest-bg.jpg") +
                      ")",
                  }}
                >
                  <CardBody>
                    <h5 className="card-category">Professional</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      89 <small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>100</b> Projects
                      </li>
                      <li>
                        <b>5</b> Team Members
                      </li>
                      <li>
                        <b>55</b> Personal Contacts
                      </li>
                      <li>
                        <b>5.000</b> Messages
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/sections/anders-jilden.jpg") +
                      ")",
                  }}
                >
                  <CardBody>
                    <h5 className="card-category">Corporate Membership</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      199 <small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>1</b> Project
                      </li>
                      <li>
                        <b>5</b> Team Members
                      </li>
                      <li>
                        <b>55</b> Personal Contacts
                      </li>
                      <li>
                        <b>5.000</b> Messages
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterHome />
    </>
  );
}

export default Membership;
