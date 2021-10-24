import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './style.css';

function Home() {
  const [left, setLeft] = useState(false)
  const history = useHistory();

  const goSuport = () => history.push('/suport');

  return (
    <div className={ left ? 'sign-in-js' : 'sign-up-js'}>
      <div class="container">
        <div class="content first-content">
          <div class="first-column">
            <h2 class="title title-primary">Já tenho conta!</h2>
            <p class="description description-primary">Conecti-se aqui</p>
            <button id="signin" class="btn btn-primary" onClick={() => setLeft(true)}>
              Entrar
            </button>
          </div>
          <div class="second-column">
            <h2 class="title title-second">Criando sua Conta</h2>
            <div class="social-media">
              <ul class="list-social-media">
                <a class="link-social-media" href="#">
                  <li class="item-social-media">
                    <i class="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a class="link-social-media" href="#">
                  <li class="item-social-media">
                    <i class="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a class="link-social-media" href="#">
                  <li class="item-social-media">
                    <i class="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p class="description description-second">Ou preencha os campos a baixo:</p>
            <form class="form">
              <label class="label-input" for="">
                <i class="far fa-user icon-modify"></i>
                <input type="text" placeholder="Name" />
              </label>

              <label class="label-input" for="">
                <i class="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label class="label-input" for="">
                <i class="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <button typo="submit" class="btn btn-second">Cadastrar</button>
            </form>
          </div>
        </div>
        <div class="content second-content">
          <div class="first-column">
            <h2 class="title title-primary">hello, friend!</h2>
            <p class="description description-primary">Enter your personal details</p>
            <p class="description description-primary">and start journey with us</p>
            <button id="signup" class="btn btn-primary">
              sign up
            </button>
          </div>
          <div class="second-column">
            <h2 class="title title-second">sign in to developer</h2>
            <div class="social-media">
              <ul class="list-social-media">
                <a class="link-social-media" href="#">
                  <li class="item-social-media">
                    <i class="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a class="link-social-media" href="#">
                  <li class="item-social-media">
                    <i class="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a class="link-social-media" href="#">
                  <li class="item-social-media">
                    <i class="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p class="description description-second">or use your email account:</p>
            <form class="form">
              <label class="label-input" for="">
                <i class="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label class="label-input" for="">
                <i class="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <a class="password" href="#">
                forgot your password?
              </a>
              <button class="btn btn-second">sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
