import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';

function LoginForm() {
  const [left, setLeft] = useState(true);
  const history = useHistory();

  const goSuport = () => history.push('/suport');

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
            <h2 className="title title-second">Criando sua Conta</h2>
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
            <form className="form">
              <label className="label-input" for="">
                <i className="far fa-user icon-modify"></i>
                <input type="text" placeholder="Name" />
              </label>

              <label className="label-input" for="">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" for="">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <button typo="submit" className="btn btn-second">
                Cadastrar
              </button>
            </form>
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
            <form className="form">
              <label className="label-input" for="">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" for="">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <a className="password" href="#">
                Esqueceu sua senha?
              </a>
              <button type="button" className="btn btn-second" onClick={() => goSuport()}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
