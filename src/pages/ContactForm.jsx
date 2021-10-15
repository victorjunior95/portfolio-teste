import React, { useState } from 'react';
// import React, { useEffect, useState } from 'react';
import * as emailjs from 'emailjs-com';

// import FormErrors from '../components/FormErrors';

import './ContactForm.css';

const ContactForm = () => {
  const [dataEmail, setDataEmail] = useState({
    name: '',
    email: '',
    message: '',
    formErrors: { name: '', email: '', message: '' }
  });

  // useEffect(() => {

  // }, [])

  const validateField = (field, value) => {
    switch (field) {
      case 'name':
        return validatePresence('Nome', value);
      case 'message':
        return validatePresence('Mensagem de contato', value);
      case 'email': {
        const isValid = value.match(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/);
        return isValid ? '' : 'E-mail inválido.';
      }
      default:
        return '';
    }
  }

  const validatePresence = (fieldName, value) => {
    return value.trim() ? '' : `O campo "${fieldName}" é obrigatório.`;
  }

  const handleInputChange =(event) => {
    const { name, value } = event.target;
    setDataEmail({ [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const { name, email, message } = dataEmail;
    sendEmail({ message_html: message, from_name: name, reply_to: email });
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    Object.keys(dataEmail.formErrors).forEach((field) => {
      const errorMessage = validateField(field, dataEmail[field]);
      errors[field] = errorMessage;

      if (errorMessage) isValid = false;
    });

    setDataEmail({ formErrors: errors });

    return isValid;
  }

  const sendEmail = (data) => {
    const {
      REACT_APP_EMAIL_JS_ID,
      REACT_APP_EMAIL_JS_SERVICE,
      REACT_APP_EMAIL_JS_TEMPLATE,
    } = process.env;

    emailjs
      .send(REACT_APP_EMAIL_JS_SERVICE, REACT_APP_EMAIL_JS_TEMPLATE, data, REACT_APP_EMAIL_JS_ID)
      .then(() => setDataEmail({ name: '', email: '', message: '' }))
      .catch(() => setDataEmail((previousState) => ({
        formErrors: {
          ...previousState.formErrors,
          unexpected: 'Ocorreu um erro durante o envio. Tente novamente.',
        },
      })));
  }

  return (
    <section id="contact">
        <h1>Entre em contato</h1>

        {/* <FormErrors formErrors={dataEmail.formErrors} /> */}

        <form onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            name="name"
            type="text"
            value={dataEmail.name}
            onChange={(event) => handleInputChange(event)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={dataEmail.email}
            onChange={(event) => handleInputChange(event)}
          />

          <label htmlFor="message">Mensagem de contato</label>
          <textarea
            id="message"
            name="message"
            rows="10"
            value={dataEmail.message}
            onChange={(event) => handleInputChange(event)}
          />

          <input type="submit" value="Enviar" />
        </form>
      </section>
  )
}

export default ContactForm;
