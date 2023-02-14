import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
    {/* wherever we put this Outlet element our data from 
    the nested child routes will be displayed there */}
    
    <Outlet />
      <input type="search" placeholder="search here" />
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      
    </>
  );
};

export default Products;
