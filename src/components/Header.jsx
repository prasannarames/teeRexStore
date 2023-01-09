import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../appContext";
import "../styles/Header.scss";

export default function Header() {
  const { cart } = useContext(AppContext);
  return (
    <nav className="nav--container">
      <div className="nav--logo">
        <Link to="/" className="link">
          <h3 className="logo">teeRexStore</h3>
        </Link>
      </div>
      <div className="nav--list-container">
        <ul className="nav--list">
          <Link to="/" className="link">
            <li className="nav--list-item">products</li>
          </Link>
          <Link to="/cart" className="link">
            <li className="nav--list-item">
              <span className="cart-count">{cart.length}</span>cart
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
