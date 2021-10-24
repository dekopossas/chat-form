import React from 'react';
import LoginForm from '../Login/LoginForm';
import api from '../../services/api';
// import { useHistory } from 'react-router';

function Login() {
  // const history = useHistory();

  // ----------------------------------------------------------------
  // Create Accont
  // ----------------------------------------------------------------
  const createAccInitialValue = {
    name: '',
    id: '',
    password: '',
  };

  const handleSubmitCreateAcc = async (values) => {
    // alert(JSON.stringify(values));
    try {
      const response = await api.post('/users', values);
      if (response.status === 201) {
        alert('Conta criada com sucesso.');
      } else {
        alert('Algo deu errado.');
      }
    } catch (err) {
      alert('Email já utilizado.');
    }
  };

  // ----------------------------------------------------------------
  // Login
  // ----------------------------------------------------------------

  const loginInitialValue = {
    id: '',
    password: '',
  };

  const handleSubmitLogin = async (values) => {
    try {
      alert(JSON.stringify(values));
      // const response = await api.post('/users', values);
      // if (response.status === 201) {
      //   alert('Conta criada com sucesso.');
      // } else {
      //   alert('Algo deu errado.');
      // }
    } catch (err) {
      console.log(err);
      alert('Email já utilizado.');
    }
  };

  return (
    <div>
      <LoginForm
        createAccInitialValue={createAccInitialValue}
        handleSubmitCreateAcc={handleSubmitCreateAcc}
        loginInitialValue={loginInitialValue}
        handleSubmitLogin={handleSubmitLogin}
      />
    </div>
  );
}

export default Login;
