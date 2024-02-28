import React, { useContext } from "react";
import "./ProductDisplay.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
          <img src={product.image} alt=""></img>
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          ></img>
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <div>
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <span>
              <MdOutlineStarPurple500 />
            </span>
          </div>
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-oldprice">
            ${product.old_price}
          </div>
          <div className="product-display-right-newprice">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-describtion">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          tenetur, deleniti possimus quis quidem, corporis vel soluta fuga
          obcaecati, perferendis nihil nostrum fugiat cum incidunt.
        </div>
        <div className="product-disply-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <p className="product-display-right-category">
            <span>Category :</span>Women,T-shirt,Crop Top
          </p>
          <p className="product-display-right-category">
            <span>Tags :</span>Modern,Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
