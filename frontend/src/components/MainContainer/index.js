import React from 'react'
import ChatIntro from './PartsMainContainer/ChatIntro';
import style from './style.module.scss';

function MainContainer() {
  return (
    <div className={style.contentarea}>
      <ChatIntro />
    </div>
  )
}

export default MainContainer
