import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Box} from "@mui/material";


const Navbar = (props) => (
  <div>
    <nav>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2}}>
        <Link to="/">Home</Link>
        <Link to="/works">Work</Link>
        <Link to="/schools">School</Link>
        <Link to='/contact'>Contact</Link>
      </Box>
    </nav>
  </div>
)


const mapState = (state) => {
  return {
    state
  }
}

export default connect(mapState)(Navbar)
