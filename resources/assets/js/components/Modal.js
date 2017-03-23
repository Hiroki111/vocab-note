import React from 'react';
import {connect} from 'react-redux';
import WordForm from './WordForm';
import * as wordAction from '../actions/wordActions';

@connect((store) => {
  return{
    word:store.word.words
  };
})
export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values){
    fetch('/api/words', {
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
      $('#new_word_modal').modal('hide');
      response.json().then((jsonReponse) => {
        this.props.dispatch(wordAction.addWord(jsonReponse));
      });
    });
  }

  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-heading">
                <a className="modal-close" data-dismiss="modal">×</a>
                <h2 className="modal-title">New Word</h2>
            </div>
            <WordForm onSubmit={this.handleSubmit} />
        </div>
      </div>
      );
  }
}