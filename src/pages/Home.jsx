import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Header />
      <Search />
      <Product />
    </>
  );
}
