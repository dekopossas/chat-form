import React from 'react';
import { connect } from 'react-redux';

function ChatWindow({person}) {
  return (
    <div>
      <h1>{person.name}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  person: state.chatReducer.selectedPerson,
});

export default connect(mapStateToProps)(ChatWindow);
