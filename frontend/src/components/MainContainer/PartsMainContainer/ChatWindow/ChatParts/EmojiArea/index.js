import React from 'react';
import EmojiPicker from 'emoji-picker-react';

import style from './style.module.scss';
import './style.css';

function EmojiArea({ emojiOpem, handleEmojiClick }) {

  return (
    <div className={!emojiOpem ? style.emoji : style.emojiOpem}>
      <EmojiPicker disableSearchBar disableSkinPicker onEmojiClick={handleEmojiClick} />
    </div>
  );
}

export default EmojiArea;
