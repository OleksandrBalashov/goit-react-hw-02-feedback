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
                {option}</button>
        ))}
    </>
);

FeedbackOptions.defaultProps = {
    options: []
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;