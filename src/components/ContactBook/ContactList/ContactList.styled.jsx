import styled from '@emotion/styled';
import { titleColor } from 'components/Style/mixins';

export const ContactsContainer = styled.div`
  text-align: center;
`;
export const ContactsTitle = styled.h2`
  ${titleColor()};
`;

export const ContactList = styled.ul`
  list-style-type: none;
`;

export const ContactItem = styled.li`
  padding: 10px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
`;
