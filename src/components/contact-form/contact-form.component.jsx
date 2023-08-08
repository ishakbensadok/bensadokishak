import { useState } from 'react';
import FormInput from '../form-input/form-input.component';

import { Button, ContactFormWrapper, Title } from './contact-form.styles.jsx';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

const ContactForm = () => {
  const [formFields, setFormFields] = useState(initialValues);
  const formInputsNames = Object.keys(formFields);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [btnMessage, setBtnMessage] = useState('Send it!');

  const handleChange = (event) => {
    // formValidations();
    setBtnMessage('Send it!');
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validateName = () => {
    if (formFields.name.trim() === '') {
      setNameError('Please enter your name');
      return false;
    } else if (
      !/^[a-zA-Z\s'-]+$/.test(formFields.name) ||
      formFields.name.trim().length < 3 ||
      formFields.name.trim().length > 50
    ) {
      setNameError('Please enter a valid name');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };
  const validateEmail = () => {
    if (formFields.email.trim() === '') {
      setEmailError('Please enter your email');
      return false;
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/.test(formFields.email)
    ) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };
  const validateMessage = () => {
    if (formFields.message.trim() === '') {
      setMessageError('Please enter a message');
      return false;
    } else if (
      formFields.message.trim().length > 500 ||
      formFields.message.trim().length < 3
    ) {
      setMessageError('Please enter a text between 3 and 500 characters');
      return false;
    } else {
      setMessageError('');
      return true;
    }
  };

  const formValidations = () => {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    if (isNameValid && isEmailValid && isMessageValid) return true;
    else return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formValidations()) {
      setBtnMessage('Sending...');

      try {
        const response = await fetch('https://formspree.io/f/mgejvayn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formFields),
        });

        if (response.ok) {
          setBtnMessage('Sent!');
          console.log('Form submitted successfully!');
          setFormFields(initialValues);
        } else {
          setBtnMessage('failed!');
          console.error('Form submission failed.');
        }
      } catch (error) {
        console.error('An error occurred while submitting the form:', error);
      }
    }
  };

  const getErrorMessage = (labelName) => {
    if (labelName === 'name') return nameError;
    if (labelName === 'email') return emailError;
    if (labelName === 'message') return messageError;
  };
  return (
    <ContactFormWrapper>
      <Title>Let's build something together!</Title>
      <form onSubmit={handleSubmit}>
        {formInputsNames.map((name, i) => {
          return (
            <FormInput
              key={i}
              label={name.replaceAll('_', ' ')}
              onChange={handleChange}
              name={name}
              value={formFields[name]}
              type='text'
              errorMessage={getErrorMessage(name)}
            />
          );
        })}
        <Button type='submit'>{btnMessage}</Button>
      </form>
    </ContactFormWrapper>
  );
};

export default ContactForm;
