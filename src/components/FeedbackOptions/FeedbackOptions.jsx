import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {Object.keys(options).map(option => {
        return (
          <li key={option}>
            <FeedbackBtn type="button" onClick={onLeaveFeedback}>
              {option}
            </FeedbackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};

export default FeedbackOptions;
