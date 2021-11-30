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
  const [payload, setPayload] = useState({
    id: '',
    name: '',
    avatar: '',
    chat: [],
  });
  const [currentMsg, setCurrentMsg] = useState([
    {
      author: 'bot',
      body: 'Olá deko, Como está se sentindo hoje?',
    },
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
    const response = await api.put(`/suport/${id.id}`, payload);
    console.log(response);
  };

  const handleSendClick = () => {
    setMsgSend((prevMsgSend) => ({
      ...prevMsgSend,
      author: person.name,
      body: text,
    }));

    setCurrentMsg((prevCurrentmsd) => [...prevCurrentmsd, msgSend]);

    setPayload((prevPayload) => ({
      ...prevPayload,
      id: person.id,
      name: person.name,
      avatar: person.avatar,
      chat: currentMsg,
    }));
    console.log(msgSend);
    // fecthNewMsg(person.id);
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

  // useCallback(() => {
  //   setPayload({
  //     ...payload,
  //     id: person.id,
  //     name: person.name,
  //     avatar: person.avatar,
  //     chat: suportData?.find((e) => e.id === person.id)?.chat,
  //   })
  // }, [payload, person.avatar, person.id, person.name, suportData]);

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
