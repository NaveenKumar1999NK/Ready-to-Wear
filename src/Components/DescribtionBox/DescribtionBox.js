import React from "react";
import "./DescribtionBox.css";

const DescribtionBox = () => {
  return (
    <div className="describtionbox">
      <div className="describtionbox-navigator">
        <div className="describtionbox-nav-box">Describtion</div>
        <div className="describtionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="describtionbox-describtion">
        <p>
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet.it serves
          as a virtual marketplace where bussiness and indivduals can showcase
          their products,interact with customers,and conduct transactions withut
          the need for a pysical presence. E-commerce websites have gained
          immense popularity due to their conveniance accessibility,and the
          global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed describtion,images,prices and any variations (e.g., sizes,
          colors).Each product usually has its own dedicated page with relevant
          information.
        </p>
      </div>
    </div>
  );
};

export default DescribtionBox;
