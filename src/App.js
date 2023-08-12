import "./App.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Explore } from "./pages/Explore/Explore";

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>{" "}
      <NavLink to="/explore">Explore</NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
      </Routes>
    </div>
  );
}

export default App;
