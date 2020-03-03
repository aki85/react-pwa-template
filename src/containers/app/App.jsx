import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from '../home/Home.jsx'
import SignIn from '../auth/SignIn.jsx'
import SignOut from '../auth/SignOut.jsx'

import AppController from './app'

class App extends AppController {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/signin' render={() => <SignIn />} />
            <Route path='/signout' render={() => <SignOut />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
