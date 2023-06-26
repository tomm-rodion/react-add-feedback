import styled from '@emotion/styled';

export const Button = styled.button`
  align-items: center;
  background-color: #fff;
  border: 2px solid #000;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-flex;
  fill: #000;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  justify-content: center;
  letter-spacing: -0.8px;
  line-height: 24px;
  min-width: 140px;
  outline: 0;
  padding: 15 5px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border-radius: 8px;

  &:focus {
    color: #484f5b;
  }

  &:hover {
    border-color: ${props => {
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
    }};
    color: ${props => {
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
    }};
    fill: ${props => {
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
    }};
  }

  @media (min-width: 768px) {
    & {
      min-width: 70px;
    }
  }
`;
