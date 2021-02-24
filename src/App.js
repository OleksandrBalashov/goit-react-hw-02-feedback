import React, { Component } from 'react';
import Statistics from './components/Statistics';
import PropTypes from 'prop-types';
import FeedbackOptions from './components/Feedback-options';
import Section from './components/Section';
import './styles.css';

class App extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    };

    static propTypes = {
        state: PropTypes.objectOf(PropTypes.number.isRequired),
        handleGoodFeedbackClick: PropTypes.func,
        handleNeutralFeedbackClick: PropTypes.func,
        handleBadFeedbackClick: PropTypes.func,
        countTotalFeedback: PropTypes.func,
        countPositiveFeedbackPercentage: PropTypes.func,
        render: PropTypes.func,
    };

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };

    handleGoodFeedbackClick = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }));
    };

    handleNeutralFeedbackClick = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
    };

    handleBadFeedbackClick = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    };

    countTotalFeedback = () => {
        const arrStateValue = Object.values(this.state);
        
        const total = arrStateValue.reduce((acc, el) => acc + el);
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const percentage = good * 100 / this.countTotalFeedback();
        return Math.ceil(percentage);
    };

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div className="container">
                <Section heading="Please leave feedback">
                    <FeedbackOptions
                        options={{
                            good: "Good",
                            neutral: "Neutral",
                            bad: "Bad"
                        }}
                        goodLeaveFeedback={this.handleGoodFeedbackClick}
                        neutralLeaveFeedback={this.handleNeutralFeedbackClick}
                        badLeaveFeedback={this.handleBadFeedbackClick}
                    />
                    
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </div>
        )
    };
};

export default App;