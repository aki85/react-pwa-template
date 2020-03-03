import React, { Component } from 'react'
import SignOutController from './signOut'

import enhancer from '~/redux/allEnhancer'

class SignOut extends SignOutController {
  render() {
    return <div></div>
  }
}

export default enhancer(SignOut)
