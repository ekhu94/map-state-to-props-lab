import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
          {this.props.userCount}
        <ul>
          {this.props.users.map(u => <div key={u.username}>{u.username}</div>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length }
};

export default connect(mapStateToProps)(Users);
