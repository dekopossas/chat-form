import React from 'react';
import LoginForm from '../Login/LoginForm';
import api from '../../services/api';
import { useHistory } from 'react-router';

function Login() {
  const createAccInitialValue = {
    name: "",
    id: "",
    password: "",
  };

  const history = useHistory();
  
  const handleSubmitCreateAcc = async (values) => {
    // alert(JSON.stringify(values));
    try {
      const response = await api.post('/users', values);
      if (response.status === 201) {
        alert('Conta criada com sucesso.');
      } else {
        alert('Algo deu errado.');
      }
    } catch(err) {
      alert('Email já utilizado.');
    }
  };

  return (
    <div>
      <LoginForm createAccInitialValue={createAccInitialValue} handleSubmitCreateAcc={handleSubmitCreateAcc} />
    </div>
  );
}

export default Login;
