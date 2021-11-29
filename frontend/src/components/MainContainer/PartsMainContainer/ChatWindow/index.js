// Package
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import style from './style.module.scss';

// Components
import ChatHeader from './ChatParts/ChatHeader';
import ChatBody from './ChatParts/ChatBody';
import ChatFooter from './ChatParts/ChatFooter';
import EmojiArea from './ChatParts/EmojiArea';

import api from '../../../../services/api';

function ChatWindow({ person }) {
  const [emojiOpem, setEmojiOpem] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [suportData, setSuportData] = useState([]);
  const [msgSend, setMsgSend] = useState({
    author: '',
    body: '',
  });
  const [messageList, setMessageList] = useState([
    {
      author: "bot",
      body: "Olá deko, Como está se sentindo hoje?"
    }
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

  const fecthNewMsg = async (id) => {
    const response = await api.put(`/suport/${id.id}`);
    console.log(response);
  };

  const handleSendClick = () => {
    setMessageList()
    setMsgSend({
      ...msgSend,
      author: person.name,
      body: text,
    });
    fecthNewMsg(person);
    setText('');
  };

  const handleEmojiClick = (_e, emojiObj) => {
    setText(text + emojiObj.emoji);
  };

  const handleOpemEmoji = () => {
    setEmojiOpem(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpem(false);
  };

  const loadData = async () => {
    const response = await api.get('/suport');
    setSuportData(response.data);
  };
  console.log(suportData?.find((e) => e.id === person.id)?.chat)

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={style.chatWindow}>
      <ChatHeader />
      <ChatBody listMsg={suportData?.find((e) => e.id === person.id)?.chat} />
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
  person: state.chatReducer.selectedPerson,
});

export default connect(mapStateToProps)(ChatWindow);
