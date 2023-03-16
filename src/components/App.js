import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import React from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedback();
    const feedbackOptionsCallback = {
      Good: this.handleGood,
      Neutral: this.handleNeutral,
      Bad: this.handleBad,
    };
    const handleLeaveFeedback = clickedButtonLabel => {
      feedbackOptionsCallback[clickedButtonLabel]();
    };

    return (
      <div className={css.container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(feedbackOptionsCallback)}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        {!!countTotalFeedback ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
