import React from "react";
import "./AddNewProduct.css";
import { useData } from "../../context/DataContext";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const AddNewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    id: uuid(),
    department: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: "",
  });
  const { departments, dispatch } = useData();
  return (
    <div>
      <h1>Add New Product</h1>
      <label value="" disabled selected for="department" className="label">
        Department
      </label>

      <select
        onChange={(e) =>
          setNewProduct({ ...newProduct, department: e.target.value })
        }
        id="department"
      >
        <option>Select Departments</option>
        {departments.map((department) => (
          <option value={department}>{department}</option>
        ))}
      </select>

      <label className="label" for="name">
        Name
      </label>
      <input
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        id="name"
        type="text"
      />

      <label className="label" for="description">
        Description
      </label>
      <textarea
        onChange={(e) =>
          setNewProduct({ ...newProduct, description: e.target.value })
        }
        id="description"
        type="text"
      />

      <label className="label" for="price">
        Price
      </label>
      <input value="0" id="price" type="text" />

      <label className="label" for="stock">
        Stock
      </label>
      <input value="0" id="stock" type="text" />

      <label className="label" for="SKU">
        SKU
      </label>
      <input
        onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
        id="SKU"
        type="text"
      />

      <label className="label" for="supplier">
        Supplier
      </label>
      <input
        onChange={(e) =>
          setNewProduct({ ...newProduct, supplier: e.target.value })
        }
        id="supplier"
        type="text"
      />

      <label className="label" for="delivered">
        Delivered
      </label>
      <input value="0" id="delivered" type="text" />

      <label className="label" for="image-URL">
        Image URL
      </label>
      <input
        onChange={(e) =>
          setNewProduct({ ...newProduct, imageUrl: e.target.value })
        }
        id="image-URL"
        type="text"
      />

      <button
        onClick={() => dispatch({ type: "ADDPRODUCT", payload: newProduct })}
        className="label"
      >
        Add Product
      </button>
    </div>
  );
};
