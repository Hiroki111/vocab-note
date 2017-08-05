import React from 'react'
import {
  Field,
  reduxForm
}
from 'redux-form'
import {
  connect
}
from 'react-redux'
import * as wordAction from '../actions/wordActions'
import validate from "./WordValidation"
import RenderField from "./RenderField"

@connect((store) => {
  return {
    word: store.word.word,
  }
})
class WordForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      error,
      handleSubmit,
      pristine,
      reset,
      submitting
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="modal-inner">
          <Field name="word" type="text" component={RenderField} label="Word/Phrase" />
          <Field name="pronunciation" type="text" component={RenderField} label="Pronunciation" />
          <Field name="type" type="text" component={RenderField} label="Type" />
          <Field name="meaning" type="text" component={RenderField} label="Meaning" />
          <Field name="example" type="text" component={RenderField} label="Example" />
        </div>
        <div className="modal-footer">
          <p className="text-right">
            <button onClick={reset} className="btn btn-flat btn-green btn-brand waves-attach waves-effect" type="button">Reset</button>
            <button onClick={this.props.onHide} className="btn btn-flat btn-red btn-brand waves-attach waves-effect" type="button">Close</button>
            <button onClick={handleSubmit(values =>
              this.props.onSubmit({
                ...values,
                command:'update'
              }))} className="btn btn-flat btn-brand waves-attach waves-effect" type="submit" disabled={submitting}>Save</button>
          </p>
          {this.props.word.id && 
            <p className="text-right">
              <button onClick={handleSubmit(values =>
                this.props.onSubmit({
                  ...values,
                  command:'delete'
                }))} className="text-right btn btn-brand-accent waves-attach waves-light" type="button">DELETE</button>
            </p>
          }
        </div>
        
        {error && <strong>{error}</strong>}
      </form>
    )
  }
}

WordForm = reduxForm({
  form: 'WordForm',
  enableReinitialize: true,
  validate
})(WordForm);

WordForm = connect(
  state => ({
    initialValues: state.word.word,
    enableReinitialize: true,
  }),
)(WordForm);

export default WordForm;