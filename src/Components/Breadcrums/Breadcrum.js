import React from "react";
import "./Breadcrum.css";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <IoIosArrowForward /> SHOP <IoIosArrowForward /> {product.category}{" "}
      <IoIosArrowForward /> {product.name}
    </div>
  );
};

export default Breadcrum;
