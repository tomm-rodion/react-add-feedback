import styled from '@emotion/styled';
import { titleColor, font } from '../Style/mixins';

export const Title = styled.h2`
  ${font({ fs: 40, fw: 600 })};
  ${titleColor()};
  text-align: center;
`;

export const BtnOptionWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
