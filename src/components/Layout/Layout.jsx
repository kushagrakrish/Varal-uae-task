import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Dedicated from "../DedicatedSection/Dedicated";
import Footer from "../Footer/Footer";
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
      <Footer />
    </div>
  );
};

export default Layout;
