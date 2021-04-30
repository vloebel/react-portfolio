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
        setErrorMessage('please enter a valid email');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log('Handle Form', formState);
    }
  };

  return (
    <section >
      <h1>Contact me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name">Name:</label>
            <input className="input-field" type="text" name="name" defaultValue={name} onMouseOut={handleChange} />
          </div>
          <div className="contact-field">
            <label htmlFor="email">Email:</label>
            <input className="input-field" type="email" name="email" defaultValue={email} onMouseOut={handleChange} />
          </div>
          <div className="contact-field">
            <label htmlFor="message">Message:</label>
            <textarea className="input-field" name="message" rows="5" defaultValue={message} onMouseOut={handleChange} />
          </div>
          <div>
              {errorMessage && (
                <p className="error-text">{errorMessage}</p>
              )}
          </div>
          <button className="btn-submit" type="submit">Submit</button>
        </form>
    </section>
  );
}


export default Contact;
