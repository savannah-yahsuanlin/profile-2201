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
import {Contact} from './components/Contact';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "granville, serif",
  },
});

theme = responsiveFontSizes(theme);

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.loadWorks()
    this.props.loadSchools()
  }

  render() {

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route exact path='/profile/:id' component={UpdateProfile}/>
            <Route exact path="/works" component={Works}/>
            <Route path="/works/:id" component={UpdateWork}/>
            <Route path="/schools" component={Schools}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
          <Copyright/>
        </div>
       </ThemeProvider>
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
