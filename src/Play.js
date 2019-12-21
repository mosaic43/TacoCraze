import React from 'react';
import { Link } from 'react-router-dom';




function Play() {
    return (
      <div className="App-Header">
           <img src="taco.png" className="App-logo" alt="logo" />
        <div className="text2">
         Taco Quest
        </div>
        <br />
         <Link to="/Intro"> <img src="ticket2.png" className="ticket" /></Link>
      </div>
    );
  }
  
  export default Play;
  