import { ModalTitle, ModalBtnClose } from './InfoModal.styled';

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
          <span>
            {time.date}. {time.month}. {time.year} ({time.hours}:{time.minutes}:
            {time.seconds})
          </span>
        </li>
      </ul>
      <ModalBtnClose onClick={toggleModal} type="button">
        Close
      </ModalBtnClose>
    </>
  );
};
