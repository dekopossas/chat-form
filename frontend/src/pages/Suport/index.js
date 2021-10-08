// Package
import React from 'react';
import { useHistory } from 'react-router';

// API
import api from '../../services/api';

// Components
import Form from '../../components/Form';
import SideBar from '../../components/SideBar';
import MainContainer from '../../components/MainContainer';

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
    <div className="app-window">
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default Suport;
