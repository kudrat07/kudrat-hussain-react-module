/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Main from "./Component/Main";
import Sidebar from "./Component/Sidebar";

const App = () => {
  return (
    <>
      <div className="app__container">
        <Sidebar className = "sidebar"/>
        <Main className="main"/>
      </div>
    </>
  );
};

export default App;
