import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/tvshows'>TV Shows</Link>
        </li>
        <li>
          <Link to='/genres'>Genres</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Nav