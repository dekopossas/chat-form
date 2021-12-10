import React from 'react';
import style from './style.module.scss';

function ChatListItem({ onClick, active, data, avatar }) {
  const lastMsgData = data.chat[data.chat.length - 1].time;
  const formateDate = (date) => {
    return `${date.slice(8, 10)}/${date.slice(5, 7)} ${date.slice(11, 16)}`;
  };

  return (
    <div onClick={onClick} className={active ? style.chatListItemactive : style.chatListItem}>
      <img className={style.chatList_avatar} src={avatar} alt="screen user chat" />
      <div className={style.chatList_lines}>
        <div className={style.chatList_line}>
          <div className={style.chatList_nickname}>{data.name}</div>
          <div className={style.chatList_date}>{formateDate(lastMsgData)}</div>
        </div>
        <div className={style.chatList_line}>
          <div className={style.chatList_lastMsg}>
            <p>Ultima msg provizoria</p>
            {/* <p>{lastMsg}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
