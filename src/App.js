import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
