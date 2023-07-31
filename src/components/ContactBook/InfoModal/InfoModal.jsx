import { IconButton } from 'components/IconButton/IconButton';
import { ModalTitle } from './InfoModal.styled';
import { ReactComponent as CloseIcon } from '../../../icons/211652_close_icon.svg';

//  import {ModalBtnClose} from './InfoModal.styled';

export const InfoModal = ({
  objInfContactModal: {
    name,
    number,
    time = 'Unfortunately, there is no information🙄',
  },
  toggleModal,
}) => {
  return (
    <>
      <ModalTitle>About contact information</ModalTitle>
      <IconButton onClick={toggleModal} aria-label="Close modal windiw">
        <CloseIcon width="22" height="22" fill="#fff"></CloseIcon>
      </IconButton>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat incidunt
        eligendi accusamus quia reiciendis facere veritatis itaque quisquam
        corporis tempora!
      </p>
      <ul>
        <li>
          <span>Name : </span>
          <span>{name}</span>
        </li>
        <li>
          <span>Number : </span>
          <span>{number}</span>
        </li>
        <li>
          <span>Contact added : </span>
          {time.date ? (
            <span>
              {time.date}. {time.month}. {time.year} ({time.hours}:
              {time.minutes}:{time.seconds})
            </span>
          ) : (
            <span>Unfortunately, this information is not available 🙄</span>
          )}
        </li>
      </ul>
      {/* <ModalBtnClose onClick={toggleModal} type="button">
        Close
      </ModalBtnClose> */}
    </>
  );
};
