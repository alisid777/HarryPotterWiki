import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-deepBlue header">
        <div class="navbar-start">
            <Link className='navbar-item text-Gold text-lg' to='/'>Harry Potter</Link>
        </div>
        <div class="navbar-end text-Gold">
            <Link className='navbar-item text-Gold text-lg' to="/character">Characters</Link>
            <Link className='navbar-item text-Gold text-lg' to="/spells">Spells</Link>
            <Link className='navbar-item text-Gold text-lg' to="/houses">Houses</Link>
        </div>
    </div>
  )
}

export default Header