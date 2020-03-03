import React, { Component } from 'react'

export default class SignOutController extends Component {
  componentDidMount() {
    const { actions, history } = this.props
    actions.signOut()
    history.push('/signin')
  }
}