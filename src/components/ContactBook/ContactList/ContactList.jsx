import {
  ContactList,
  ContactItem,
  ContactsContainer,
  ContactsTitle,
} from './ContactList.styled';

export const ContactsList = ({ newContacts, onDelete }) => {
  return (
    <ContactsContainer>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {newContacts.map(contact => (
          <ContactItem key={contact.id}>
            <span>
              {contact.name}:{contact.number}
            </span>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </ContactItem>
        ))}
      </ContactList>
    </ContactsContainer>
  );
};
