import React, { useState } from 'react';
import ChatListItem from './ChatListComponents/ChatListItem';
import style from './style.module.scss';

function ChatListSideBar() {
  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <div className={style.chatList}>
      {chatList.map((contact, key) => (
        <ChatListItem key={key} />
      ))}
    </div>
  );
}

export default ChatListSideBar;
