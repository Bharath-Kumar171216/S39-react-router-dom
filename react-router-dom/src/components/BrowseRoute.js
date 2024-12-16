import React from 'react'
import { Link } from 'react-router-dom'

function BrowseRoute() {
  return (
    <div className='allLinks'>
      <Link to="/dashboard">Dash Board</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/leaves">Leaves</Link>
      <Link to="/">Logout</Link>
    </div>
  )
}

export default BrowseRoute
