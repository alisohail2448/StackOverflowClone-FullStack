import React from 'react'
import HomeMainBar from '../../HomeMainBar/HomeMainBar'
import LeftSideBar from '../../LeftSideBar/LeftSideBar'
import RightSideBar from '../../RightSideBar/RightSideBar'
import "../../../App.css"

const Questions = () => {
  return (
    <div className="home-container-1">
      <LeftSideBar/>
      <div className="home-container-2">
      <HomeMainBar/>
      <RightSideBar/>
      </div>
    </div>
  )
}

export default Questions