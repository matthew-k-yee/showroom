import React from 'react'

const UserInfo = props => {
  return (
    <div>
      <h1>{props.users.username}</h1>
      <h1>{props.users.id}</h1>
    </div>
  )
}
export default UserInfo