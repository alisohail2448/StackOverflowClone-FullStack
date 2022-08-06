import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import logo from "../../assets/stackLogo.png";
import search from "../../assets/search.svg";
import "./NavBar.css";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import { setCurrentUser } from "../../actions/currentUserAction";
import decode from 'jwt-decode'

const NavBar = () => {
  const dispatch = useDispatch();
  var User = useSelector((state) =>(state.currentUserReducer));
  const navigate = useNavigate();

  
  const handleLogout = () =>{
    dispatch({type: 'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null));
  }


  useEffect(() => {
    const token = User?.token;
    if(token){
      const decodeToken = decode(token)
      if(decodeToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])
  


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
                <Link to={`/Users/${User?.result._id}`} style={{color: 'white', textDecoration: 'none'}} >{User.result.name.charAt(0).toUpperCase()}</Link>
              </Avatar>
            
            <button className="nav-item nav-links" onClick={handleLogout} >Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
