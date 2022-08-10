import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';
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
        <Switch> 
          <Route>
            <Home/>
            <Switch>
              <Route exact path='/:id/edit' component={UpdateProfile}/>
            </Switch>
            <Works/>
            <Schools/>
            <Copyright/>
          </Route>
        </Switch>
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
