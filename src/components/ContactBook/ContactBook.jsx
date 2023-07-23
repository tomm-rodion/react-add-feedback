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
import { Modal } from 'components/Modal/Modal';
import { InfoModal } from './InfoModal/InfoModal';

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

    showModal: false,
  };

  componentDidMount() {
    console.log('componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contacts);
    console.log(parsContacts); // arrey []
    if (parsContacts) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    console.log('state: showModal в component ContactBoock змінився!');
  };

  onFormSubmit = (name, number) => {
    const timeAddContact = new Date();
    // console.log(timeAddContact.toDateString()); time: new Date(),
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name,
        number,
        time: {
          year: timeAddContact.getFullYear().toString().padStart(2, '0'),
          month: (timeAddContact.getMonth() + 1).toString().padStart(2, '0'),
          date: timeAddContact.getDate().toString().padStart(2, '0'),
          hours: timeAddContact.getHours().toString().padStart(2, '0'),
          minutes: timeAddContact.getMinutes().toString().padStart(2, '0'),
          seconds: timeAddContact.getSeconds().toString().padStart(2, '0'),
        },
      };
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

  onInfoIdContact = id => {
    console.log('ID IINFO', id);
    this.InfoContactAboutModal = this.state.contacts.filter(
      contact => contact.id === id
    );

    this.toggleModal();
  };

  InfoContactAboutModal = [];

  render() {
    const { filter, valueSearchContact, contacts, showModal } = this.state;
    const objInfContactModal = { ...this.InfoContactAboutModal[0] };
    return (
      <>
        <WrapperContacts>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <InfoModal
                objInfContactModal={objInfContactModal}
                toggleModal={this.toggleModal}
              ></InfoModal>
            </Modal>
          )}
          <WrapperForm>
            <ContactsForm onSubmit={this.onFormSubmit}></ContactsForm>
            <SearchContact onSaerch={this.onSearchContact}></SearchContact>
          </WrapperForm>
          <Contaner>
            <SectionContacts>
              {valueSearchContact === '' ? (
                <ContactsList
                  newContacts={contacts}
                  onDelete={this.deleteContact}
                  onInfoIdContact={this.onInfoIdContact}
                ></ContactsList>
              ) : (
                <FoundContactList
                  foundContact={filter}
                  valueSearchContact={valueSearchContact}
                ></FoundContactList>
              )}
            </SectionContacts>
          </Contaner>
        </WrapperContacts>
      </>
    );
  }
}
