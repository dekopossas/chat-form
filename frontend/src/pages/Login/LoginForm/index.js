import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import './style.css';

function LoginForm({
  createAccInitialValue,
  handleSubmitCreateAcc,
  loginInitialValue,
  handleSubmitLogin,
}) {
  const { t } = useTranslation();
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
            <h2 className="title title-primary">{t('I already have an account!')}</h2>
            <p className="description description-primary">{t('log in here')}</p>
            <button type="button" className="btn btn-primary" onClick={() => setLeft(true)}>
              {t('Sign in')}
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">{t('Create your account')}</h2>
            <p className="description description-second">{t('Sign in with:')}</p>

            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="/">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="/">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="/">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className="description description-second">{t('Or fill in the fields below:')}</p>
            <Formik
              initialValues={createAccInitialValue}
              onSubmit={handleSubmitCreateAcc}
              validationSchema={validationsCreateAcc}
            >
              <Form className="form">
                <label className="label-input" htmlFor="name">
                  <i className="far fa-user icon-modify"></i>
                  <Field type="text" name="name" placeholder="Escreva seu nome ^^" />
                </label>
                <ErrorMessage className="form_error" component="span" name="name" />

                <label className="label-input" htmlFor="id">
                  <i className="far fa-envelope icon-modify"></i>
                  <Field type="email" name="id" placeholder="Aqui seu Email" />
                </label>
                <ErrorMessage className="form_error" component="span" name="id" />
                <label className="label-input" htmlFor="password">
                  <i className="fas fa-lock icon-modify"></i>
                  <Field type="password" name="password" placeholder="Crie uma senha.." />
                </label>
                <ErrorMessage className="form_error" component="span" name="password" />
                <button type="submit" className="btn btn-second">
                  {t('Register')}
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">{t("Don't have an account yet?")}</h2>
            <p className="description description-primary">{t('Embark on this adventure of')}</p>
            <p className="description description-primary">{t('self-knowledge with us')}</p>
            <button type="button" className="btn btn-primary" onClick={() => setLeft(false)}>
              {t('Register')}
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">{t('Sign in')}</h2>
            <p className="description description-second">{t('Sign in with:')}</p>
            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="/">
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="/">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="/">
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
                <label className="label-input" htmlFor="id">
                  <i className="far fa-envelope icon-modify"></i>
                  <Field type="email" name="id" placeholder="Email" />
                </label>
                <ErrorMessage className="form_error" component="span" name="id" />
                <label className="label-input" htmlFor="password">
                  <i className="fas fa-lock icon-modify"></i>
                  <Field type="password" name="password" placeholder="Password" />
                </label>
                <ErrorMessage className="form_error" component="span" name="password" />
                <a className="password" href="/">
                  {t('Forgot your password?')}
                </a>
                <button type="submit" className="btn btn-second">
                  {t('Sign in')}
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
