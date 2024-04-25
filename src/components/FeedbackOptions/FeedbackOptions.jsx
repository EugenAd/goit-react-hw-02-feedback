import React from "react";
import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css"
function FeedbackOptions ({options, onLeaveFeedback}){
    return (<div className= {styles.buttons}>
        {options.map((option) => <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>)}</div>)
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;