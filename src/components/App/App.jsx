import { Component } from 'react';
import { Wrapper, Contaner } from './App.styled';

import { Section } from '../Section/Section';
import { FeetbackOption } from '../FeetbackOption/FeetbackOption';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { ContactBook } from 'components/ContactBook/ContactBook';
// import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    optionFeedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
    // showModal: false,
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
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  //   console.log('toggleModal змінився!');
  // };

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
        {/* {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>😎</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur iure repellendus eaque temporibus odio dolorem nemo.
              Odio corporis veniam, reprehenderit voluptatibus quaerat culpa
              voluptates temporibus, assumenda delectus quam labore numquam.
            </p>
            <button onClick={this.toggleModal} type="button">
              Close
            </button>
          </Modal>
        )} */}
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

// <ContactBook onToggleModal={this.toggleModal}></ContactBook>
