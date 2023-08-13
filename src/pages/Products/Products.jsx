import React from "react";
import { useData } from "../../context/DataContext";
import "./Products.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();
  const {
    state,
    dispatch,
    departments,
    selectedDepartment,
    setSelectedDepartment,
  } = useData();
  const [sortBy, setSortBy] = useState("Name");
  const [isLowStockChecked, setIsLowStockChecked] = useState(false);
  const products =
    selectedDepartment === "All Departments"
      ? state
      : state.reduce(
          (acc, curr) =>
            curr.department === selectedDepartment ? [...acc, curr] : acc,
          []
        );

  let lowItemProducts = isLowStockChecked
    ? products.filter((product) => product.stock <= 10)
    : products;

  lowItemProducts =
    sortBy === "Name"
      ? lowItemProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        })
      : sortBy === "Price"
      ? lowItemProducts.sort((a, b) => a.price - b.price)
      : lowItemProducts.sort((a, b) => {
          return a.stock - b.stock;
        });
  return (
    <div className="products">
      <div className="product-header">
        <span>Products</span>

        <select onChange={(e) => setSelectedDepartment(e.target.value)}>
          <option value="All Departments">All Departments</option>
          {departments.map((department) => (
            <option
              selected={selectedDepartment === department}
              value={department}
            >
              {department}
            </option>
          ))}
        </select>

        <label>
          <input
            checked={isLowStockChecked}
            onChange={() => setIsLowStockChecked(!isLowStockChecked)}
            type="checkbox"
          />
          Low stock Items
        </label>

        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="Name">Name</option>
          <option value="Price">Price</option>
          <option value="Stock">Stock</option>
        </select>

        <button onClick={() => navigate("/add-new-product")}>New</button>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
        {lowItemProducts?.map((product) => (
          <tr key={product?.id}>
            <td>
              <img className="table-pic" src={product?.imageUrl} />
            </td>
            <td>{product?.name}</td>
            <td>{product?.description}</td>
            <td>{product?.price}</td>
            <td>{product?.stock}</td>
            <td>{product?.supplier}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
