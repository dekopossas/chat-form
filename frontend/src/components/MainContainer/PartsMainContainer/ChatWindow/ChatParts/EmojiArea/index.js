import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

import style from './style.module.scss';
import './style.css';

function EmojiArea() {
  const [emojiOpem, setEmojiOpem] = useState(false);

  const handleEmojiClick = () => {

  }

  return (
    <div className={emojiOpem ? style.emoji : style.emojiOpem}>
      <EmojiPicker disableSearchBar disableSkinPicker onEmojiClick={handleEmojiClick} />
    </div>
  )
}

export default EmojiArea
