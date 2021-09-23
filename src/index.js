import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Navigation from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

ReactDOM.render(
  <React.Fragment>
    <Navigation />
    <Header />
    <About />
    <Work />
    <Contact />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
