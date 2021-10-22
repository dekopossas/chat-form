import React from 'react';
import style from './style.module.scss';
import MenssageItem from './MenssageItem';

function ChatBody(listMsg) {
  return (
    <div className={style.chatBody}>
      {listMsg.map((item, key) => (
        <MenssageItem key={key} data={item} />
      ))}
    </div>
  );
}

export default ChatBody;
