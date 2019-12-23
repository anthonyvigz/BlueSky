import React from 'react';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Photos from './views/Photos';
import Team from './views/Team';
import './css/home.css';

function App() {
  return (
    <div className="homeBlock">
        <Home />
        <About />
        <Photos />
        <Team />
        <Contact />
        <div className="footer">
           <h4>Copyright © 2020 Blue Sky Lab, LLC - All Rights Reserved.</h4>
        </div>
    </div>
  );
}

export default App;
