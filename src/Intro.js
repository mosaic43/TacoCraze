import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import MainQuiz from './QuizComponents/MainQuiz.js'
import troll from './troll.png';


  function Intro() {
    return (
      <div className="Intro">
        <header className="Intro-header">
          <div className="text">  
          <div className="one">
          In the beginning there were tacos
          </div>
          <br />
          <div className="two">
          Lots and lots of tacos
          </div>
          <br />
          <div className="three">
          Then the evil emperor Taco Troll
          </div>
          <br />
          <div className="three2">
          <img src={troll} className="three2" />
          </div>
          <br />
          <div className="four">
          Banned all tacos
          </div>
          <div className="four2">
         
          </div>
          <br /> 
          <div className="five">
          Closing down nearly every taco truck 
          and taqueria around
          </div>
          <div className="six">
          Now you're hungry
          </div>
          <div className="seven">
          And you've made it your mission to save the tacos
          </div>
          <div className="eight">
          Complete the quests to save the day and take the tacos back
          </div>
          <br />
          <div className="nine">
            <Link to="/MainQuiz">Start Quiz</Link>
          </div>
          
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




