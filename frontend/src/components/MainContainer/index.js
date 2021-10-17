import React, { useState } from 'react';
import ChatIntro from './PartsMainContainer/ChatIntro';
import style from './style.module.scss';

function MainContainer() {
  const [activeChat, setActiveChat] = useState({});
  return (
    <div className={style.contentarea}>
      <ChatIntro />
    </div>
  );
}

export default MainContainer;
