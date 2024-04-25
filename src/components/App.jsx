import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasFeedback: false,
  };
}
handleLeaveFeedback = (option) => {
  this.setState((prevState) => ({
    [option]: prevState[option] + 1,
    hasFeedback: true, 
  }));
}
countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};
countPositiveFeedbackPercentage = () => {
  const totalFeedback = this.countTotalFeedback();
  const { good } = this.state;

  if (totalFeedback === 0) {
    return 0;
  }

  return Math.round((good / totalFeedback) * 100);
};
  render() {
    const { good, neutral, bad } = this.state;      
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();  
    const arrState = Object.keys({good, neutral,bad});
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={arrState} onLeaveFeedback={this.handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
      {this.state.hasFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
      ) : (
        <Notification message = "There is no feedback yet."/>
      )}
      </Section>
    </>
  );
}
}
export default App;
