import {
  ContactList,
  ContactItem,
  ContactsContainer,
  ContactsTitle,
} from './ContactList.styled';

export const ContactsList = ({
  newContacts,
  onDelete,
  onToggleModal,
  onInfoIdContact,
}) => {
  return (
    <ContactsContainer>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {newContacts.map(contact => (
          <ContactItem key={contact.id}>
            <span>
              {contact.name}:{contact.number}
            </span>
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
            <button
              type="button"
              onClick={(onToggleModal, () => onInfoIdContact(contact.id))}
            >
              Inf-window
            </button>
          </ContactItem>
        ))}
      </ContactList>
    </ContactsContainer>
  );
};
