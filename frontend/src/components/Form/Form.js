import React from 'react';
import PropTypes from 'prop-types';

import { Formik } from 'formik';

const Form = ({ initialValues, handleSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {({ handleBlur, handleSubmit, handleChange, values }) => (
      <form className="form" onSubmit={handleSubmit}>
        <p>Olá, eu sou Chatnilson, Tudo bem? Para começarmos, preciso saber seu nome.</p>
        <input
          className="form_fild"
          name="name"
          placeholder="Escreva seu nome"
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <p>Que satisfação "nome da pessoa". Agora que sei seu nome, onde você mora?</p>
        <input
          className="form_fild"
          name="state"
          placeholder="Escolha seu estado"
          type="text"
          value={values.state}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <p>Qual o cidade?</p>
        <input
          className="form_fild"
          name="city"
          placeholder="Escolha sua cidade"
          type="text"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p>Agora que sabem de onde esta falando, qual sua data de nascimento?</p>
        <input
          className="form_fild"
          name="birthday"
          placeholder="Escolha uma data"
          type="text"
          value={values.birthday}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p>Por ultimo, o seu email:</p>
        <input
          className="form_fild"
          name="email"
          placeholder="Escreva seu email"
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
