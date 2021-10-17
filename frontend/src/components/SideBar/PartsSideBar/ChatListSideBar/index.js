import React, { useState } from 'react';
import ChatListItem from './ChatListComponents/ChatListItem';

function ChatListSideBar() {
  const [chatList, setChatList] = useState([{}, {}, {}, {}]);

  return (
    <div>
      {chatList.map((contact, key) => (
        <ChatListItem key={key} />
      ))}
    </div>
  );
}

export default ChatListSideBar;
