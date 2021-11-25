// Package
import React, { useState } from 'react';
import { Redirect } from 'react-router';

// Components
import ChatListSideBar from './PartsSideBar/ChatListSideBar';
import HeaderSideBar from './PartsSideBar/HeaderSideBar';
import SearchSideBar from './PartsSideBar/SearchSideBar';
import NewSuport from './PartsSideBar/NewSuport';

// Styles
import style from './style.module.scss';

// API
import api from '../../services/api';

function SideBar() {
  const [showNewSuport, setShowNewSuport] = useState(false);

  const fetchCreateNewChat = async () => {
    const response = await api.post('/suport', model);
    if (response.status === 201) {
      return window.location.reload();
    }
  };

  const handleNewChat = () => {
    fetchCreateNewChat();
  };

  const player = JSON.parse(localStorage.getItem('player'));
  if (!player) return <Redirect to="/" />;

  const model = {
    name: player.name,
    avatar: player.avatar,
    chat:[]
  };

  return (
    <div className={style.sidebar}>
      <NewSuport show={showNewSuport} setShow={setShowNewSuport} handleNewChat={handleNewChat} />
      <HeaderSideBar setShow={setShowNewSuport} />
      <SearchSideBar />
      <ChatListSideBar />
    </div>
  );
}

export default SideBar;
