import React from 'react';
import {
  Modal
}
from 'react-bootstrap';
import {
  connect
}
from 'react-redux';
import * as wordAction from '../actions/wordActions';
import WordForm from './WordForm';
import axios from 'axios';
import {
  SubmissionError
}
from 'redux-form';

@connect((store) => {
  return {
    token: store.login.token,
    coverAll: store.cover.coverAll,
  }
})
class WordRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.flipRow = this.flipRow.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  flipRow(id) {
    if ($(".cover_" + id).hasClass("hide-word")) {
      $(".cover_" + id).removeClass("hide-word");
    }
    else {
      $(".cover_" + id).addClass("hide-word");
    }
  }
  handleShowModal() {
    this.props.dispatch(wordAction.setWord(this.props.word));
    this.setState({
      showModal: true
    });
  }
  handleHideModal() {
    this.setState({
      showModal: false
    });
  }
  handleSubmit(values) {
    if (values.type === "update") {
      return axios.put('/api/restricted/words/' + this.props.word.id, {
        word: values.word,
        pronunciation: values.pronunciation,
        type: values.type,
        meaning: values.meaning,
        example: values.example,
      }, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer {' + this.props.token + '}',
        }
      }).then((response) => {
        this.props.dispatch(wordAction.updateWord(response.data));
        this.handleHideModal();
      }).catch((error) => {
        throw new SubmissionError({
          _error: "Submission Error - Please make sure that you're logged in"
        });
      });
    }
    else if (values.type === "delete") {
      return axios.delete('/api/restricted/words/' + this.props.word.id, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer {' + this.props.token + '}',
        }
      }).then((response) => {
        this.props.dispatch(wordAction.deleteWord(response.data));
      }).catch((error) => {
        throw new SubmissionError({
          _error: "Submission Error - Please make sure that you're logged in"
        });
      });
    }
  }

  render() {
    var classes = 'cover_' + this.props.word.id;
    if (this.props.coverAll) {
      classes += " hide-word";
    }

    return (
      <tr>
        <td onClick={this.flipRow.bind(this, this.props.word.id)}>{this.props.word.word}</td>
        <td className={classes}>{this.props.word.pronunciation}</td>
        <td className={classes}>{this.props.word.type}</td>
        <td className={classes}>{this.props.word.meaning}</td>
        <td className={classes}>{this.props.word.example}</td>
        <td>
          <button className="btn btn-primary btn-xs" onClick={this.handleShowModal}>*</button>
          <Modal show={this.state.showModal} onHide={this.handleHideModal}>
            <Modal.Header>
              <Modal.Title>Edit Word</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <WordForm onSubmit={this.handleSubmit} onHide={this.handleHideModal}/>
            </Modal.Body>            
          </Modal>
        </td>
      </tr>
    );
  }
}

export default connect()(WordRow);