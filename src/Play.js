import React from 'react';
import { Link } from 'react-router-dom';




function Play() {
    return (
      <div className="App-Header">
           <img src="taco.png" className="App-logo" alt="logo" />
        <div className="text">
         Extreme Taco Craze
        </div>
         <Link to="/Intro">Let's Play</Link>
      </div>
    );
  }
  
  export default Play;
  