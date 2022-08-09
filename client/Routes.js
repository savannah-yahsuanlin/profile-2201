import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';
import Update from './components/Update';
import {loadUsers, loadWorks} from './store'
import {Copyright} from './components/Copyright';
import Works from './components/Works';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.loadWorks()
  }

  render() {

    return (
      <div>
        <Home/>
        <Works/>
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
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))
