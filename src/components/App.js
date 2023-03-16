import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import { useState } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  const countPositiveFeedback = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    const goodFeedback = good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      {!!countTotalFeedback() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}
