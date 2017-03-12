import React from 'react';
import WordForm from './WordForm';


export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values){
    console.log(values);

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
      response.json().then((jsonReponse) => {
        console.log("Result",jsonReponse);        
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