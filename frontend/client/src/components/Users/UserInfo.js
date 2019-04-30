import React from 'react'

const UserInfo = props => {
  const { username } = props.user
  return (
    <div>
      <h2>Profile Page</h2>
      <h3>User: {username}</h3>
      {props.shows.map((show) => (
        <div key = {show.id}>
            <h2>{show.title}</h2>
            <img src={show.img_url} alt={show.title}/>
        </div>
      ))}
    </div>
  )
}
export default UserInfo
