import React, { useState } from 'react';
import ChatIntro from './PartsMainContainer/ChatIntro';
import ChatWindow from './PartsMainContainer/ChatWindow';
import style from './style.module.scss';

function MainContainer() {
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className={style.contentarea}>
      {
        activeChat.id ? <ChatWindow /> : <ChatIntro />
      }
    </div>
  );
}

export default MainContainer;
