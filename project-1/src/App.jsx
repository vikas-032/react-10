import React from "react";
import './App.css';
import Navigation from './components/Navigation';
import Herosection from "./components/Hero";


export const App = () => {
  return (
    <div>
        <Herosection />
        <Navigation />
    </div>
  )

};

export default App;
