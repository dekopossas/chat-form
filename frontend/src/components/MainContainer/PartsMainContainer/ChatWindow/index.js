// Package
import React, { useState } from 'react';
import { connect } from 'react-redux';
import style from './style.module.scss';

// Components
import ChatHeader from './ChatParts/ChatHeader';
import ChatBody from './ChatParts/ChatBody';
import ChatFooter from './ChatParts/ChatFooter';
import EmojiArea from './ChatParts/EmojiArea';

function ChatWindow({ userLogged }) {
  const [emojiOpem, setEmojiOpem] = useState(false);
  const [user, setUser] = useState({})
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [listMsg, setListMsg] = useState([
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    { author: 1, body: 'Hello'},
    { author: 1, body: 'how are you?'},
    { author: 'andre@possas.com', body: 'im fine thx'},
    
  ]);

  // reccing voice msg
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }
  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      };
      recognition.start();
    }
  };

  const handleSendClick = () => {};

  const handleEmojiClick = (e, emojiObj) => {
    setText(text + emojiObj.emoji);
  };

  const handleOpemEmoji = () => {
    setEmojiOpem(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpem(false);
  };

  return (
    <div className={style.chatWindow}>
      <ChatHeader />
      <ChatBody listMsg={listMsg} />
      <EmojiArea emojiOpem={emojiOpem} handleEmojiClick={handleEmojiClick} />
      <ChatFooter
        handleOpemEmoji={handleOpemEmoji}
        handleCloseEmoji={handleCloseEmoji}
        emojiOpem={emojiOpem}
        text={text}
        setText={setText}
        handleSendClick={handleSendClick}
        handleMicClick={handleMicClick}
        listening={listening}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  userLogged: state.userReducer.userLogged,
});

export default connect(mapStateToProps)(ChatWindow);
