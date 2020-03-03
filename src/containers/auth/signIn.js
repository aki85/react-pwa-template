import React, { Component } from 'react'

export default class SignInController extends Component {
  async signIn(values) {
    const { actions } = this.props
    const payload = Object.assign(values, {onSuccess: this.onSuccess()})
    await actions.signIn(payload)
  }

  onSuccess() {
    const { history } = this.props
    return () => {
      history.push('/')
    }
  }
}