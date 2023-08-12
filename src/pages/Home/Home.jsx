import React from "react";
import { useData } from "../../context/DataContext";

const Home = () => {
  const { name } = useData();
  return <div>{name}</div>;
};

export default Home;
