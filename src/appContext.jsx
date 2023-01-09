import React, { useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const API_URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";

const AppContextProvider = (props) => {
  // products
  const [productData, setProductData] = useState([]);

  // search bar
  const [search, setSearch] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  //cart
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // products
  async function fetchProducts() {
    const response = await axios.get(API_URL);
    setProductData(response.data);
  }

  // search bar
  const changeSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const changeSearchedProducts = () => {
    const newSearchResults = productData.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.gender.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedProducts(newSearchResults);
  };

  // cart
  const handleCart = (item) => {
    setCart([...cart, item]);
  };

  const handleCartPrice = () => {
    let res = 0;
    cart.map((item) => (res += item.product.quantity * item.product.price));
    setPrice(res);
  };

  const handleDelete = (productId) => {
    const res = cart.filter((item) => item.product.id !== productId);

    setCart(res);
  };

  const handleQuantity = (products, operator) => {
    let idx = -1;

    cart.forEach((cartData, index) => {
      if (cartData.product.id === products.id) idx = index;
    });

    const newArr = cart;
    newArr[idx].product.quantity += operator;

    if (newArr[idx].product.quantity === 0) {
      newArr[idx].product.quantity = 1;
    }

    setCart([...newArr]);
  };

  return (
    <AppContext.Provider
      value={{
        productData,
        fetchProducts,
        search,
        setSearch,
        searchedProducts,
        changeSearch,
        changeSearchedProducts,
        cart,
        setCart,
        handleCart,
        price,
        handleCartPrice,
        handleDelete,
        handleQuantity,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
