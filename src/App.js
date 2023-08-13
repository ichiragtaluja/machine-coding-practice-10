import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Departments } from "./pages/Departments/Departments";
import { Products } from "./pages/Products/Products";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Navbar } from "./components/Navbar/Navbar";
import { AddNewProduct } from "./pages/AddNewProduct/AddNewProduct";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/departments" element={<Departments />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/add-new-product" element={<AddNewProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
