import React from 'react';
import api from '../../services/api';

import Form from '../../components/Form';

const initialValues = {};
const handleSubmit = async (values) => {
  const response = await api.post('/suport', JSON.stringify(values));
  if (response.status === 200) {
    alert('Contato salvo com sucesso.');
  } else {
    alert('Algo deu errado.');
  }
};

function Suport() {
  return (
    <div>
      <h1>Suport Page</h1>
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}

export default Suport;
