import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="text" placeholder="abc123@gmail.com"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
