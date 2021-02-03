import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function ServicesHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 10;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/eccc/purple-glass-ball.jpg") + ")", 
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto services-container">
              <h1 className="title">Services Offered</h1>
              <h3 className="description">
                ECCC provides many different service to support you....
              </h3>
              <br />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ServicesHeader;
