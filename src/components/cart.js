import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

import "./cart.css";

const Cart = () => {
  const data = useSelector((state) => state.cartData);

  let amount =
    data.length &&
    data.map((item) => item.price).reduce((prev, next) => prev + next);
  return (
    <div>
      <Link to="/">Product List</Link>
      <h1>Cart Page</h1>
      <div className="cart__container">
        <table>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
              </tr>
            );
          })}
        </table>
        <div className="price-details">
          <div className="price-row">
            <p className="description">Amount</p>
            <p className="amount">{amount}</p>
          </div>
          <div className="price-row">
            <p className="description">Discount</p>
            <p className="amount">{amount / 10}</p>
          </div>
          <div className="price-row">
            <p className="description">Tax</p>
            <p className="amount">0000</p>
          </div>
          <div className="price-row">
            <p className="description">Total</p>
            <p className="amount">{amount - amount / 10}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
