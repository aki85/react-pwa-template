import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import enhancer from '~/redux/allEnhancer'
import HeaderController from './header'

class Header extends HeaderController {
  render() {
    return (
      <header>
      </header>
    )
  }
}

export default enhancer(Header)
