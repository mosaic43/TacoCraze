import React from 'react';
import PropTypes from 'prop-types'

  function AnswerOption(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.isCorrect === props.answer}
          id={props.answerContent}
          value={props.isCorrect}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerContent}>
          {props.answerContent}
        </label>
      </li>
    );
  }

  AnswerOption.propTypes = {
    isCorrect: PropTypes.bool.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default AnswerOption;