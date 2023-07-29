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
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
`;

export const ButtonDalate = styled.button`
  margin-right: 8px;
  margin-left: 8px;
  :hover {
    color: red;
  }
`;
