import styled from '@emotion/styled';
import { font } from 'components/Style/mixins';

export const WrapperStatistics = styled.ul`
  display: block;
`;

export const Statistic = styled.ol`
  ${font({ fs: 20, fw: 400, lh: 14 })};
  margin: 12px;
`;
