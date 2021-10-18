import React, { useState, useEffect } from 'react';
import ChatListItem from './ChatListComponents/ChatListItem';
import style from './style.module.scss';
import { connect } from 'react-redux';
import api from '../../../../services/api';

function ChatListSideBar() {
  const [data, seteData] = useState();

  const loadData = async () => {
    const response = await api.get('/suport');
    seteData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={style.chatList}>
      {data ? data.map((contact, key) => <ChatListItem key={key} />) : <h1>Loading...</h1>}
    </div>
  );
}

export default connect()(ChatListSideBar);
