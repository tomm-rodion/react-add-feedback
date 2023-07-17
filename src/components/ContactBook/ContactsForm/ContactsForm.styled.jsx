import styled from '@emotion/styled';
import { btn } from 'components/Style/mixins';

export const FormaAddContacts = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const LabelForm = styled.label`
  text-align: center;
  margin-bottom: 5px;
  width: 100%;
`;

export const ButtonAddContact = styled.button`
  ${btn}
  margin-left:63px;
  margin-top: 10px;
  padding: 6px;
  margin-bottom: 20px;
`;
