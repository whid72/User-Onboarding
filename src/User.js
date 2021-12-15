import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching User&apos;s details...</h3>
  }

  return (
    <div className='container'>
      <h2>{details.fname} {details.lname}</h2>
      <p>Email: {details.email}</p>
    </div>
  )
}

export default User
