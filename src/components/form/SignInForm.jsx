import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Form,
  Row, Col,
  Button,
} from 'react-bootstrap'
import enhancer from '~/redux/allEnhancer'
import * as validator from '~/utilsjs/validate'
import { RenderField } from './RenderField'

class SignInForm extends Component {
  render() {
    const { form, handleSubmit, pristine, submitting, invalid } = this.props
    if (form.SignInForm && !form.SignInForm.errors) {
      form.SignInForm.errors = {
        denied: false
      }
    }
    return (
      <Form onSubmit={handleSubmit} className="signin-form">
        <Form.Group controlId="email">
          <Field
            id="email"
            name="email"
            type="text"
            component={RenderField}
            className="form-control"
            validate={[validator.email, validator.required]}
            onChange={(v) => this.formChanged(v)}
            placeholder="メールアドレス"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Field
            id="password"
            name="password"
            type="password"
            component={RenderField}
            className="form-control"
            validate={[validator.required]}
            onChange={(v) => this.formChanged(v)}
            placeholder="パスワード"
          />
        </Form.Group>
        { form.SignInForm && form.SignInForm.errors.denied &&
        <Row>
          <p className="form-error-alert">メールアドレスもしくはパスワードが間違っています。</p>
        </Row>
        }
        <Form.Group>
          <Button className="signinBtn" variant="secondary" type="submit" disabled={pristine || submitting || invalid}>ログイン</Button>
        </Form.Group>
      </Form>
    )
  }

  formChanged(values) {
    const { form } = this.props
    form.SignInForm.errors.denied = false
  }
}

export default reduxForm({
  form: 'SignInForm',
})(enhancer(SignInForm))
