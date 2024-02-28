import React from 'react';
import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
import { nanoid } from 'nanoid';
import Filter from './filter/Filter';
import { useState } from 'react';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const isInContactsList = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContactsList) {
      alert(`${contact.name} is already in contact list`);
    } else {
      setContacts(prevContacts => [
        { id: nanoid(), ...contact },
        ...prevContacts,
      ]);
    }
  };

  const onFilterChange = evt => {
    setFilter(evt.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onContactDelete = evt => {
    const idToDelete = evt.target.value;
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== idToDelete)
    );
  };

  const visibleContacts = getVisibleContacts();
  return (
    <div
      style={{
        height: '100vh',

        flexWrap: 'wrap',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={addContact} />
        <h2>Contacts</h2>
        {contacts.length > 0 ? (
          <Filter onFilterChange={onFilterChange} />
        ) : (
          <p>Your phonebook is empty! Add some contacts </p>
        )}
      </div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ContactList
          contacts={visibleContacts}
          onContactDelete={onContactDelete}
        />
      </div>
    </div>
  );
};
