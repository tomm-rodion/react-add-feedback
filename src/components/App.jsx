import { Component } from 'react';

import { Section } from './Section/Section';
import { FeetbackOption } from './FeetbackOption/FeetbackOption';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // changeFeedbackGood = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // changeFeedbackNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // changeFeedbackBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = option => {
    return this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeetbackOption
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {!this.countTotalFeedback() ? (
            <Notification massage={'There is no feedback'}></Notification>
          ) : (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
