import { Statistic, WrapperStatistics } from './Statistics.styled';

export const Statistics = ({
  state: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <WrapperStatistics>
      <Statistic>Good: {good}</Statistic>
      <Statistic>Neutral: {neutral}</Statistic>
      <Statistic>Bad: {bad}</Statistic>
      <Statistic>Total: {total()}</Statistic>
      <Statistic>
        PositivePercentage:
        {total()
          ? positivePercentage + '%'
          : ' Поки що не має жодного відгуку!💙💛'}
      </Statistic>
    </WrapperStatistics>
  );
};
