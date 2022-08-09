import React from 'react'
import {connect} from 'react-redux'


export const Update = props => {
  const {users} = props

  return (
    <div>
      <h3>Bio:{users.map(ele => ele.bio)}</h3>
    </div>
  )
}

const mapState = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapState)(Update)
