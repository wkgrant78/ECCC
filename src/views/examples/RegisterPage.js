import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      <MainNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/soroush-karimi.jpg") + ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="col d-flex justify-content-center">
                <Card className="card-register">
                  <CardTitle className="text-center" tag="h3">
                    Register
                  </CardTitle>
                  <div className="social">
                    <Button className="btn-just-icon mr-1" color="facebook">
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button className="btn-just-icon mr-1" color="google">
                      <i className="fa fa-google" />
                    </Button>
                    <Button className="btn-just-icon" color="twitter">
                      <i className="fa fa-twitter" />
                    </Button>
                  </div>
                  <div className="division">
                    <div className="line l" />
                    <span>or</span>
                    <div className="line r" />
                  </div>
                  <Form className="register-form">
                    <Input placeholder="Email" type="text" />
                    <Input placeholder="Password" type="password" />
                    <Input placeholder="Confirm Password" type="password" />
                    <Button block className="btn-round" color="default">
                      Register
                    </Button>
                  </Form>
                  <div className="login">
                    <p>
                      Already have an account?{" "}
                      <a href="/login-page">
                        Log in
                      </a>
                      .
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="demo-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
