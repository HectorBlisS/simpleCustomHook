import React, { useEffect } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import useName from "./hooks";

export default function App() {
  const name = useName();
  //effect hook
  useEffect(() => {
    const value = localStorage.getItem("name");
    name.onChange(value);
  });

  return (
    <div>
      <nav
        style={{
          backgroundColor: "black",
          height: 60,
          color: "white",
          display: "flex"
        }}
      >
        <p>
          <NavLink
            activeStyle={{
              color: "orange"
            }}
            exact
            to="/"
          >
            Home
          </NavLink>
        </p>
        <p>
          <NavLink
            activeStyle={{
              color: "orange"
            }}
            exact
            to="/profile"
          >
            Profile
          </NavLink>
        </p>
        <p
          style={{
            position: "fixed",
            right: 0
          }}
        >
          {name.value}
        </p>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </div>
  );
}
