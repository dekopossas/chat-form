import React from 'react';
import { useHistory } from 'react-router';
import Form from '../../components/Form';

function Home() {
  const history = useHistory();

  const goSuport = () => history.push('/suport');

  return (
    <div>
      <Form />
    </div>
  );
}

export default Home;
