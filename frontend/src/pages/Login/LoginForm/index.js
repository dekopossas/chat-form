import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import './style.css';

function LoginForm({
  createAccInitialValue,
  handleSubmitCreateAcc,
  loginInitialValue,
  handleSubmitLogin,
}) {
  const [left, setLeft] = useState(true);

  const validationsCreateAcc = yup.object().shape({
    name: yup.string().min(3).required(),
    id: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const validationsLogin = yup.object().shape({
    id: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  return (
    <div className={left ? 'sign-in-js' : 'sign-up-js'}>
      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Já tenho conta!</h2>
            <p className="description description-primary">Conecti-se aqui</p>
            <button type="button" className="btn btn-primary" onClick={() => setLeft(true)}>
              Entrar
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Crie sua Conta</h2>
            <p className="description description-second">Continuar com:</p>

            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className="description description-second">Ou preencha os campos a baixo:</p>
            <Formik
              initialValues={createAccInitialValue}
              onSubmit={handleSubmitCreateAcc}
              validationSchema={validationsCreateAcc}
            >
              <Form className="form">
                <label className="label-input" for="name">
                  <i className="far fa-user icon-modify"></i>
                  <Field type="text" name="name" placeholder="Escreva seu nome ^^" />
                </label>
                <ErrorMessage className="form_error" component="span" name="name" />

                <label className="label-input" for="id">
                  <i className="far fa-envelope icon-modify"></i>
                  <Field type="email" name="id" placeholder="Aqui seu Email" />
                </label>
                <ErrorMessage className="form_error" component="span" name="id" />
                <label className="label-input" for="password">
                  <i className="fas fa-lock icon-modify"></i>
                  <Field type="password" name="password" placeholder="Crie uma senha.." />
                </label>
                <ErrorMessage className="form_error" component="span" name="password" />
                <button type="submit" className="btn btn-second">
                  Cadastrar
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Ainda não tenho conta?</h2>
            <p className="description description-primary">Embarque nessa aventura de</p>
            <p className="description description-primary">auto conhecimento com a gente</p>
            <button type="button" className="btn btn-primary" onClick={() => setLeft(false)}>
              Cadastro
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Entrar</h2>
            <p className="description description-second">Continuar com:</p>
            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className="description description-second">Ou preencha os campos a baixo:</p>
            <Formik
              initialValues={loginInitialValue}
              onSubmit={handleSubmitLogin}
              validationSchema={validationsLogin}
            >
              <Form className="form">
                <label className="label-input" for="id">
                  <i className="far fa-envelope icon-modify"></i>
                  <Field type="email" name="id" placeholder="Email" />
                </label>
                <ErrorMessage className="form_error" component="span" name="id" />
                <label className="label-input" for="password">
                  <i className="fas fa-lock icon-modify"></i>
                  <Field type="password" name="password" placeholder="Password" />
                </label>
                <ErrorMessage className="form_error" component="span" name="password" />
                <a className="password" href="#">
                  Esqueceu sua senha?
                </a>
                <button type="submit" className="btn btn-second">
                  Entrar
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
