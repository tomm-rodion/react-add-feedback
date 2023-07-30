import styled from '@emotion/styled';
import { btn, titleColor } from 'components/Style/mixins';

export const ModalTitle = styled.h2`
  ${titleColor};
  text-align: center;
  margin-bottom: 20px;
`;
export const ModalBtnClose = styled.button`
  ${btn()};
  padding-top: 3px;
  padding-bottom: 3px;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
