import {
  ContactList,
  ContactItem,
  ContactsContainer,
  ContactsTitle,
  ButtonDalate,
} from './ContactList.styled';

export const ContactsList = ({ newContacts, onDelete, onInfoIdContact }) => {
  return (
    <ContactsContainer>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {newContacts.map(contact => (
          <ContactItem key={contact.id}>
            <span>
              {contact.name[0].toUpperCase() + contact.name.slice(1)} :{' '}
              {contact.number}
            </span>
            <span>
              <ButtonDalate type="button" onClick={() => onDelete(contact.id)}>
                Delete
              </ButtonDalate>
              <button type="button" onClick={() => onInfoIdContact(contact.id)}>
                Contact information
              </button>
            </span>
          </ContactItem>
        ))}
      </ContactList>
    </ContactsContainer>
  );
};
