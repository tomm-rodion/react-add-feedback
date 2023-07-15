import {
  ContactList,
  ContactItem,
  ContactsContainer,
  ContactsTitle,
} from './ContactList.styled';

export const ContactsList = ({ newContacts }) => {
  console.log(newContacts);
  return (
    <ContactsContainer>
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactList>
        {newContacts.map(contact => (
          <ContactItem key={contact.id}>
            <span>
              {contact.name}:{contact.number}
            </span>
          </ContactItem>
        ))}
      </ContactList>
    </ContactsContainer>
  );
};
