import React from 'react';
import ChatIntro from './PartsMainContainer/ChatIntro';
import ChatWindow from './PartsMainContainer/ChatWindow';
import { connect } from 'react-redux';
import style from './style.module.scss';

function MainContainer({ person }) {
  return (
    <div className={style.contentarea}>
      {
        person.name ? <ChatWindow /> : <ChatIntro />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  person: state.chatReducer.selectedPerson,
});

export default connect(mapStateToProps)(MainContainer);
