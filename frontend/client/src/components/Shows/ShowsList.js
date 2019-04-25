import React from 'react'

const ShowsList = props => {
  const shows = props.shows
  return (
    <div>
      {shows.map( show => (
        <div key={show.id}>
          <p>{show.title}</p>
          <p>- Who's watching? </p>
        </div>
      ))}
    </div>
  )
}

export default ShowsList