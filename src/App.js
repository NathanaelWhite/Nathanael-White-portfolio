import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
