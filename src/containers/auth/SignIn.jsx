import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import enhancer from '~/redux/allEnhancer'
import SignInController from './signIn'
import SignInForm from '@/form/SignInForm'


class SignIn extends SignInController {
  render() {
    return (
      <div id="signin">
        <div className="sign-wrapper">
          <div className="heading">
            <h1>ログイン</h1>
          </div>
          <SignInForm
            onSubmit={(v) => this.signIn(v)}
          />
        </div>
      </div>
    )
  }
}

export default enhancer(SignIn)
