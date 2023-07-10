import React, { Component } from 'react';
import {
  WrapperContacts,
  SectionContacts,
  FormaAddContacts,
  ButtonAddContact,
  LabelForm,
} from '../ContactBook/ContactBook.styled';
import { Contaner } from 'components/App/App.styled';
import { nanoid } from 'nanoid';
import { SearchContact } from './SearchContact/SearchContact';
import { ContactsList } from './ContactList/ContactList';

export class ContactBook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlerAddContacts = event => {
    event.preventDefault();
    const { name } = event.currentTarget.elements;

    this.setState(prevState => ({
      contacts: [{ name: name.value, id: nanoid() }, ...prevState.contacts],
      name: '',
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <WrapperContacts>
          <FormaAddContacts onSubmit={this.handlerAddContacts}>
            <LabelForm>
              Name
              <input
                style={{ marginLeft: '5px' }}
                type="text"
                name="name"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </LabelForm>
            <ButtonAddContact>Add contact</ButtonAddContact>
          </FormaAddContacts>
          <SearchContact contactsList={contacts}></SearchContact>
          <Contaner>
            <SectionContacts>
              <ContactsList newContacts={contacts}></ContactsList>
            </SectionContacts>
          </Contaner>
        </WrapperContacts>
      </>
    );
  }
}
