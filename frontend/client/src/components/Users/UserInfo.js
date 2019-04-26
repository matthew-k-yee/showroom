import React from 'react'

const UserInfo = props => {
  const { username } = props.user
  return (
    <div>
      <h2>Profile Page</h2>
      <h3>User: {username}</h3>
      {props.shows.map((show, index) => (
        <div  key = {show.index}>
            <h3>{show.title}</h3>
            <img src={show.img_url} alt={show.title}/>
        </div>
      ))}
    </div>
  )
}
export default UserInfo
