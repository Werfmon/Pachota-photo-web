import React from "react";
import About from "./components/About";
import BackButton from "./components/BackButton";
import Header from "./components/Header";

export default function App() {
  return (
    <React.Fragment>
      <div className="sec-body">
        <Header />
      </div>
      <About />
      <BackButton />
    </React.Fragment>
  );
}
