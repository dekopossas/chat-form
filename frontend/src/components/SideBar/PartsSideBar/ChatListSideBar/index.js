import React, { useState, useEffect } from 'react';
import ChatListItem from './ChatListComponents/ChatListItem';
import style from './style.module.scss';
import { connect } from 'react-redux';

function ChatListSideBar(allReports) {
  return (
    <div className={style.chatList}>
      {
        allReports.allReports.map((contact, key) => (
          <ChatListItem key={key} />
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  allReports: state.chatReducer.allReports
})

export default connect(mapStateToProps)(ChatListSideBar);
