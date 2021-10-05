import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form as FormikForm, Field } from 'formik';

const Form = ({ initialValues, handleSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {() => (
      <FormikForm className="form" >
        <p>Olá, eu sou Chatnilson, Tudo bem? Para começarmos, preciso saber seu nome.</p>
        <Field
          className="form_fild"
          name="name"
          placeholder="Escreva seu nome"
          type="text"
        />
        <p>Que satisfação "nome da pessoa". Agora que sei seu nome, onde você mora?</p>
        <Field
          className="form_fild"
          name="state"
          placeholder="Escolha seu estado"
          type="text"
        />

        <p>Qual o cidade?</p>
        <Field
          className="form_fild"
          name="city"
          placeholder="Escolha sua cidade"
          type="text"
        />
        <p>Agora que sabem de onde esta falando, qual sua data de nascimento?</p>
        <Field
          className="form_fild"
          name="birthday"
          placeholder="Escolha uma data"
          type="text"
        />
        <p>Por ultimo, o seu email:</p>
        <Field
          className="form_fild"
          name="email"
          placeholder="Escreva seu email"
          type="text"
        />
        <button className="form_btn" type="submit">
          Enviar
        </button>
        <p>Parabéns, acabou de finalizar o teste. Faça uma avaliação desse processo.</p>
      </FormikForm>
    )}
  </Formik>
);

Form.propTypes = {
  initialize: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
