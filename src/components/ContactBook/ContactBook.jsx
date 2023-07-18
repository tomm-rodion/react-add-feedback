import React, { Component } from 'react';
import {
  WrapperContacts,
  SectionContacts,
  WrapperForm,
} from '../ContactBook/ContactBook.styled';
import { Contaner } from 'components/App/App.styled';
import { nanoid } from 'nanoid';
import { SearchContact } from './SearchContact/SearchContact';
import { ContactsList } from './ContactList/ContactList';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { FoundContactList } from './FoundContactList/FoundContactList';

export class ContactBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: [],
    valueSearchContact: '',
  };

  componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contacts);
    console.log(parsContacts); // arrey []
    if (parsContacts.length > 0) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onFormSubmit = (name, number) => {
    this.setState(prevState => {
      const newContact = { id: nanoid(), name, number };
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  onSearchContact = data => {
    if (data) {
      console.log(data);
      console.log(data.length);
      const contactsFound = this.state.contacts.filter(
        contact =>
          contact.name.includes(data) ||
          contact.name.toLowerCase().includes(data)
      );
      this.setState({ filter: [...contactsFound], valueSearchContact: data });
    } else {
      this.setState({
        filter: [],
        valueSearchContact: data,
      }); // empty arrey
    }
  };

  deleteContact = id => {
    const resultFilter = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: resultFilter });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <WrapperContacts>
          <WrapperForm>
            <ContactsForm
              onSubmit={this.onFormSubmit}
              contacts={contacts}
            ></ContactsForm>
            <SearchContact onSaerch={this.onSearchContact}></SearchContact>
          </WrapperForm>
          <Contaner>
            <SectionContacts>
              {this.state.valueSearchContact === '' ? (
                <ContactsList
                  newContacts={this.state.contacts}
                  onDelete={this.deleteContact}
                ></ContactsList>
              ) : (
                <FoundContactList
                  foundContact={filter}
                  valueSearchContact={this.state.valueSearchContact}
                ></FoundContactList>
              )}
            </SectionContacts>
          </Contaner>
        </WrapperContacts>
      </>
    );
  }
}
