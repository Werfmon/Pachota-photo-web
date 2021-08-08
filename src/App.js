import React from "react";
import About from "./components/About";
import Header from "./components/Header";

export default function App() {
  return (
    <React.Fragment>
      <div className="sec-body">
        <Header />
      </div>
      <About />
    </React.Fragment>
  );
}
