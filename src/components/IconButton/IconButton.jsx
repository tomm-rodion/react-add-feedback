import { IconBtn } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <IconBtn type="button" onClick={onClick} {...allyProps}>
      {children}
    </IconBtn>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};
