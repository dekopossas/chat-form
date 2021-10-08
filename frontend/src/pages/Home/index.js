import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

function Home() {
  const history = useHistory();

  const goSuport = () => history.push('/suport');

  return (
    <div>
      <h1>Bem Vindo ao Atendimento Dinamico!</h1>
      <Link>
        <button onClick={goSuport}>Nova Observação</button>
      </Link>
    </div>
  );
}

export default Home;
