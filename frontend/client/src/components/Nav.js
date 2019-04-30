import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (  
    <nav className='"navbar navbar-light bg-light navbar-expand-lg'>
      <ul className='navbar-nav'>
        <li className="navbar-item">
        <Link className="nav-link" to='/'>Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link" to='/users'>Users</Link>
        </li>
        <li className="navbar-item">
          <Link className="nav-link" to='/tvshows'>TV Shows</Link>
        </li>
        <li className="navbar-item">
          <Link  className="nav-link" to='/genres'>Genres</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Nav