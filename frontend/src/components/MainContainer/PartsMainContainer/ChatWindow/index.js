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

  const fecthNewMsg = async (id, updateNewSuportChat) => {
    const response = await api.put(`/suport/${id}`, updateNewSuportChat);
    if(response.status === 200) {
      setText('');
      loadData();
    }
  };

  const handleSendClick = () => {
    if (text !== '') {
      const msg = {
        author: person.name,
        body: text,
      };
      const payload = {
        name: person.name,
        avatar: person.avatar,
        chat: [...suportData, msg],
      };
      fecthNewMsg(person.id, payload);
    }
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
    const response = await api.get(`/suport/${person.id}`);
    setSuportData(response.data.chat);
  };

  let msgBot = {
    author: '',
    body: '',
  };

  if (suportData.length === 2) {
    msgBot = {
      author: 'bot',
      body: 'O que aconteceu que despertou esse Sentimento?',
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgBot],
    };
    fecthNewMsg(person.id, payload);
  };

  if (suportData.length === 4) {
    msgBot = {
      author: 'bot',
      body: 'Como vc reagiu diante dessa situação?',
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgBot],
    };
    fecthNewMsg(person.id, payload);
  };

  if (suportData.length === 6) {
    msgBot = {
      author: 'bot',
      body: 'Como poderia ter feito melhor?',
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgBot],
    };
    fecthNewMsg(person.id, payload);
  };

  if (suportData.length === 8) {
    msgBot = {
      author: 'bot',
      body: 'Deixe suas Observações...',
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgBot],
    };
    fecthNewMsg(person.id, payload);
  };

  useEffect(() => {
    loadData();
  }, [person]);

  return (
    <div className={style.chatWindow}>
      <ChatHeader />
      <ChatBody listMsg={suportData} />
      <EmojiArea emojiOpem={emojiOpem} handleEmojiClick={handleEmojiClick} />
      <ChatFooter
        handleOpemEmoji={handleOpemEmoji}
        handleCloseEmoji={handleCloseEmoji}
        emojiOpem={emojiOpem}
        setText={setText}
        text={text}
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
