import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="container text-c">
      <img
        src="https://i.ibb.co/ggvGwS2/P1244698-2.jpg"
        alt="P1244698-2"
        border="0"
      />
      <h1 className="mt-20">Print your ideas to anything!</h1>
      <Link to="/products" className="button pulse unbordered">
        View our products
      </Link>
    </div>
  );
};

export default MainPage;
