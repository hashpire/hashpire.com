import React from 'react';
import { Link } from "react-router-dom";
import RouteWithSubRoutes from '../Utils/RouteWithSubRoutes';

export function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

export function Bus() {
  return <h3>Bus</h3>;
}

export function Cart() {
  return <h3>Cart</h3>;
}

