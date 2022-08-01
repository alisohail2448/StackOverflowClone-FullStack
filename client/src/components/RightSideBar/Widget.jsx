import React from "react";
import "./RightSideBar.css";
import comment from "../../assets/message-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blackLogo.png";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
        <img src={pen} alt="pen" width="18" />
          <p>Measurable and meaningful skill levels for developers </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>San Francisco? More like San Francis-go (Ep. 468) </p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="comment" width="18" />
          <p>Announcing the Stacks Editor Beta release!  </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="comment" width="18" height="18" />
          <p>The [shopping] and [shop] tags are being burninated  </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>36</p>
          <p>What should I do when the question is fine, but existing answers "need more... </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>24</p>
          <p>San Francisco? More like San Francis-go (Ep. 468) </p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
