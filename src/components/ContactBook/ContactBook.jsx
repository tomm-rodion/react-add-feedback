import React, { Component } from 'react';
import {
  WrapperContacts,
  SectionContacts,
  FormaAddContacts,
} from '../ContactBook/ContactBook.styled';
import { Contacts } from './Form/Contacts';
import { Contaner } from 'components/App/App.styled';
import { nanoid } from 'nanoid';

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
            <label>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name} // Додавання значення зі стану до поля вводу
                onChange={event => this.setState({ name: event.target.value })} // Оновлення стану name
              />
            </label>
            <button>Add contact</button>
          </FormaAddContacts>

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
