import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback-options.module.css';

const FeedbackOptions = ({
    options: { good, neutral, bad },
    goodLeaveFeedback,
    neutralLeaveFeedback,
    badLeaveFeedback
}) => (
    <div>
        <button
            type="button"
            onClick={goodLeaveFeedback}
            className={styles.button}>{good}
        </button>
        <button
            type="button"
            onClick={neutralLeaveFeedback}
            className={styles.button}>{neutral}
        </button>
        <button
            type="button"
            onClick={badLeaveFeedback}
            className={styles.button}>{bad}
        </button>
    </div>
);

FeedbackOptions.defaultProps = {
    good: "",
    neutral: "",
    bad: "",
}

FeedbackOptions.propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
};

export default FeedbackOptions;