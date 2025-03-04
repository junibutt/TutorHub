import React from 'react'

const AdminDashboard = ({onLogout}) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>only admin can access it</p>

      <button onClick={onLogout}>logout</button>
    </div>
  )
}

export default AdminDashboard