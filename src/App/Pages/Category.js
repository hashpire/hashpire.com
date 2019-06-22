import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Category() {
  return (
    <div>
      <h2>Category</h2>
      <Link to='/category/hi'>Hi</Link>
    </div>
  )
}

export default Category;