import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';

const Form = ({ initialValues, onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ handleBlur, handleSubmit, handleChange }) => (
      <form className="form" onSubmit={handleSubmit}>
        <p>Olá, eu sou Chatnilson, Tudo bem? Para começarmos, preciso saber seu nome.</p>
        <input className="form_fild" name="name" placeholder="Escreva seu nome" type="text" />
        <p>
          Que satisfação, "nome da pessoa". Agora que sei seu nome, qual a cidade que você mora?
        </p>
        <input className="form_fild" name="city" placeholder="Escolha sua cidade" type="text" />
        <p>Qual o estado?</p>
        <input className="form_fild" name="state" placeholder="Escolha seu estado" type="text" />
        <p>Agora que sabem de onde esta falando, qual sua data de nascimento?</p>
        <input className="form_fild" name="birthday" placeholder="Escolha uma data" type="text" />
        <p>Por ultimo, o seu email:</p>
        <input className="form_fild" name="email" placeholder="Escreva seu email" type="text" />
        <button className="form_btn" type="submit">
          Enviar
        </button>
        <p>Parabéns, acabou de finalizar o teste. Faça uma avaliação desse processo.</p>
      </form>
    )}
  </Formik>
);

Form.propTypes = {
  initialize: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
