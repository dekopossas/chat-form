import React from 'react'
import EmojiPicker from 'emoji-picker-react'

import style from './style.module.scss';

function EmojiArea() {

  const handleEmojiClick = () => {
    
  }

  return (
    <div className={style.emoji}>
      <EmojiArea disableSearchBar disableSkinPicker onEmojiClick={handleEmojiClick} />
    </div>
  )
}

export default EmojiArea
