import React from 'react';
import LoginForm from '../Login/LoginForm';
import api from '../../services/api';
import { useHistory } from 'react-router';

function Login() {
  const initialValues = {};
  const history = useHistory();
  
  const handleSubmit = async (values) => {
    const response = await api.post('/suport', values);
    if (response.status === 201) {
      alert('Contato salvo com sucesso.');
      history.push('/');
    } else {
      alert('Algo deu errado.');
    }
  };

  return (
    <div>
      <LoginForm initialValues={initialValues} handleSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
