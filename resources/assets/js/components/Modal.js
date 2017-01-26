import React from 'react'

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
    }
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
                    <input className="form-control" id="new_word" type="text" value="" />
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_pronunciation">Pronunciation</label>
                    <input className="form-control" id="new_word_pronunciation" type="text" value="" />
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_type">Type</label>
                    <input className="form-control" id="new_word_type" type="text" value="" />
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_meaning">Meaning</label>
                    <input className="form-control" id="new_word_meaning" type="text" value="" />
                </div>
                <div className="form-group form-group-label control-highlight">
                    <label className="floating-label" htmlFor="new_word_example">Example</label>
                    <input className="form-control" id="new_word_example" type="text" value="" />
                </div>
            </div>
            <div className="modal-footer">
                <p className="text-right">
                  <button className="btn btn-flat btn-green btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Clear</button>
                  <button className="btn btn-flat btn-red btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Close</button>
                  <button className="btn btn-flat btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Save</button>
                </p>
            </div>
        </div>
    </div>
      );
  }
}