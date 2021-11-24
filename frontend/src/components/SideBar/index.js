// Package
import React, { useState } from 'react';

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
  const [newChat, setNewChat] = useState();
  const [model, setModel] = useState({
    name: '',
    avatar: '',
    chat: [],
  });

  const updateModel = (localStorage) => {
    setModel({
      ...model,
      name: localStorage.name,
      avatar: localStorage.avatar,
    });
  };

  const fetchCreateNewChat = async () => {
    const player = JSON.parse(localStorage.getItem('player'));
    updateModel(player);
    const response = await api.post('/suport', model);
    console.log(response);
  };

  const handleNewChat = () => {
    fetchCreateNewChat();
  };

  const [showNewSuport, setShowNewSuport] = useState(false);
  return (
    <div className={style.sidebar}>
      <NewSuport show={showNewSuport} setShow={setShowNewSuport} handleNewChat={handleNewChat} />
      <HeaderSideBar setShow={setShowNewSuport} />
      <SearchSideBar />
      <ChatListSideBar newChat={newChat} />
    </div>
  );
}

export default SideBar;
