import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';
import Update from './components/Update';
import {loadUsers, loadWorks, loadSchools} from './store'
import {Copyright} from './components/Copyright';
import Works from './components/Works';
import Schools from './components/Schools';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.loadWorks()
    this.props.loadSchools()
  }

  render() {

    return (
      <div>
        <Home/>
        <Works/>
        <Schools/>
        <Copyright/>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    state
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(loadUsers())
    },
    loadWorks() {
      dispatch(loadWorks())
    },
    loadSchools() {
      dispatch(loadSchools())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
