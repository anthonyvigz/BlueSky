import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Photos from './views/Photos';
import './css/home.css';

function App() {
  return (
    <div className="homeBlock">
        <Home />
        <About />
        <Photos />
        <Contact />
    </div>
  );
}

export default App;
