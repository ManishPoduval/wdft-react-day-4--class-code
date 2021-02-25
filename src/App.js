import React, { Component } from 'react'
import Nav from './components/Nav'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* Switch makes sure only one route matches */}
        <Switch >
          <Route exact path="/" component={Home} />
          {/* When we dont want to send our own props */}
          {/* <Route path="/about" component={About} /> */}

          {/* When we  want to send our own props */}
          <Route path="/about" render={(routeProps) => {
            return <About name={'Manish'} {...routeProps} />
          }} />

          {/* For 404 pages no need to put a path, it will by default run this route if none of the above routes match */}
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}


export default App