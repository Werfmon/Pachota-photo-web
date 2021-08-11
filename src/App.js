import React from "react";
import BackButton from "./components/BackButton";
import Header from "./components/Header";
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {

  return (
    <React.Fragment>
      <Router>
        
          <Header />
        
      <BackButton />
      </Router>
    </React.Fragment>
  );
}
