/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Home from "./Component/Home";
import Sidebar from "./Component/Sidebar";
import AddNotes from "./Component/AddNotes";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("Home");
  return (
    <>
      <div className="app__container">
        <Sidebar
          className="sidebar"
          setCurrentComponent={setCurrentComponent}
        />

        {currentComponent === "Home" ? (
          <Home className="main" />
        ) : (
          <AddNotes/>
        )}
      </div>
    </>
  );
};

export default App;
