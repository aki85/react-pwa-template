import React, { Component } from 'react'

export class RenderField extends Component {
  render() {
    const { className, type, input, disabled, placeholder, meta: {touched, error} } = this.props
    return (
      <div className="inline">
        { type === 'textarea' ?
        <textarea className={className} {...input} type={type} disabled={disabled}/>
        : type === 'select' ?
        <select className={className} {...input} type={type} disabled={disabled}>{this.props.children}</select>
        :
        <input className={className} {...input} type={type} disabled={disabled} placeholder={placeholder}/>
        }
        {touched && error && <span className="form-error-alert">{error}</span>}
      </div>
    )
  }
}
