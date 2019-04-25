import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <ul className='navbar-nav'>
        <li className="nav-item">
        <Link to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/users'>Users</Link>
        </li>
        <li className="nav-item">
          <Link to='/tvshows'>TV Shows</Link>
        </li>
        <li className="nav-item">
          <Link to='/genres'>Genres</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Nav