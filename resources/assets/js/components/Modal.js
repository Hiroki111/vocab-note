import React from 'react'

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(){
    fetch('/words', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
      },
      body: JSON.stringify({
        word: this.state.words.word,
        pronunciation: this.state.words.pronunciation,
        type:this.state.words.type,
        meaning:this.state.words.meaning,
        example:this.state.words.example,
      })
    })
  }

  handleChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) =>{
      prevState.words[name]=value;
    });

    console.log(this.state.words);
  }

  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-heading">
                <a className="modal-close" data-dismiss="modal">×</a>
                <h2 className="modal-title">New Word</h2>
            </div>
            <div className="modal-inner">
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word">Word/Phrase</label>
                    <input className="form-control" id="new_word" type="text" name ="word" value={this.state.words.word || ''} onChange={this.handleChange}/>
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_pronunciation">Pronunciation</label>
                    <input className="form-control" id="new_word_pronunciation" type="text"  name="pronunciation" value={this.state.words.pronunciation || ''} onChange={this.handleChange} />
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_type">Type</label>
                    <input className="form-control" id="new_word_type" type="text"  name="type" value={this.state.words.type || ''} onChange={this.handleChange} />
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_meaning">Meaning</label>
                    <input className="form-control" id="new_word_meaning" type="text" name="meaning" value={this.state.words.meaning || ''} onChange={this.handleChange} />
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_example">Example</label>
                    <input className="form-control" id="new_word_example" type="text" name="example" value={this.state.words.example || ''} onChange={this.handleChange} />
                </div>
            </div>
            <div className="modal-footer">
                <p className="text-right">
                  <button className="btn btn-flat btn-green btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Clear</button>
                  <button className="btn btn-flat btn-red btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Close</button>
                  <button onClick={this.submit} className="btn btn-flat btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Save</button>
                </p>
            </div>
        </div>
    </div>
      );
  }
}