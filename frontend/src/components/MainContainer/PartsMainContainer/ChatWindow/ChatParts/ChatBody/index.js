import React from 'react';
import style from './style.module.scss';
import MenssageItem from './MenssageItem';

function ChatBody({ listMsg }) {
  const player = JSON.parse(localStorage.getItem('player'));

  return (
    <div className={style.chatBody}>
      {listMsg.map((item, key) => (
        <MenssageItem key={key} data={item} player={player} />
      ))}
    </div>
  );
}

export default ChatBody;
