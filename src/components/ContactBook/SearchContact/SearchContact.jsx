import { Component } from 'react';
import { LabelForm } from '../ContactBook.styled';
import { FoundContactList } from '../FoundContactList/FoundContactList';

export class SearchContact extends Component {
  state = {
    ollContacts: this.props.contactsList,
    searchContactLetter: '',
    foundContact: [],
  };

  handlerSearchContacts = event => {
    event.preventDefault();
    this.setState({ searchContactLetter: event.currentTarget.value });
    this.search();
  };

  search = () => {
    let filterContact;
    if (this.state.searchContactLetter) {
      filterContact = this.props.contactsList.filter(
        contact =>
          contact.name.includes(this.state.searchContactLetter) ||
          contact.name.toLowerCase().includes(this.state.searchContactLetter)
      );
    } else {
      return (filterContact = 'Нічого не знайдено!');
    }

    this.setState({ foundContact: [...filterContact] });
  };

  render() {
    const { foundContact, searchContactLetter } = this.state;
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
              value={searchContactLetter}
            />
          </LabelForm>
          <FoundContactList foundContact={foundContact}></FoundContactList>
        </form>
      </>
    );
  }
}
