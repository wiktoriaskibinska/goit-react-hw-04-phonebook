import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = onFormSubmit => {
  const [data, setData] = useState({
    name: '',
    number: '',
  });
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();
    /*const contact = { name: this.state.name, number: this.state.number };
    this.state.contacts.push({ id: nanoid(), ...contact });*/
    onFormSubmit({
      name: data.name,
      number: data.number,
    });
    evt.target.reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setData({ [name]: value });
  };

  return (
    <form className={css.form} id="contactform" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Name</label>
        <input
          id={this.nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label htmlFor={numberId}>Number</label>
        <input
          id={this.numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button type="submit" form="contactform" className={css.formBttn}>
          Add Contact
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
export default ContactForm;
