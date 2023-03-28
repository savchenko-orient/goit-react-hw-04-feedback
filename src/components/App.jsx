import { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

const options = {
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
}


export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const leaveFeedback = (event) => {
    const name = event.target.name;

    if (name === 'good') setGood(e => e += 1)
    if (name === 'bad') setBad(bad => bad + 1)
    if (name === 'neutral') setNeutral(neutral => neutral + 1)
  }

  const total = good + bad + neutral;
  const feedbackPercentage = ((good / total) * 100).toFixed();
  console.log('feedbackPercentage: ', typeof feedbackPercentage);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          leaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total > 0
          ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedbackPercentage={feedbackPercentage}
          />
          : <Notification message={'There is no feedback'} />
        }
      </Section>
    </>
  )
}


