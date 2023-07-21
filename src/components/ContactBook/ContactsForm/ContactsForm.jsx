import {
  FormaAddContacts,
  LabelForm,
  ButtonAddContact,
} from '../ContactsForm/ContactsForm.styled';

export const ContactsForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
    resetForm(event);
  };

  const resetForm = event => {
    event.target.elements.name.value = '';
    event.target.elements.number.value = '';
  };

  return (
    <>
      <FormaAddContacts onSubmit={handleSubmit}>
        <LabelForm>
          Name
          <input
            style={{ marginLeft: '21px' }}
            type="text"
            name="name"
            placeholder="First name:"
          />
        </LabelForm>
        <LabelForm>
          Number
          <input
            style={{ marginLeft: '5px' }}
            type="text"
            name="number"
            placeholder="Number tel:"
          />
        </LabelForm>
        <ButtonAddContact>Add contact</ButtonAddContact>
      </FormaAddContacts>
    </>
  );
};
