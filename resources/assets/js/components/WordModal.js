import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import WordForm from './WordForm';
import * as wordAction from '../actions/wordActions';


class WordModal extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount(){
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
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
      $(ReactDOM.findDOMNode(this)).modal('hide');
      response.json().then((jsonReponse) => {
        this.props.dispatch(wordAction.addWord(jsonReponse));
      });
    });
  }
  
  render() {
    return(
      <div className="modal fade">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-heading">
                <a className="modal-close" data-dismiss="modal">×</a>
                <h2 className="modal-title">{this.props.title}</h2>
            </div>
            <WordForm onSubmit={this.handleSubmit} word={this.props.word}/>
        </div>
        </div>
      </div>
      );
  }
}

WordModal.propTypes = { handleHideModal: React.PropTypes.func.isRequired };
export default connect()(WordModal);