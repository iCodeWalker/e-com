import React from "react";
import { useSelector } from "react-redux";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  // To access data from redux store inside react components we use useSelector hook provided to us by
  // react-redux

  // useSelector hook takes a callback function, whose argument is state
  const data = useSelector((state) => state.cartData);

  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logo">E-Com</h1>
      </Link>
      <Link to="/cart">
        <div className="header__container">
          <span>{data.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="cart"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
