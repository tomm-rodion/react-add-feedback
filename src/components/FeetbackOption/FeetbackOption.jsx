import { Button } from './FeetbackOption.styled';

export const FeetbackOption = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button
      type="button"
      buttonColorStatus={option}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </Button>
  ));
};
