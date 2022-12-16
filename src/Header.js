import React from "react";
import { NavLink } from "react-router-dom";
import cart from "./images/black-shopping-cart-10926.png";

export default function Header(props) {
  return (
    <div className="header-container">
      <h2 className="header-title">
        <span>L</span>
        <span>O</span>
        <span>G</span>
        <span>O</span>
      </h2>
      <nav className="header-nav">
        <ul>
          <NavLink to="/restaurant-react-app">
            <li>Home</li>
          </NavLink>
          <NavLink to="/menu">
            <li>Menu</li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
      <NavLink to="/cart">
        <div className="cart-box">
          <img className="cart-icon" src={cart} alt="icon" />
          <p className="cart-counter">{props.counter}</p>
        </div>
      </NavLink>
    </div>
  );
}
