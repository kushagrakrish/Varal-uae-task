import React from "react";
import Banner from "../Banner/Banner";
import Dedicated from "../DedicatedSection/Dedicated";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Dedicated />
    </div>
  );
};

export default Layout;
