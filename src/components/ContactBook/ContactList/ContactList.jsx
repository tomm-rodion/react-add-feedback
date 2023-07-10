import {
  ContactList,
  ContactItem,
  ContactsContainer,
  ContactsTitle,
} from './ContactList.styled';

export const ContactsList = ({ newContacts }) => {
  return (
    <ContactsContainer>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {newContacts.map(contact => (
          <ContactItem key={contact.id}>
            <span>{contact.name}</span>
          </ContactItem>
        ))}
      </ContactList>
    </ContactsContainer>
  );
};
