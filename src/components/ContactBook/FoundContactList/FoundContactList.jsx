export const FoundContactList = ({ foundContact }) => {
  console.log(foundContact);
  return (
    <>
      <ul>
        {foundContact.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </>
  );
};
