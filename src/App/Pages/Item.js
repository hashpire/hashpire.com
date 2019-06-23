import React from 'react';
import { Link } from "react-router-dom";

function Item() {
  return (
    <div>
      <h2>Item</h2>
      <Link to='/category/hi'></Link>
    </div>
  )
}

export default Item;