import React from "react";
import Navigation from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="body">
      <Navigation />
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
