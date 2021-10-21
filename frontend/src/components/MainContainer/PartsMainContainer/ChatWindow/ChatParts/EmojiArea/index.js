import React from 'react'
import EmojiPicker from 'emoji-picker-react'

import style from './style.module.scss';
import './style.css';

function EmojiArea() {

  const handleEmojiClick = () => {

  }

  return (
    <div className={style.emoji}>
      <EmojiPicker disableSearchBar disableSkinPicker onEmojiClick={handleEmojiClick} />
    </div>
  )
}

export default EmojiArea
