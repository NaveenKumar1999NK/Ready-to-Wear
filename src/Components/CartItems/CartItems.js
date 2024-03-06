import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import emptycart from "../Assets/emptycart.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  let length = false;
  for (let key in cartItems) {
    if (cartItems[key] > 0) {
      length = true;
      break;
    } else {
      length = false;
    }
  }
  return (
    <div>
      {length === true ? (
        <div className="cartitems">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div key={e.id}>
                  <div className="cartitems-format">
                    <img
                      src={e.image}
                      alt=""
                      className="cartitems-product-icon"
                    />
                    <p>{e.name}</p>
                    <p>${e.new_price} </p>
                    <button className="caritems-quantity">
                      {cartItems[e.id]}
                    </button>
                    <p>${e.new_price * cartItems[e.id]} </p>
                    <button
                      className="cartitems-remove-icon"
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    >
                      Remove
                    </button>
                    {/* <img
                      className="cartitems-remove-icon"
                      src={remove_icon}
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                      alt=""
                    /> */}
                  </div>
                  <hr />
                </div>
              );
            }
            // Added a return statement to cover the case where cartItems[e.id] <= 0
            return null;
          })}
          <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Cart Totals</h1>
              <div>
                <div className="cartitems-total-item">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                  <h3>Total</h3>
                  {/* Use a separate function call for total amount */}
                  <h3>${getTotalCartAmount()}</h3>
                </div>
                <hr />
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code"></input>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="emptycart-img">
          <img src={emptycart}></img>
        </div>
      )}
    </div>
  );
};

export default CartItems;
