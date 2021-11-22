// Package
import React, { useState } from 'react';

// Components
import ChatListSideBar from './PartsSideBar/ChatListSideBar';
import HeaderSideBar from './PartsSideBar/HeaderSideBar';
import SearchSideBar from './PartsSideBar/SearchSideBar';
import NewSuport from './PartsSideBar/NewSuport';

// Styles
import style from './style.module.scss';

function SideBar() {
  const [newChat, setNewChat] = useState();
  const handleNewChat = () => {};

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
