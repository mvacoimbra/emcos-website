import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
// css
import './BudgetForm.css';
// components
import InputList from './structure/InputList';

const BudgetForm = () => {
  const budgetForm = useRef();

  const personal = [
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

  const adress = [
    {
      label: 'CEP',
      name: 'cep',
      type: 'text',
      placeholder: '00000-000',
    },
    {
      label: 'Logradouro',
      name: 'street',
      type: 'text',
      placeholder: 'Rua, avenida...',
    },
    {
      label: 'Bairro',
      name: 'neighborhood',
      type: 'text',
      placeholder: '...',
    },
    {
      label: 'Complemento',
      name: 'additional',
      type: 'text',
      placeholder: 'Casa, lote, quadra...',
    },
    {
      label: 'Cidade',
      name: 'city',
      type: 'text',
      placeholder: '...',
    },
    {
      label: 'Estado',
      name: 'state',
      type: 'state',
      placeholder: '...',
    },
  ];

  const services = [
    {
      label: 'Construção',
      name: 'service',
      id: '0',
    },
    {
      label: 'Diagnóstico',
      name: 'service',
      id: '1',
    },
    {
      label: 'Reformas',
      name: 'service',
      id: '2',
    },
    {
      label: 'Manutenções',
      name: 'service',
      id: '3',
    },
  ];

  const locations = [
    {
      label: 'Indústria',
      name: 'location',
      id: '0',
    },
    {
      label: 'Comércio',
      name: 'location',
      id: '1',
    },
    {
      label: 'Residência',
      name: 'location',
      id: '2',
    },
    {
      label: 'Empresa',
      name: 'location',
      id: '3',
    },
    {
      label: 'Obra em andamento',
      name: 'location',
      id: '4',
    },
  ];

  const targets = [
    {
      label: 'Empresa',
      name: 'target',
      id: '0',
    },
    {
      label: 'Pessoa física',
      name: 'target',
      id: '1',
    },
  ];

  const agendas = [
    {
      label: 'Até 1 mês',
      name: 'agenda',
      id: '0',
    },
    {
      label: 'Até 3 meses',
      name: 'agenda',
      id: '1',
    },
    {
      label: 'Até 1 ano',
      name: 'agenda',
      id: '2',
    },
  ];

  const CheckBox = ({ check, label, name, onClick }) => {
    return (
      <div>
        <button
          type="button"
          onClick={onClick}
          className={`budget-form__checkbox ${
            check && 'budget-form__checkbox--active'
          }`}
        >
          <i
            className={`fa-regular ${check ? 'fa-circle-dot' : 'fa-circle'}`}
          />
          {label}
        </button>
        {check && (
          <input
            className="budget-form__checkbox-input"
            type="checkbox"
            name={name}
            value={label}
            defaultChecked
            required
          />
        )}
      </div>
    );
  };

  const CheckBoxList = ({ list }) => {
    const [selectedBox, setSelectedBox] = useState('0');

    const hanleClick = (id, e) => {
      setSelectedBox(id);
    };

    return (
      <ul className="budget-form__checkbox-list">
        {list.map((item, index) => {
          return (
            <li key={index}>
              <CheckBox
                onClick={() => {
                  hanleClick(item.id);
                }}
                label={item.label}
                name={item.name}
                check={item.id === selectedBox ? true : false}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const submitHalnder = (e) => {
    e.preventDefault();
    alert('Mensagem Enviada!');
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_BUDGET,
        budgetForm.current,
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
    <>
      <form
        className="budget-form__container"
        ref={budgetForm}
        onSubmit={submitHalnder}
      >
        <div className="budget-form__form">
          <div>
            <h4 className="budget-form__subtitle">
              Qual é o serviço solicitado?
            </h4>
            <CheckBoxList list={services} />
          </div>
          <div>
            <h4 className="budget-form__subtitle">
              O serviço será em qual tipo de local?
            </h4>
            <CheckBoxList list={locations} />
          </div>
          <div>
            <h4 className="budget-form__subtitle">
              É para uma empresa ou pessoa física?
            </h4>
            <CheckBoxList list={targets} />
          </div>
          <div>
            <h4 className="budget-form__subtitle">
              Quando pretende dar início ao projeto?
            </h4>
            <CheckBoxList list={agendas} />
          </div>
          <div>
            <h4 className="budget-form__subtitle">
              Nos descreva brevemente o que deseja no seu projeto.
            </h4>
            <textarea
              name="message"
              type="text"
              className="budget-form__text"
              placeholder="..."
            />
          </div>
        </div>
        <div className="budget-form__form right">
          <div>
            <h4 className="budget-form__subtitle right">
              INFORMAÇÕES PESSOAIS
            </h4>
            <InputList list={personal} />
          </div>
          <div>
            <h4 className="budget-form__subtitle right">LOCAL DA OBRA</h4>
            <InputList list={adress} />
          </div>
          <div className="budget-form__term-check">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              value=""
              required
            ></input>
            <label for="terms">
              Li e aceito os <Link to={'/terms'}>termos e condições</Link>
            </label>
          </div>
          <button type="submit" className="contact-form__btn budget">
            Solicitar orçamento
          </button>
        </div>
      </form>
    </>
  );
};

export default BudgetForm;
