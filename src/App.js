import './App.css';
import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer"
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="m-0 p-0 w-full">
      
        <Header />
      
        <Outlet/>
      
        <Footer />
      
  </div>
  );
}

export default App;
