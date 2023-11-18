import React from "react";
import OneProduct from "./OneProduct";
import { useState } from "react";

const Products = ({ products, onAdd, onRemove }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    const filtered = products.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className="all-products">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredData.map((item) => (
          <OneProduct
            key={item.id}
            product={item}
            onAdd={onAdd}
            onRemove={onRemove}
          >
            {item.name}{" "}
          </OneProduct>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => (
          <OneProduct
            key={item.id}
            product={item}
            onAdd={onAdd}
            onRemove={onRemove}
          >
            {item.name}{" "}
          </OneProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
