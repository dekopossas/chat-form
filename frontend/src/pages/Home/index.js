import React from 'react';
import { useHistory } from 'react-router';

function Home() {
  const history = useHistory();

  const goSuport = () => history.push('/suport');

  return (
    <div className="app-window">
      <h1>Bem Vindo ao Atendimento Dinamico!</h1>

      <button onClick={goSuport}>Suporte</button>
    </div>
  );
}

export default Home;
