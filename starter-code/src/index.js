import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const header=(
    <div className="title">
        <nav className="nav-bar">
          <img src="images/ironhack-logo.svg" alt="" />
          <img src="images/menu-top.svg" alt="" />
        </nav>
        <div className="header-text">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn a Frontend Framework from scratch, to become a
            Developer.
          </p>
          <button>Awesome!</button>
        </div>
      </div>
)

const features=(
    <div className="features-list">
      <div className="feature">
        <img src="images/icon1.png" alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UI.</p>
      </div>
      <div className="feature">
        <img src="images/icon2.png" alt="" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="feature">
        <img src="images/icon3.png" alt="" />
        <h3>Single-way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="feature">
        <img src="images/icon4.png" alt="" />
        <h3>JSX</h3>
        <p>Statically typed, designed to run on modern browsers.</p>
      </div>
    </div>
)

const element=(
    <div className="main">
    <div className="header">
        {header}
    </div>
    {features}
    </div>
)

ReactDOM.render(element, document.getElementById("root"));
