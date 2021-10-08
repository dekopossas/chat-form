import React from 'react';
import PropTypes from 'prop-types';

import * as yup from 'yup';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';

const validations = yup.object().shape({
  name: yup.string().min(3).required(),
  state: yup.string().required(),
  city: yup.string().min(2).required(),
  birthday: yup.string().min(8).required(),
  email: yup.string().email().required(),
})

const Form = ({ initialValues, handleSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations} >
    <FormikForm className="form">
      <p>Olá, eu sou Chatnilson, Tudo bem? Para começarmos, preciso saber seu nome.</p>
      <Field className="form_fild" name="name" placeholder="Escreva seu nome" type="text" />
      <button className="next_btn" type="button">
        Next
      </button><br />
      <ErrorMessage className="form_error" component="span" name="name" />
      <p>Que satisfação "nome da pessoa". Agora que sei seu nome, onde você mora?</p>
      <Field className="form_fild" name="state" placeholder="Escolha seu estado" type="text" />
      <button className="next_btn" type="button">
        Next
      </button><br />
      <ErrorMessage className="form_error" component="span" name="state" />
      <p>Qual o cidade?</p>
      <Field className="form_fild" name="city" placeholder="Escolha sua cidade" type="text" />
      <button className="next_btn" type="button">
        Next
      </button><br />
      <ErrorMessage className="form_error" component="span" name="city" />
      <p>Agora que sabem de onde esta falando, qual sua data de nascimento?</p>
      <Field className="form_fild" name="birthday" placeholder="Escolha uma data" type="text" />
      <button className="next_btn" type="button">
        Next
      </button><br />
      <ErrorMessage className="form_error" component="span" name="birthday" />
      <p>Por ultimo, o seu email:</p>
      <Field className="form_fild" name="email" placeholder="Escreva seu email" type="text" />
      <button className="form_btn" type="submit">
        Enviar
      </button><br />
      <ErrorMessage className="form_error" component="span" name="email" />
      <p>Parabéns, acabou de finalizar o teste. Faça uma avaliação desse processo.</p>
    </FormikForm>
  </Formik>
);

Form.propTypes = {
  initialize: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
