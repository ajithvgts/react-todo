import React from "react";
import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex w-100 py-3 align-items-center">
              <img width={36} height={36} src={reactLogo} alt="React Todo" />
              <h5 style={{ color: "#646681" }} className="mb-0 ms-2">
                Todo App
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
