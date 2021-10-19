import React, { useState } from 'react';
import ChatIntro from './PartsMainContainer/ChatIntro';
import ChatWindow from './PartsMainContainer/ChatWindow';
import { connect } from 'react-redux';
import style from './style.module.scss';

function MainContainer({ person }) {
  return (
    <div className={style.contentarea}>
      {/* <ChatWindow /> */}
      <h1>aqui vai estar o person: {person.name}</h1>
      {/* {
        person ? <ChatWindow /> : <ChatIntro />
      } */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  person: state.chatReducer.selectedPerson,
});

export default connect(mapStateToProps)(MainContainer);
