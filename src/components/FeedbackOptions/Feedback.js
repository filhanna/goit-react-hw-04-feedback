import React from 'react';

class Feedback extends React.Component {
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
    return (
      <div className="">
        <span className="">Please leave feedback</span>
        <div className="">
          <button type="button" className="" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" className="" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" className="" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <span className="">Statistics</span>
        <ul className="">
          <li className="">Good : {this.state.good}</li>
          <li className="">Neutral : {this.state.neutral}</li>
          <li className="">Bad : {this.state.bad}</li>
          <li className="">Total :{this.countTotalFeedback()}</li>
          <li className="">
            Positive feedback :{this.countPositiveFeedback()}
          </li>
        </ul>
      </div>
    );
  }
}
export default Feedback;
