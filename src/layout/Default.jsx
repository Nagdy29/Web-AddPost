import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../compontens/Header";
import Footer from "../compontens/Footer";

const Default = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Default;
