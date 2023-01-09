import React, { useContext, useEffect } from "react";
import { AppContext } from "../appContext";
import ProductList from "./ProductList";
import "../styles/ProductList.scss";

export default function Product() {
  const {
    fetchProducts,
    productData,
    changeSearchedProducts,
    search,
    searchedProducts,
  } = useContext(AppContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    changeSearchedProducts();
  }, [search]);

  return (
    <>
      {search ? (
        <div className="card--container">
          {searchedProducts.map((product) => {
            const { id } = product;
            return <ProductList key={id} product={{ product }} />;
          })}
        </div>
      ) : (
        <div className="card--container">
          {productData.map((product) => {
            const { id } = product;
            return <ProductList key={id} product={{ product }} />;
          })}
        </div>
      )}
    </>
  );
}
