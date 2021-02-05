import React from "react";

// reactstrap components

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/eccc/yellow-flower.jpeg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 className="text-center">Evolution Consulting and Coaching Coalition</h1>
            <h3 className="text-center">Mission Statement...</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
