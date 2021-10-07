import React from 'react';

import Form from '../../components/Form';

const handleSubmit = (values) => alert(JSON.stringify(values));
const initialValues = {};


function Suport() {
  return (
    <div>
      <h1>Suport Page</h1>
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}

export default Suport;
