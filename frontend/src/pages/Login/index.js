import React from 'react';
import LoginForm from '../Login/LoginForm';
import api from '../../services/api';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

function Login() {
  const history = useHistory();

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
      alert(err);
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
    // alert(JSON.stringify(values));
    try {
      const response = await api.get(`/users/${values.id}`, values);
      if (response.status === 200) {
        if (response.data.password === values.password) {
          alert('Logando');
          history.push('/suport')
        } else{
          alert('Senha Incorreta.')
        }
      } else {
        alert('Algo deu errado.');
      }
    } catch (err) {
      alert(err);
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

export default connect()(Login);
