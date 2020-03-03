import { Link } from 'react-router-dom'
import React from 'react'

import enhancer from '~/redux/allEnhancer'
import HomeController from './home'
/* eslint no-restricted-globals: 0 */
class Home extends HomeController {
  render() {
    if (!this.props.auth.id) return <span></span>
    return (
      <div id="home">
        <h1>Home</h1>
      </div>
    )
  }
}

export default enhancer(Home)
