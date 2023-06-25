export const Statistics = ({
  state: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>
        PositivePercentage:
        {total()
          ? positivePercentage + '%'
          : ' Поки що не має жодного відгуку!💙💛'}
      </p>
    </>
  );
};
