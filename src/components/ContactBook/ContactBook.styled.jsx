import styled from '@emotion/styled';
import { btn } from 'components/Style/mixins';

export const WrapperContacts = styled.div`
  display: flex;
  justify-content: center;
`;

export const SectionContacts = styled.div`
  display: flex;
  align-items: center;
`;
export const FormaAddContacts = styled.form`
  padding-top: 20px;
`;

export const LabelForm = styled.label`
  display: flex;
`;

export const ButtonAddContact = styled.button`
  ${btn}
  margin-left:95px;
  margin-top: 10px;
  padding: 6px;
`;
