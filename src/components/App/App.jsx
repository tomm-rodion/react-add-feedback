import { Component } from 'react';
import { Wrapper, Contaner } from './App.styled';

import { Section } from '../Section/Section';
import { FeetbackOption } from '../FeetbackOption/FeetbackOption';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { ContactBook } from 'components/ContactBook/ContactBook';

export class App extends Component {
  state = {
    optionFeedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  componentDidMount() {
    const { good, neutral, bad } = this.state.optionFeedback;
    if (good + neutral + bad === 0) {
      const prevsFeedback = JSON.parse(localStorage.getItem('feedback'));
      console.log('Отримали та розпарсили з localStorage : ', prevsFeedback);
      this.setState(prevsFeedback);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      console.log('Якась властивість в STATE обновилося ');
      localStorage.setItem('feedback', JSON.stringify(this.state));
    }
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.optionFeedback;
    return good + neutral + bad;
  };

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
              options={Object.keys(this.state.optionFeedback)}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          <Section title={'Statistics'}>
            {!this.countTotalFeedback() ? (
              <Notification massage={'There is no feedback'}></Notification>
            ) : (
              <Statistics
                state={this.state.optionFeedback}
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
