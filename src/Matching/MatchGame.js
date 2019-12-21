import React from "react";
import { MatchingData } from "./MatchData";
import backCard from "../Matching/backCard.jpg";
import MatchGame from "./MatchGame.css";
import { Link } from 'react-router-dom';

class MatchingGame extends React.Component {

  state = {
    pairedAmount: 0,
    cardA: [],
    cardB: [],
    tries: 0,
    restrictedClick: false,
    restrictedMessage: ""
  };

 
  checkRestrictions = answer => {
    const { restrictedClick, restrictedMessage } = this.state;
    if (answer.paired === true) {
      this.setState({
        restrictedClick: true,
        restrictedMessage: "Card already paired. Please try another card"
      });
    }
    else if (answer.display === true) {
      this.setState({
        restrictedClick: true,
        restrictedMessage: "Card already clicked. Please try another card"
      });
    }
  };

  setInitial = addPaired => {
    const { pairedAmount } = this.state;
    this.setState({
      pairedAmount: pairedAmount + addPaired,
      cardA: 0,
      cardB: 0,
      tries: 0
    });
  };

  checkAnswer = answer => {
    this.checkRestrictions(answer);

    this.timer2 = setTimeout(() => {
      if (this.state.restrictedClick === false) {
        MatchingData[answer.id].display = true;
        const { cardA, cardB, tries, pairedAmount } = this.state;

        this.setState({
          tries: tries + 1
        });

        setTimeout(() => {
          if (this.state.tries === 1) {
            this.setState({
              cardA: answer
            });
          } else {
            this.setState({
              cardB: answer
            });
            this.timer3 = setTimeout(() => {
              if (this.state.cardA.value == this.state.cardB.value) {
                MatchingData[this.state.cardA.id].paired = true;
                MatchingData[this.state.cardB.id].paired = true;
                this.setInitial(1);
              } else {
                this.timer = setTimeout(
                  (MatchingData[this.state.cardA.id].display = false),
                  (MatchingData[this.state.cardB.id].display = false),
                  1000
                );

                this.timer2 = setTimeout(() => {
                  this.setInitial(0);
                }, 800);
              }
            }, 800);
          }
        }, 500);
      }
      this.setState({
        restrictedClick: false,
        restrictedMessage: ""
      });
    }, 800);
  };

  render() {
    return (
      <div className="result">
        <h3>Let's Match! </h3>
        <div>
          Click on Cards to start pairing
          <br />
          {this.state.restrictedClick ? (
            <div>{this.state.restrictedMessage}</div>
          ) : null}
          <ul>
            {MatchingData.map((item, index) => (
              <li
                className="ui floating message options"
                key={index}
                onClick={() => {
                  this.checkAnswer(item);
                }}
              >
                {item.display ? (
                  <img src={item.image} />
                ) : (
                  <img src={backCard} className="card" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/GameOver"> Go eat your tacos!!</Link>
      </div>
    );
  }
}

export default MatchingGame;
