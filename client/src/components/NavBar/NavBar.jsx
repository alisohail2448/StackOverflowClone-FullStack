import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/stackLogo.png";
import search from "../../assets/search.svg";
import "./NavBar.css";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

const NavBar = () => {
  const User = null;
  return (
    <nav className="main-nav" >
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>

        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            
              <Avatar
                backgroundColor="#008dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
                cursor
              >
                <Link to="/User" style={{color: 'white', textDecoration: 'none'}} >M</Link>
              </Avatar>
            
            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
