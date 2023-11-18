import React from "react";
import { BsCartFill } from "react-icons/bs";

function NavBar({ cartNum, cartCost }) {
  return (
    <div className="navBar">
      <div className="cart-items">
        <a href="" style={{ textDecoration: "none", color: "black" }}>
          My Store
        </a>
        <BsCartFill />
        <p className="cart-num">
          {cartNum}
          {" items"}
        </p>
      </div>
    </div>
  );
}

export default NavBar;
