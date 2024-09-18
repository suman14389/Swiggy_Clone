import './App.css';
import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer"
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="app-container">
      
        <Header />
      
        <Outlet/>
      
        <Footer />
      
  </div>
  );
}

export default App;
