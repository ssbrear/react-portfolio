import React from "react";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="App">
      <Route path="/" exact component={Home} />
      <Route path="/portfolio" exact component={Portfolio} />
    </div>
  );
}

export default App;
