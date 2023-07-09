import { Component } from 'react';
import { LabelForm } from '../ContactBook.styled';

export class SearchContact extends Component {
  state = {
    searchContact: '',
  };

  handlerSearchContacts = event => {
    event.preventDefault();
    this.setState({ searchContact: event.target.value });
    const SEARCHLEITER = this.state.searchContact;
    const CONTACTS = this.props.contactsList;
    const searchResult = CONTACTS.filter(objContact =>
      objContact.name.includes(SEARCHLEITER)
    );
    console.log(searchResult);
  };

  render() {
    return (
      <>
        <form>
          <LabelForm style={{ marginLeft: '5px', marginTop: '20px' }}>
            Search contact
            <input
              type="text"
              name="search"
              title="Search contact for name"
              onChange={this.handlerSearchContacts}
              value={this.state.searchContact}
            />
          </LabelForm>
        </form>
      </>
    );
  }
}
