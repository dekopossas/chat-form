import React from 'react';
import style from './style.module.scss';
import MenssageItem from './MenssageItem';
import ScrollableFeed from 'react-scrollable-feed'

function ChatBody({ listMsg }) {

  return (
    <ScrollableFeed className={style.chatBody}>
      {listMsg?.map((item, key) => (
        <MenssageItem key={key} data={item} />
      ))}
    </ScrollableFeed>
  );
}

export default ChatBody;
