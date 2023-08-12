import React from "react";
import { useData } from "../../context/DataContext";
import "./Departments.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Departments = () => {
  const navigate = useNavigate();
  const { state, departments, selectedDepartment, setSelectedDepartment } =
    useData();

  return (
    <div className="department">
      {departments.map((department) => (
        <div
          onClick={() => {
            setSelectedDepartment(department);
            navigate("/products");
          }}
          className="department-widget"
        >
          {department}
        </div>
      ))}
    </div>
  );
};
