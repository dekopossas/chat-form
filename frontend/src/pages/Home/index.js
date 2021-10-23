import React from 'react';
import { useHistory } from 'react-router';
import style from './style.module.scss';
import Form from '../../components/Form';

function Home() {
  const history = useHistory();

  const goSuport = () => history.push('/suport');

  return (
    <div className={style.container}>
      <div className={style.first_content}>
        <div className={style.first_column}>
          <h2 className={style.title}>Bem vindo de volta!</h2>
          <p className={style.description}>Conecte-se agora</p>
          <button className={style.btn}>Entrar</button>
        </div>
        <div className={style.second_column}>
          <h2 className={style.title}>Criar Conta</h2>
          <div className={style.social_link}>
            <ul>
              <li><a href="#">facebook</a></li>
              <li><a href="#">google</a></li>
              <li><a href="#">linkedin</a></li>
            </ul>
          </div>
          <p className={style.description}>Ou preencha os campos a baixo</p>
          <form className={style.form}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className={style.btn} >Cadastrar</button>
          </form>
        </div>
      </div>
      <div className={style.second_content}>
      <div className={style.first_column}>
          <h2 className={style.title}>Bem vindo de volta!</h2>
          <p className={style.description}>Conecte-se agora</p>
          <button className={style.btn}>Entrar</button>
        </div>
        <div className={style.second_column}>
          <h2 className={style.title}>Criar Conta</h2>
          <div className={style.social_link}>
            <ul>
              <li><a href="#">facebook</a></li>
              <li><a href="#">google</a></li>
              <li><a href="#">linkedin</a></li>
            </ul>
          </div>
          <p className={style.description}>Ou preencha os campos a baixo</p>
          <form className={style.form}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className={style.btn} >Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
