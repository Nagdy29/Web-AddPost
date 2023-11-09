import React from "react";
import notfound from "../assint/images/not-found.png";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navgit = useNavigate();
  return (
    <>
      <div className="container ">
        <div className="notfound">
          <img src={notfound} alt="NotFound" className="w-25 " />
          <h3 className="fw-bold">Page Not Found</h3>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navgit("/")}
          >
            Go back Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Notfound;
