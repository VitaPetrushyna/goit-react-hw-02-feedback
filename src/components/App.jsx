import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countOwnFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.countOwnFeedback}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.countOwnFeedback}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.countOwnFeedback}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good} </li>
          <li>Neutral: {neutral} </li>
          <li>Bad: {bad} </li>
          <li>Total: {this.total}</li>
        </ul>
      </>
    );
  }
}
