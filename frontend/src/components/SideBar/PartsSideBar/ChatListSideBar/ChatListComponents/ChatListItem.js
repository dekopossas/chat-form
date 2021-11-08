import React from 'react';
import style from './style.module.scss';
// import moment from 'moment';

function ChatListItem({ onClick, active, data, avatar, lastMsg }) {
  // const formateDate = (date) => {
  //   return moment(date).format('DD/MM');
  // };

  return (
    <div onClick={onClick} className={active ? style.chatListItemactive : style.chatListItem}>
      <img
        className={style.chatList_avatar}
        src={avatar}
        alt="screen user chat"
      />
      <div className={style.chatList_lines}>
        <div className={style.chatList_line}>
          <div className={style.chatList_nickname}>{data.name}</div>
          <div className={style.chatList_date}>19:00</div>
        </div>
        <div className={style.chatList_line}>
          <div className={style.chatList_lastMsg}>
            <p>{lastMsg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
