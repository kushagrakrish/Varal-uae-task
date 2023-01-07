import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Dedicated from "../DedicatedSection/Dedicated";
import Navbar from "../Navbar/Navbar";
import PriceCard from "../PriceCards/PriceCard";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Dedicated />
      <Cards />
      <PriceCard />
    </div>
  );
};

export default Layout;
