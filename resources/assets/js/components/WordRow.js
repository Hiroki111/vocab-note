import React from 'react';
import WordModal from './WordModal';
import {connect} from 'react-redux';
import * as wordAction from '../actions/wordActions';

class WordRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal:false
    };
    this.flipRow = this.flipRow.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
  }

  flipRow(id){
    if($(".cover_"+id).hasClass("hide-word")){
      $(".cover_"+id ).removeClass( "hide-word" );
    }else{
      $(".cover_"+id ).addClass( "hide-word" );
    }
  }
  
  handleHideModal(){
    this.setState({showModal: false});
  }
  handleShowModal(){
    this.props.dispatch(wordAction.setWord(this.props.word));
    this.setState({showModal: true});
  }

  render() {
    var classes = 'cover_'+this.props.word.id;
    if(this.props.coverAll){
      classes += " hide-word";
    }

    return (
      <tr >
        <td onClick={this.flipRow.bind(this, this.props.word.id)}>{this.props.word.word}</td>
        <td className={classes}>{this.props.word.pronunciation}</td>
        <td className={classes}>{this.props.word.type}</td>
        <td className={classes}>{this.props.word.meaning}</td>
        <td className={classes}>{this.props.word.example}</td>
        <td>
          <button className="btn btn-primary btn-xs"
            onClick={this.handleShowModal}>*</button>
            {this.state.showModal ? <WordModal
             handleHideModal={this.handleHideModal}
             title={"Edit Word"} /> : null}
        </td>
      </tr>
      );
  }
}

export default connect()(WordRow);