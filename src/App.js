import React from 'react';
import './App.css';
import Intro from './Intro.js';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Play from './Play.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Router>
          <Switch>
        <Route path="/Intro" component={Intro} exact/>
        <Route path="/" component={Play} exact/>
        </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

/* <a
className="App-link"
href="./Intro.js"
target="_blank"
rel="noopener noreferrer"
>
Let's play!
</a> */


/* <Link to="/Intro">Let's Play</Link> */






// <img src="taco.png" className="App-logo" alt="logo" />
// <div className="text">
//  Extreme Taco Craze
// </div>