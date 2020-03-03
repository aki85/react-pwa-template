import React, { Component } from 'react'

export default class HeaderController extends Component {
  componentDidMount() {
    const { actions } = this.props
    // actions.refreshToken({onFailed: this.onFailed()})
  }

  onFailed() {
    const { history } = this.props
    return () => {
      history.push('/signin')
    }
  }
}