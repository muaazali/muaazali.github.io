import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
