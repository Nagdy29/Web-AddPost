import React from "react";
import { Outlet } from "react-router-dom";

const AutLaout = () => {
  return (
    <>
      <main className="d-flex justify-content-center align-items-center  ">
        <Outlet />
      </main>
    </>
  );
};

export default AutLaout;
