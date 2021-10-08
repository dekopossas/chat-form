// Package
import React from 'react';
import { useHistory } from 'react-router';

// API
import api from '../../services/api';

// Components
import Form from '../../components/Form';

function Suport() {
  // ----------------------------------------------------------------
  // States
  // ----------------------------------------------------------------
  const initialValues = {};

  // ----------------------------------------------------------------
  // Hooks
  // ----------------------------------------------------------------
  const history = useHistory();

  // ----------------------------------------------------------------
  // Functions
  // ----------------------------------------------------------------
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
      <h1>Suport Page</h1>
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}

export default Suport;
