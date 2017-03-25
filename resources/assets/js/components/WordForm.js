import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.word) {
    errors.word = 'Required'
  }
  if (!values.pronunciation) {
    errors.pronunciation = 'Required'
  }
  if (!values.meaning) {
    errors.meaning = 'Required'
  }
  if (!values.type) {
    errors.type = 'Required'
  }
  if (!values.example) {
    errors.example = 'Required'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group form-group-label control-highlight">
    <label className="floating-label" htmlFor={"new_"+type}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}  className="form-control" id={"new_"+type} />
      {touched && error && <span className="caution">{error}</span>}
    </div>
  </div>
)

class WordForm extends React.Component {
  render() {
    const {handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="modal-inner">
          <Field name="word" type="text" component={renderField} label="Word/Phrase"/>
          <Field name="pronunciation" type="text" component={renderField} label="Pronunciation"/>
          <Field name="type" type="text" component={renderField} label="Type"/>
          <Field name="meaning" type="text" component={renderField} label="Meaning"/>
          <Field name="example" type="text" component={renderField} label="Example"/>
        </div>
        <div className="modal-footer">
          <p className="text-right">
            <button className="btn btn-flat btn-green btn-brand waves-attach waves-effect" type="button" onClick={reset}>Clear</button>
            <button className="btn btn-flat btn-red btn-brand waves-attach waves-effect" data-dismiss="modal" type="button">Close</button>
            <button onClick={handleSubmit} className="btn btn-flat btn-brand waves-attach waves-effect" type="submit" disabled={submitting}>Save</button>
          </p>
        </div>
      </form>
    )
  }
}

WordForm = reduxForm({
  form: 'WordForm',
  validate
})(WordForm);

export default WordForm;


