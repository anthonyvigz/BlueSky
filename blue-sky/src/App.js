import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import './css/home.css';

function App() {
  return (
    <div className="homeBlock">
            <div className="navbar">
                <h1>log here</h1>
                <ul className="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        <Home />
        <About />
        <Contact />
    </div>
  );
}

export default App;
