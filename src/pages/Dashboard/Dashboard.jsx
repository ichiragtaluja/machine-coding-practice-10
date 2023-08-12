import React from "react";
import { useData } from "../../context/DataContext";
import "./Dashboard.css";

export const Dashboard = () => {
  const { state } = useData();
  const totalStock = state.reduce((acc, curr) => acc + curr.stock, 0);
  const totalDelivered = state.reduce((acc, curr) => acc + curr.delivered, 0);
  const lowItems = state.reduce(
    (acc, curr) => (curr.stock <= 10 ? acc + 1 : acc),
    0
  );
 

  return (
    <div className="dashboard">
      <div className="total-stock">
        <div className="dashboard-widget">
          <p>{totalStock}</p>
          <p>Total Stock</p>
        </div>
      </div>
      <div className="total-delivered">
        <div className="dashboard-widget">
          <p>{totalDelivered}</p>
          <p>Total Delivered</p>
        </div>
      </div>
      <div className="low-stock-items">
        <div className="dashboard-widget">
          <p>{lowItems}</p>
          <p>Low Stock Items</p>
        </div>
      </div>
    </div>
  );
};
