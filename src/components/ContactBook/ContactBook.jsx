import React, { Component } from 'react';
import {
  WrapperContacts,
  SectionContacts,
} from '../ContactBook/ContactBook.styled';
import { Contaner } from 'components/App/App.styled';
import { nanoid } from 'nanoid';
import { SearchContact } from './SearchContact/SearchContact';
import { ContactsList } from './ContactList/ContactList';
import { ContactsForm } from './ContactsForm/ContactsForm';

export class ContactBook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = (name, number) => {
    this.setState(prevState => {
      const newContact = { id: nanoid(), name, number };
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <WrapperContacts>
          <ContactsForm
            onSubmit={this.onFormSubmit}
            contacts={contacts}
          ></ContactsForm>
          <SearchContact contactsList={this.CONTACTS}></SearchContact>
          <Contaner>
            <SectionContacts>
              <ContactsList newContacts={this.state.contacts}></ContactsList>
            </SectionContacts>
          </Contaner>
        </WrapperContacts>
      </>
    );
  }
}
