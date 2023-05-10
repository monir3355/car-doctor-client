import React from "react";
import Header from "../pages/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
