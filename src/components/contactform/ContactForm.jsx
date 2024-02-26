import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ContactForm = ({ onFormSubmit }) => {
  const [data, setData] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    onFormSubmit({
      name: data.name,
      number: data.number,
    });
    evt.target.reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <form className={css.form} id="contactform" onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label>Number</label>
        <input
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
