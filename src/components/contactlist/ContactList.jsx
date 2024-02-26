import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactListItem
          contact={contact}
          onContactDelete={onContactDelete}
          key={nanoid()}
        />
      ))}
    </ul>
  );
};
const ContactListItem = ({ contact, onContactDelete }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={onContactDelete} value={contact.id}>
        Delete
      </button>
    </li>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onContactDelete: PropTypes.func,
};
ContactListItem.propTypes = {
  contact: PropTypes.object,
  onContactDelete: PropTypes.func,
};
export default ContactList;
