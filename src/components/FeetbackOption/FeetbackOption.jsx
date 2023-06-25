export const FeetbackOption = ({
  options,
  onLeaveFeedback,
  changeFeedbackGood,
  changeFeedbackNeutral,
  changeFeedbackBad,
}) => {
  return options.map(option => (
    <button key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>
  ));
  //   return (
  //     <>
  //       <button key={[option]}>{[option]}</button>
  //       <h1>Please leave feedback</h1>
  //       <button type="button" onClick={changeFeedbackGood}>
  //         Good
  //       </button>
  //       <button type="button" onClick={changeFeedbackNeutral}>
  //         Neutral
  //       </button>
  //       <button type="button" onClick={changeFeedbackBad}>
  //         Bad
  //       </button>
  //     </>
  //   );
};
