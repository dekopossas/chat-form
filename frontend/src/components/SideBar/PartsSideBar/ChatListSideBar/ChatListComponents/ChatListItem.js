import React from 'react';
import style from './style.module.scss';
import moment from 'moment';

function ChatListItem({ onClick, active, data }) {
  const formateDate = (date) => {
    return moment(date).format('DD/MM');
  }

  return (
    <div onClick={onClick} className={active ? style.chatListItemactive : style.chatListItem}>
      <img
        className={style.chatList_avatar}
        src="https://www.kindpng.com/picc/m/78-786678_avatar-hd-png-download.png"
        alt="screen user chat"
      />
      {console.log(data)}
      <div className={style.chatList_lines}>
        <div className={style.chatList_line}>
          <div className={style.chatList_nickname}>{data.name}</div>
          <div className={style.chatList_date}>19:00</div>
        </div>
        <div className={style.chatList_line}>
          <div className={style.chatList_lastMsg}>
            <p>Olá, Tudo bem?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
