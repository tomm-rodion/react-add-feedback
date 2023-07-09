import React, { Component } from 'react';
import {
  WrapperContacts,
  SectionContacts,
  FormaAddContacts,
  ButtonAddContact,
  LabelForm,
} from '../ContactBook/ContactBook.styled';
import { Contacts } from './Form/Contacts';
import { Contaner } from 'components/App/App.styled';
import { nanoid } from 'nanoid';
import { SearchContact } from './SearchContact/SearchContact';

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
    console.log(this.state.contacts);
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
          <SearchContact contactsList={this.state.contacts}></SearchContact>
          <Contaner>
            <SectionContacts>
              <Contacts newContacts={this.state.contacts}></Contacts>
            </SectionContacts>
          </Contaner>
        </WrapperContacts>
      </>
    );
  }
}
