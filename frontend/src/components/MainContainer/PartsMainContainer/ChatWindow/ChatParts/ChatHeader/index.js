import React from 'react'
import style from './style.module.scss';

function ChatHeader() {
  return (
    <div className={style.chatHeader}>
      <div className={style.chatInfo}>
        <img src="/image/avatares/avatar1.png" alt="" className={style.avatar} />
        <div className={style.name}></div>
      </div>
    </div>
  )
}

export default ChatHeader
