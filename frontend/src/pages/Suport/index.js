import React from 'react';

import SideBar from '../../components/SideBar';
import MainContainer from '../../components/MainContainer';
import { Redirect } from 'react-router';

function Suport() {
  const player = JSON.parse(localStorage.getItem('player'));

  if(!player) return <Redirect to="/" />
  
  return (
    <div className="app-window">
      <SideBar />
      <MainContainer />
    </div>
  );
}

export default Suport;
