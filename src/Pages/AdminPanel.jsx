import React from 'react'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <div>
    <h1 className='text text-success'>Choose What You Want To Do</h1>
    <Link to="/viewUsers">
      <button className='btn btn-success'>View Users</button>
    </Link>
    <br/>
    <br/>
    <Link to="/addemployee">
      <button className='btn btn-success'>Add Employees</button>
    </Link>
    <br/>
    <br/>
    </div>
  )
}

export default AdminPanel
