// Package
import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import moment from 'moment';

// Components
import ChatHeader from './ChatParts/ChatHeader';
import ChatBody from './ChatParts/ChatBody';
import ChatFooter from './ChatParts/ChatFooter';
import EmojiArea from './ChatParts/EmojiArea';

// API
import api from '../../../../services/api';

// redux
import * as SetLastMsg from '../../../../redux/actions/lastMsgActions';
import { connect } from 'react-redux';

function ChatWindow({ person, setLastMsg }) {
  const [emojiOpem, setEmojiOpem] = useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [suportData, setSuportData] = useState([]);

  // voice system tutorial
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

  // api conect
  const fecthNewMsg = async (id, updateNewSuportChat) => {
    const response = await api.put(`/suport/${id}`, updateNewSuportChat);
    if (response.status === 200) {
      setText('');
      loadData();
    }
  };

  const loadData = async () => {
    const response = await api.get(`/suport/${person.id}`);
    setSuportData(response.data.chat);
  };

  // Emotions tutorial
  const handleEmojiClick = (_e, emojiObj) => {
    setText(text + emojiObj.emoji);
  };

  const handleOpemEmoji = () => {
    setEmojiOpem(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpem(false);
  };

  const formateDate = () => {
    moment.locale('pt-br');
    return moment().format();
  };

  let msgObj = {
    author: '',
    body: '',
    time: '',
  };

  // begin chat bot

  const handleSendClick = (event) => {
    event.preventDefault();
    if (text !== '') {
      msgObj = {
        author: person.name,
        body: text,
        time: formateDate(),
      };
      const payload = {
        name: person.name,
        avatar: person.avatar,
        chat: [...suportData, msgObj],
      };
      fecthNewMsg(person.id, payload);
      setLastMsg(msgObj);
    }
  };

  if (suportData.length === 2) {
    msgObj = {
      author: 'bot',
      body: 'O que aconteceu que despertou esse Sentimento?',
      time: formateDate(),
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgObj],
    };
    fecthNewMsg(person.id, payload);
    setLastMsg(msgObj);
  }

  if (suportData.length === 4) {
    msgObj = {
      author: 'bot',
      body: 'Como vc reagiu diante dessa situação?',
      time: formateDate(),
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgObj],
    };
    fecthNewMsg(person.id, payload);
    setLastMsg(msgObj);
  }

  if (suportData.length === 6) {
    msgObj = {
      author: 'bot',
      body: 'Como poderia ter feito melhor?',
      time: formateDate(),
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgObj],
    };
    fecthNewMsg(person.id, payload);
    setLastMsg(msgObj);
  }

  if (suportData.length === 8) {
    msgObj = {
      author: 'bot',
      body: 'Deixe suas Observações...',
      time: formateDate(),
    };
    const payload = {
      name: person.name,
      avatar: person.avatar,
      chat: [...suportData, msgObj],
    };
    fecthNewMsg(person.id, payload);
    setLastMsg(msgObj);
  }

  // end chat bot

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

const mapDispatchToProp = (dispatch) => ({
  setLastMsg: (msg) => dispatch(SetLastMsg.lastMsg(msg)),
});

export default connect(mapStateToProps, mapDispatchToProp)(ChatWindow);
