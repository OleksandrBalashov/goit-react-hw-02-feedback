import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/Feedback-options';
import Section from './components/Section';
import './styles.css';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
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

    handleLeaveFeedback = (event) => {
        const { name } = event.currentTarget;
        this.setState(prevState => ({ [name]: prevState[name] + 1 }))
    };

    render() {
        return (
            <div className="container">
                <Section heading="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.handleLeaveFeedback}
                    />
                    
                    <Statistics
                        options={Object.entries(this.state)}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </div>
        )
    };
};



export default App;