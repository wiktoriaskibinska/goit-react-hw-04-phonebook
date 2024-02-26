import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleSubmit = evt => {
    evt.preventDefault();
    /*const contact = { name: this.state.name, number: this.state.number };
    this.state.contacts.push({ id: nanoid(), ...contact });*/
    this.props.onFormSubmit({
      name: this.state.name,
      number: this.state.number,
    });
    evt.target.reset();
    console.log(this.state);
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className={css.form} id="contactform" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor={this.nameId}>Name</label>
          <input
            id={this.nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <label htmlFor={this.numberId}>Number</label>
          <input
            id={this.numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
          <button type="submit" form="contactform" className={css.formBttn}>
            Add Contact
          </button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func,
};
export default ContactForm;
