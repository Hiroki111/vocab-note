import React from 'react';
import {
  Field,
  reduxForm
}
from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
    </div>
  </div>
)

class LoginForm extends React.Component {
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
        <Field name="email" type="email" component={renderField} label="Email"/>
        <Field name="password" type="password" component={renderField} label="Password"/>
        <div>
          <button type="submit" disabled={submitting}>Log In</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
        {error && <strong>{error}</strong>}
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'LoginForm',
})(LoginForm);

export default LoginForm;