import React from 'react'

export default class WordRow extends React.Component {
  constructor(props) {
    super(props);
    this.flipRow = this.flipRow.bind(this);
  }

  flipRow(id){
    if($(".cover_"+id).hasClass("hide-word")){
      $(".cover_"+id ).removeClass( "hide-word" );
    }else{
      $(".cover_"+id ).addClass( "hide-word" );
    }
  }

  render() {
    var classes = 'cover_'+this.props.word.id;
    if(this.props.coverAll){
      classes += " hide-word";
    }

    return (
      <tr>
        <td>{this.props.word.word}</td>
        <td className={classes}>{this.props.word.pronunciation}</td>
        <td className={classes}>{this.props.word.type}</td>
        <td className={classes}>{this.props.word.meaning}</td>
        <td className={classes}>{this.props.word.example}</td>
        <td onClick={this.flipRow.bind(this, this.props.word.id)}>
          <a className="btn btn-primary btn-xs">*</a>
        </td>
      </tr>
      );
  }
}