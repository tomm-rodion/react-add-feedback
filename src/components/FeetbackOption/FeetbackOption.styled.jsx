import styled from '@emotion/styled';
import { btn } from 'components/Style/mixins';

const color = {
  keyColor: props => {
    switch (props.buttonColorStatus) {
      case 'good':
        return 'rgb(2, 110, 2)';
      case 'neutral':
        return 'rgb(0, 0, 255, 1.9)';
      case 'bad':
        return 'rgb(255, 0, 0, 1.9)';
      default:
        throw new Error();
    }
  },
  keyBgColor: props => {
    switch (props.buttonColorStatus) {
      case 'good':
        return 'rgb(151, 192, 151, 0.3)';
      case 'neutral':
        return 'rgb(144, 144, 251, 0.4)';
      case 'bad':
        return 'rgb(255, 166, 166, 0.3)';
      default:
        throw new Error();
    }
  },
};

export const Button = styled.button`
  ${btn()}
  align-items: center;
  background-color: #c6e3f9;
  border: 2px solid #a2bbce;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  fill: inherit;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  min-width: 140px;
  padding: 15 5px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  touch-action: manipulation;
  border-radius: 8px;

  &:focus {
    color: #484f5b;
  }

  &:hover {
    border-color: ${color.keyColor};
    color: ${color.keyColor};
    fill: ${color.keyColor};
    background-color: ${color.keyBgColor};
  }

  @media (min-width: 768px) {
    & {
      min-width: 70px;
    }
  }
`;
