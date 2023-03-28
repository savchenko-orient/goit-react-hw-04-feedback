import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const options = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
}

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  leaveFeedback = item => {
    this.setState(prevState => ({ [item]: prevState[item] + 1 }))
  }

  countTotalFeedback = () => {
    return (this.state.good + this.state.bad + this.state.neutral)
  }

  countPositiveFeedbackPercentage = () => {
    return (((this.state.good / this.countTotalFeedback()) * 100).toFixed())
  }

  render() {
    const state = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            leaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total > 0
            ? <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
            : <Notification message={'There is no feedback'} />
          }
        </Section>
      </>
    )
  }
}

export default App;