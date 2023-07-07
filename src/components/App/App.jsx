import { Component } from 'react';
import { Wrapper, Contaner } from './App.styled';

import { Section } from '../Section/Section';
import { FeetbackOption } from '../FeetbackOption/FeetbackOption';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { ContactBook } from 'components/ContactBook/ContactBook';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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
      <Wrapper>
        <Contaner>
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
        </Contaner>
        <Contaner>
          <Section title={'Phonebook'}>
            <ContactBook></ContactBook>
          </Section>
        </Contaner>
      </Wrapper>
    );
  }
}
