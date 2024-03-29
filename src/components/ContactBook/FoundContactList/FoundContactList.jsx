export const FoundContactList = ({ foundContact, valueSearchContact }) => {
  return (
    <>
      <h2>Found Contacts</h2>
      {foundContact.length === 0 && valueSearchContact.length > 0 ? (
        <p>No foun contact</p>
      ) : (
        <ul>
          {foundContact.map(contact => (
            <li key={contact.id}>
              {contact.name}:{contact.number}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
