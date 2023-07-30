import styled from '@emotion/styled';

export const IconBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: grey;
  font: inherit;
  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  :hover {
    background-color: #a9a8b6;
    scale: 1.1;
    transform: rotate(180deg);
    transition: all 0.45s ease-in 0s;
  }
`;
