import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className='App'>
        <form>
            <h1>USER DETAILS</h1>
            
            <div>
                <label>E-mail</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
                
            <div>
                <button type="button"> Log in</button>
            </div>  
        </form>
        <Link to="/signup">Sign up</Link>
    </div>
  )
}

export default LogIn
