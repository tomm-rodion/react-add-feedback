import { Component } from 'react';
import { LabelForm } from '../ContactsForm/ContactsForm.styled';
import { FoundContactList } from '../FoundContactList/FoundContactList';

export class SearchContact extends Component {
  state = {
    ollContacts: this.props.contactsList,
    inputValue: '',
    foundContact: [],
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value, foundContact: [] });
    const filterContact = this.props.contactsList.filter(
      contact =>
        contact.name.includes(this.state.inputValue) ||
        contact.name.toLowerCase().includes(this.state.inputValue)
    );
    this.setState({ foundContact: filterContact });
  };

  //   searchContacts = () => {
  //     let filterContact = [];
  //     if (this.state.inputValue === '') {
  //       filterContact = this.props.contactsList.filter(
  //         contact =>
  //           contact.name.includes(this.state.inputValue) ||
  //           contact.name.toLowerCase().includes(this.state.inputValue)
  //       );
  //     } else {
  //         return (filterContact = ['Нічого не знайдено!']);
  //     }
  //     console.log(filterContact);
  //       this.setState({ foundContact: filterContact });
  //   };

  render() {
    const { foundContact, inputValue } = this.state;
    console.log(inputValue);
    console.log(foundContact);
    return (
      <>
        <form>
          <LabelForm style={{ marginLeft: '5px', marginTop: '20px' }}>
            Search contact
            <input
              type="text"
              name="search"
              title="Search contact for name"
              onChange={this.handleChange}
              value={inputValue}
            />
          </LabelForm>
          <FoundContactList foundContact={foundContact}></FoundContactList>
        </form>
      </>
    );
  }
}
