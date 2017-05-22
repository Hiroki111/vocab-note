import React from 'react';
import {
  connect
}
from 'react-redux';
import NewWordModal from './NewWordModal';
import LoginModal from './LoginModal';
import * as loginAction from '../actions/loginActions';

@connect((store) => {
  return {
    token: store.login.token,
  }
})
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.dispatch(loginAction.logout());
  }

  render() {
    return (
      <div>
        <div className="top-right">
          <NewWordModal/>
        </div>
        <div className="register">
          { !this.props.token ? <LoginModal /> : <div className="links"><a href="#" onClick={this.handleLogout}>Log out</a></div> }
        </div>
      </div>
    );
  }
}

export default connect()(TopBar)