import React from 'react'
import { Link } from 'react-router-dom';

const AllUsers = props => {
  const users = props.users
  const match = props.match
  return (
    <div>
    <h3>Master List of All Users</h3>
      {users.map( user => (
        <div key={user.id}>
          <Link to={`${match.url}/${user.id}`}>
            <p>{user.username}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default AllUsers
