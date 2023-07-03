import { Title, BtnOptionWraper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <BtnOptionWraper>{children}</BtnOptionWraper>
    </>
  );
};
