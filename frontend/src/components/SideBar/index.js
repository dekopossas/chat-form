import React from 'react';
import ChatListSideBar from './PartsSideBar/ChatListSideBar';
import HeaderSideBar from './PartsSideBar/HeaderSideBar';
import SearchSideBar from './PartsSideBar/SearchSideBar';
import style from './style.module.scss';

function SideBar() {
  return (
    <div className={style.sidebar}>
      <HeaderSideBar />
      <SearchSideBar />
      <ChatListSideBar />
    </div>
  );
}

export default SideBar;
