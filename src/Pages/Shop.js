import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offers/Offer";
import Newcollection from "../Components/Newcollection/Newcollection";
import Newsletter from "../Components/Newsletter/Newsletter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Newcollection />
      <Newsletter />
    </div>
  );
};

export default Shop;
