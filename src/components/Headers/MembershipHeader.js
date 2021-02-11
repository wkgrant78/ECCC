import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function MembershipHeader() {
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
            "url(" + require("assets/img/eccc/lightbulb-plant.jpeg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">Membership Packages
              </h1>
              <h3 className="description">
                Let us tell you more about what we do.
              </h3>
              <br />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MembershipHeader;
