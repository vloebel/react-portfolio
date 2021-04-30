import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



const Contact = () => {
  
const [formState, setFormState] = useState({ name: '', email: '', message: '' });

const [errorMessage, setErrorMessage] = useState('');
const { name, email, message } = formState;

const handleSubmit = (e) => {
  e.preventDefault();
  if (!errorMessage) {
    console.log('Submit Form', formState);
  }
};

const handleChange = (e) => {
  if (e.target.name === 'email') {
    const isValid = validateEmail(e.target.value);
    if (!isValid) {
      setErrorMessage('Please enter a valid email.');
    } else {
      setErrorMessage('');
    }
  } else {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required.`);
    } else {
      setErrorMessage('');
    }
  }
  if (!errorMessage) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log('Handle Form', formState);
  }
};

return (
  <section >
    <h1>Contact me</h1>
    <div className="contact-container">
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="contact-field">
        <label className="input-label" htmlFor="name">Name:</label>
        <input className="input-field" type="text" name="name" defaultValue={name} onBlur={handleChange} />
      </div>
      <div className="contact-field">
        <label className="input-label"htmlFor="email">Email address:</label>
        <input className="input-field" type="email" name="email" defaultValue={email} onBlur={handleChange} />
      </div>
      <div  className="contact-field">
        <label className="input-label" htmlFor="message">Message:</label>
        <textarea className="input-field"  name="message" rows="5" defaultValue={message} onBlur={handleChange} />
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}
        
      <button  type="submit">Submit</button>
      </form>
      </div>
  </section>
);
}


export default Contact;
