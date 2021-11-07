import React from 'react';
import style from './style.module.scss';
import MenssageItem from './MenssageItem';
import ScrollableFeed from 'react-scrollable-feed'

function ChatBody({ listMsg }) {
  const player = JSON.parse(localStorage.getItem('player'));

  return (
    <ScrollableFeed className={style.chatBody}>
      {listMsg.map((item, key) => (
        <MenssageItem key={key} data={item} player={player} />
      ))}
    </ScrollableFeed>
  );
}

export default ChatBody;
