import React, { useContext } from "react";
import "../styles/ProductList.scss";
import { AppContext } from "../appContext";

export default function ProductList({ product }) {
  //   console.log(product, "logss");
  const { handleCart } = useContext(AppContext);

  return (
    <>
      <div className="card">
        <img
          className="card--img"
          src={product.product.imageURL}
          alt="products"
        />
        <div className="card--name">{product.product.name}</div>
        <div className="card--info">
          <p className="card--text">
            {product.product.currency} {product.product.price}
          </p>
          <button className="cart--btn" onClick={() => handleCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
