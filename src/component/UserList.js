import React, { Component } from 'react';
import UserRow from './UserRow';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container main-content">
        <UserRow />
        <UserRow />
      </div>
    );
  }
}

export default UserList;