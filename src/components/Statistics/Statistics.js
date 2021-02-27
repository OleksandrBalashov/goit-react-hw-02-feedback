import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import styles from './Statistics.module.css'

const Statistics = ({ options, total, positivePercentage }) => (
    <>
        <h2>Statistic</h2>
        {total ?
            (
                <div className={styles.wrap}>
                    <ul className={styles.list}>
                        {options.map(el => (
                            <li key={el[0]}>{el[0]}: {el[1]}</li>
                        ))}
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
    options: [],
    total: 0,
    positivePercentage: 0,
};

Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.array).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;