import React from 'react'

const ExampleUser = props => {
  const user = props.users
  return (
    <div>
    {user.filter( x => x.id === 1)
      .map( one => (
        <div key={one.id}>
          <h2>Welcome {one.username}</h2>
          <p>Your user id is #{one.id}</p>
        </div>
      ))}
    </div>
  )
}
export default ExampleUser