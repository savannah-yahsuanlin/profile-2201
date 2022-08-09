import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>Profile</h1>
    <nav>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/update">Update</Link>
        </div>
    </nav>
    <hr />
  </div>
)


const mapState = state => {
  return {
    state
  }
}

export default connect(mapState)(Navbar)
