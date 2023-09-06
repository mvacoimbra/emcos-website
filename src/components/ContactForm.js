import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// css
import './ContactForm.css';
// components
import InputList from './structure/InputList';

const ContactForm = () => {
  const inputs = [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      placeholder: '',
    },
    {
      label: 'Sobrenome',
      name: 'nickname',
      type: 'text',
      placeholder: '',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'seuemail@gmail.com',
    },
    {
      label: 'Telefone',
      name: 'phone',
      type: 'tel',
      placeholder: '(00) 00000-0000',
    },
  ];

  const contactForm = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    alert('Mensagem Enviada!');
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT,
        contactForm.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form__container">
      <form className="form" onSubmit={submitHandler} ref={contactForm}>
        <h4 className="form__title">INFORMAÇÕES PESSOAIS</h4>
        <InputList list={inputs} className={`contact-form__list`} />
        <h4 className="form__title">DEIXE SUA MENSAGEM</h4>
        <div className="form__input">
          <label>Mensagem</label>
          <textarea
            name="message"
            placeholder="O que você precisa?"
            cols={'30'}
            rows={'10'}
            className="message"
          />
        </div>
        <button type="submit" className="contact-form__btn">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
