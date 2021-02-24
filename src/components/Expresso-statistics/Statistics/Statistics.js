import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <h2>Statistic</h2>

        {total ?
            (
                <div className={styles.wrap}>
                    <ul className={styles.list}>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                    </ul>
        
                    <p>Total: {total}</p>
                    <p>Positive feetback: {positivePercentage}%</p>
                </div>
            )
            : <Notification message="No feedback given" />
        }
    </>
);

Statistics.defaultProps = {
    total: 0,
    positivePercentage: 0,
};

Statistics.propTypes = {
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;