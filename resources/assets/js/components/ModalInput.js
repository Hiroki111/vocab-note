import React from 'react'

//input - field name, submit (returns the input or show the warning msg)
//output - input is valid, 
export default class ModalInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:"",      
      invalid:false,
    }
  }

  render() {
    
    <div>
      <label className="floating-label" htmlFor={this.props.fieldName}>{this.props.label}</label>
      <input className="form-control" id={this.props.fieldName} type="text" id={this.props.fieldName} value={this.state.value || ''} onChange={this.handleChange}/>
      { this.state.invalid.word ? <span className="label-red"> Fill in this field </span> : null }
    </div>
  }
}