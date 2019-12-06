import React from 'react';
import './Quiz.css';

class MultipleChoice extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            questions: [
                "What day is National Taco Day in the United States?",
                "When tacos were invented around 1,000 and 500 B.C., what were the tortillas used for?",
                "According to contemprary historian Jeffrey Pilchner, the first reference to the word taco was coined in the 1800s by?",
                "Who invented the hard shell taco?",
                "The first tacos trucks originated in?",
                "The world's most expensive taco served at Frida in the Baja Peninsula costs?",
                "The largest serving of tacos was ____ served by over ____ UberEATS drivers?"


            ],
            answers: [
                "October 4th",
                "An edible spoon to scoop up the ingredients.",
                "Mexican silver miners who used the word tacos de minero which referenced the gunpowder pouches used in the silver mines.",
                "Glenn Bell in the United",
                "New York in 1966",
                "$25,000",
                "36,300 and 600"
            ],
            falseAnswer1: [
                "November 3rd",
                "The tortilla was the main dish and the rest of the ingredients were used as flavoring.",
                "A Gautamalan newspaper which referenced taco de Kak'ik as a way to describe a spoon which the Mayans used to eat stew.",
                "The Chili Queens in San Antonio",
                "Los Angeles in 1974",
                "$5,000",
                "12,247 and 25",
                

            ],
            falseAnswer2: [
                "November 23rd",
                "A flat bread.",
                "El Universal, a Mexican newspaper, when describing a popular street food.",
                "Agustin Gaytan in Mexico",
                "Monterrey in 1985",
                "$200",
                "3,300 and 11",


            ],
            falseAnswer3: [
                "April 15th",
                "It was used as a plate.",
                "The word taco was actually coined in the U.S, to describe the new street food in Los Angeles.",
                "Hernando Cortez in Mexico",
                "San Antonio in 1993",
                "$25",
                "7,200 and 49",

            ],
        }
    }

 


}





// function Quiz (){
//     return (
//         <div className="Intro">

//         </div>
//     );
// }



ReactDOM.render(<Quiz />, document.getElementById('root'))