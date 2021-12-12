import React from 'react';
import style from './style.module.scss';
import { connect } from 'react-redux';

function ChatListItem({ onClick, active, data, avatar, lastMsgRedux }) {
  const lastMsgData = data.chat[data.chat.length - 1].time;
  const formateDate = (date) => {
    return `${date.slice(8, 10)}/${date.slice(5, 7)} ${date.slice(11, 16)}`;
  };
  const lastMsg = data.chat[data.chat.length - 1].body;
  // const lastMsg = lastMsgRedux.body === '' ? data.chat[data.chat.length - 1].body : lastMsgRedux.body;

  console.log(lastMsgRedux)

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
            <p>{lastMsg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lastMsgRedux: state.lastMsgReducer.lastMsg,
});

export default connect(mapStateToProps)(ChatListItem);
