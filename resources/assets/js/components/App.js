import React from 'react';
import Note from './Note';
import NewWordModal from './NewWordModal';
import LoginModal from './LoginModal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWordModalClasses: "top-right links",
      loginModalClasses: "register links",
    };
  }

  render() {
    return (
      <div className="flex-center position-ref full-height">        
        <NewWordModal classes={this.state.newWordModalClasses}/>
        <LoginModal classes={this.state.loginModalClasses}/>
        <div className="content">
          <div className="title">Hiroki's Vocab Note</div>
          <div className="card">
            <div className="card-main">
            <div className="card-inner margin-bottom-no">
              <Note />
            </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}