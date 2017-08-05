import React from 'react';

const RenderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    error
  }
}) => (
  <div className="form-group form-group-label control-highlight">
    <label className="floating-label" htmlFor={"new_"+type}>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" id={"new_"+type} />
      {touched && error && <span className="caution">{error}</span>}
    </div>
  </div>
)

export default RenderField;