import React from 'react';
import Note from './Note';
import { Modal } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as wordAction from '../actions/wordActions';
import WordForm from './WordForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false,
    };
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit(values){
   fetch('/api/words/', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       word: values.word,
       pronunciation: values.pronunciation,
       type:values.type,
       meaning:values.meaning,
       example:values.example,
     }),
   }).then((response)=>{
     response.json().then((jsonReponse) => {
       this.props.dispatch(wordAction.addWord(jsonReponse));
     });
     this.handleHideModal();
   });
 }

  render() {
    return (
      <div className="flex-center position-ref full-height">
        <div className="top-right links">
          <a href="#new_Word" onClick={this.handleShowModal}>Register New Word</a>
          <Modal show={this.state.showModal} onHide={this.handleHideModal}>
            <Modal.Header>
              <Modal.Title>New Word</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <WordForm onSubmit={this.handleSubmit} />
            </Modal.Body>
          </Modal>
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