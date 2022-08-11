import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Router} from 'react-router-dom'
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';
import UpdateWork from './components/UpdateWork';
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
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path='/edit/profile/:id' component={UpdateProfile}/>
          <Route exact path="/works" component={Works}/>
          <Route path="/works/:id" component={UpdateWork}/>
        </Switch>
          
        {/*<Schools/>*/}
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
