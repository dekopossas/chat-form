// Package
import React from 'react';
import style from './style.module.scss';
import { connect } from 'react-redux';

function ChatHeader(prop) {
  return (
    <div className={style.chatHeader}>
      <div className={style.chatInfo}>
        <img src={prop.person.avatar} alt="avatar" className={style.avatar} />
        <div className={style.name}>{prop.person.name}</div>
      </div>
      <div className={style.header_buttons}>
        <div className={style.btn}>
          <i className="fas fa-search-plus" style={{ color: '#919191' }}></i>
        </div>
        <div className={style.btn}>
          <i className="fas fa-paperclip" style={{ color: '#919191' }}></i>
        </div>
        <div className={style.btn}>
          <i className="fas fa-list-ul" style={{ color: '#919191' }}></i>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  person: state.chatReducer.selectedPerson,
});

export default connect(mapStateToProps)(ChatHeader);
