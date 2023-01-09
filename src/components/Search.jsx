import React, { useContext } from "react";
import { AppContext } from "../appContext";
import "../styles/Search.scss";

function Search() {
  const { search, changeSearch, setSearch } = useContext(AppContext);

  function handleChange(e) {
    setSearch(e);
  }

  return (
    <div className="search-filter-container">
      <div>
        <input
          className="search-box"
          type="text"
          onChange={(e) => changeSearch(e.target.value)}
          placeholder="Search by the name, type, color ... "
          value={search}
        />
      </div>
      <div className="filter-container">
        <div>
          <select
            className="filter-box"
            onClick={(e) => handleChange(e.target.value)}
          >
            <option value="">filter by color</option>
            <option value="Black">Black</option>
            <option value="Green">Green</option>
            <option value="Pink">Pink</option>
            <option value="Purple">Purple</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
            <option value="Yellow">Yellow</option>
          </select>
        </div>
        <div>
          <select
            className="filter-box"
            onClick={(e) => handleChange(e.target.value)}
          >
            <option value="">filter by gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </div>
        <div>
          <select
            className="filter-box"
            onClick={(e) => handleChange(e.target.value)}
          >
            <option value="">filter by type</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Polo">Polo</option>
            <option value="Round">Basic</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
