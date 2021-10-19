// Package
import React from 'react';
import { connect } from 'react-redux';
import style from './style.module.scss';

// Components
import ChatHeader from './ChatParts/ChatHeader';
import ChatBody from './ChatParts/ChatBody';
import ChatFooter from './ChatParts/ChatFooter';

function ChatWindow({person}) {
  return (
    <div className={style.chatWindow}>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

const mapStateToProps = (state) => ({
  person: state.chatReducer.selectedPerson,
});

export default connect(mapStateToProps)(ChatWindow);
