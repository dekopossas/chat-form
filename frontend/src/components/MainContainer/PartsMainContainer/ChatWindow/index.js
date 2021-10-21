// Package
import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './style.module.scss';

// Components
import ChatHeader from './ChatParts/ChatHeader';
import ChatBody from './ChatParts/ChatBody';
import ChatFooter from './ChatParts/ChatFooter';
import EmojiArea from './ChatParts/EmojiArea';

function ChatWindow({ person }) {
  const [emojiOpem, setEmojiOpem] = useState(false);

  const handleOpemEmoji = () => {
    setEmojiOpem(true)
  };

  const handleCloseEmoji = () => {
    setEmojiOpem(false)
  };

  return (
    <div className={style.chatWindow}>
      <ChatHeader />
      <ChatBody />
      <EmojiArea emojiOpem={emojiOpem} />
      <ChatFooter handleOpemEmoji={handleOpemEmoji} handleCloseEmoji={handleCloseEmoji} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  person: state.chatReducer.selectedPerson,
});

export default connect(mapStateToProps)(ChatWindow);
