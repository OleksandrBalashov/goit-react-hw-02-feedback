import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        type="button"
        key={option}
        name={option}
        onClick={onLeaveFeedback}
        className={styles.button}
      >
        {option}
      </button>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
