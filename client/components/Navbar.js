import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = (props) => (
  <div>
      <h1>Profile</h1>
      <nav>
          <div>
            <Link to="/home">Home</Link>
          </div>
      </nav>
      <hr />
  </div>
)


const mapState = (state) => {
  return {
    state
  }
}

export default connect(mapState)(Navbar)
