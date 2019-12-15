import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MainQuiz from './QuizComponents/MainQuiz.js'
// import MainQuiz from './MainQuiz.js/index.js';
// import QuizData from '/QuizComponents/QuizData';

  function Intro() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <div className="text">  
          In the beginning there were tacos
          <br />
          Lots and lots of tacos
          <br />
          Then the evil emperor Taco Grinch
          <br />
          Banned all tacos
          <br /> 
          Closed down nearly every taco truck and taqueria around
          <br />
          
          
          </div>
          <div className="text">
        
          </div>
          <div className="text2">
            <Link to="/MainQuiz">Start Quiz</Link>
          </div>
        </header>
      </div>
    );
  }
  
  export default Intro;
  

  // function Intro() {
  //   return (
  //     <div className="Intro">
  //       <header className="Intro-header">
  //         <div className="text">
  //         Test
  //         </div>
  //         <div className="text">
  //         <Router>
  //         <Switch>
  //       <Route path="/Quiz" component={Quiz} exact/>
  //       <Route path="/Intro" component={Intro} exact/>
  //       </Switch>
  //       </Router>
  //         </div>
  //         <div className="text">
  //           <Link to="/Quiz">Start Quiz</Link>
  //         </div>
  //       </header>
  //     </div>
  //   );
  // }
  
  // export default Intro;




  // function Intro() {
  //   return (
  //     <div className="Intro">
  //       <header className="Intro-header">
  //         <div className="text">
  //         Test
  //         </div>
  //       </header>
  //     </div>
  //   );
  // }




