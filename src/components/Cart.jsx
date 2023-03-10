import React, { useContext, useEffect } from "react";
import { AppContext } from "../appContext";
import "../styles/Cart.scss";
export default function Cart() {
  const { cart, price, handleCartPrice, handleDelete, handleQuantity } =
    useContext(AppContext);

  useEffect(() => {
    handleCartPrice();
  });

  return (
    <section className="cart--container">
      {cart?.map(({ product }) => (
        <div className="cart--card mr">
          <div>
            <img
              className="cart--image mr"
              src={product.imageURL}
              alt="products"
            />
          </div>
          <div className="cart--details mr">
            <p>{product.name}</p>
            <p>
              {product.price} {product.currency}
            </p>
          </div>
          <div className="cart--qty-btn mr">
            <button onClick={() => handleQuantity(product, +1)}>➕</button>
            <span className="cart--qty">{product.quantity}</span>
            <button onClick={() => handleQuantity(product, -1)}>➖</button>
          </div>
          <div className="cart--delete-btn mr">
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        </div>
      ))}
      <hr></hr>
      <div>
        <h3>
          Total Amount →<span className="cart--total"> RS {price}</span>
        </h3>
      </div>
    </section>
  );
}
