import React from 'react';
import Note from './Note';
import WordModal from './WordModal';
import {connect} from 'react-redux';
import * as wordAction from '../actions/wordActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
    };
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleHideModal(){
    this.setState({showModal: false});
  }
  handleShowModal(){
    this.props.dispatch(wordAction.setWord({
      word:"",
      pronunciation:"",
      type:"",
      meaning:"",
      example:"",
    }));
    this.setState({showModal: true});
  }

  render() {
    return (
      <div className="flex-center position-ref full-height">
        <div className="top-right links">
          <button className="" onClick={this.handleShowModal}>Register new word</button>
            {this.state.showModal ? <WordModal
             handleHideModal={this.handleHideModal}
             title={"New Word"}
             word={this.state.word} /> : null}
        </div>
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

export default connect()(App)