import React from 'react'
import { Link } from 'react-router-dom'
import BrowseRoute from './BrowseRoute'

function SignUp() {
  return (
    <div className='App'>
        <BrowseRoute></BrowseRoute>
        <form>
            <h2>Sign up</h2>
            <div>
                <label>First Name</label>
                <input></input>
            </div>
            <div>
                <label>Last Name</label>
                <input></input>
            </div>
            <div>
                <label>Age</label>
                <input></input>
            </div>
            <div>
                <label>E-mail</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <label>Mobile no.</label>
                <input></input>
            </div>
            <div>
                <label>Profile pic</label>
                <input></input>
            </div>
            <div>
                <button type="button"> Sign Up</button>
            </div>
        </form>
        <Link to="/">log in</Link>
    </div>
  )
}

export default SignUp
