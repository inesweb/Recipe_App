import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to='/' className='navbar-brand'>
        
      </Link>
      <div className='collapse navbar-collapse show ml-sm-5'>
        <ul className="navbar-nav ">
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          /
          <li className='nav-item'>
            <Link className='nav-link' to='Recipes'>Recipes</Link>
          </li>
          /
          <li className='nav-item'>
            <Link className='nav-link' to='/recipes/new'>Add Recipe</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}
