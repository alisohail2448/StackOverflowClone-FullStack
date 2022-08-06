import React from 'react'
import { useLocation } from 'react-router-dom';
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import './Users.css'
import UsersList from './UsersList';

const Users = () => {
  
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSideBar/>

      <div className="home-container-2" style={{marginTop: '50px'}}>
        <h1 style={{fontWeight:'400'}} >Users</h1>
      <UsersList/>
      </div>
    </div>
  )
}

export default Users