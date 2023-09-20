import React from 'react';
import InputMask from 'react-input-mask';
// css
import './InputList.css';

const InputList = ({ list, className }) => {
  const inputs = list;

  return (
    <ul className={`form__input-list ${className}`}>
      {inputs.map((input, index) => {
        if (input.type === 'tel') {
          return (
            <li className="form__input" key={index}>
              <label>{input.label}</label>
              <InputMask mask={'(99) 9 9999-9999'} maskChar={'_'}>
                {() => (
                  <input
                    type="tel"
                    name={input.name}
                    placeholder={input.placeholder}
                    required
                  />
                )}
              </InputMask>
            </li>
          );
        } else if (input.type === 'state') {
          return (
            <li className="form__input" key={index}>
              <label>{input.label}</label>
              <select name={input.name}>
                <option value={''}>Selecione</option>
                <option value={'Acre'}>Acre</option>
                <option value={'Alagoas'}>Alagoas</option>
                <option value={'Amapá'}>Amapá</option>
                <option value={'Amazonas'}>Amazonas</option>
                <option value={'Bahia'}>Bahia</option>
                <option value={'Ceará'}>Ceará</option>
                <option value={'Distrito Federal'}>Distrito Federal</option>
                <option value={'Espírito Santo'}>Espírito Santo</option>
                <option value={'Goiás'}>Goiás</option>
                <option value={'Maranhão'}>Maranhão</option>
                <option value={'Mato Grosso'}>Mato Grosso</option>
                <option value={'Mato Grosso do Sul'}>Mato Grosso do Sul</option>
                <option value={'Minas Gerais'}>Minas Gerais</option>
                <option value={'Pará'}>Pará</option>
                <option value={'Paraíba'}>Paraíba</option>
                <option value={'Paraná'}>Paraná</option>
                <option value={'Pernambuco'}>Pernambuco</option>
                <option value={'Piauí'}>Piauí</option>
                <option value={'Rio de Janeiro'}>Rio de Janeiro</option>
                <option value={'Rio Grande do Norte'}>
                  Rio Grande do Norte
                </option>
                <option value={'Rio Grande do Sul'}>Rio Grande do Sul</option>
                <option value={'Rondônia'}>Rondônia</option>
                <option value={'Roraima'}>Roraima</option>
                <option value={'Santa Catarina'}>Santa Catarina</option>
                <option value={'São Paulo'}>São Paulo</option>
                <option value={'Sergipe'}>Sergipe</option>
                <option value={'Tocantins'}>Tocantins</option>
              </select>
            </li>
          );
        } else {
          return (
            <li className="form__input" key={index}>
              <label>{input.label}</label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                required
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default InputList;
