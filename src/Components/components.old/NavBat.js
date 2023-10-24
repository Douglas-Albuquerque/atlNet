import React from 'react'

import "./NavBar.css"
import logoImg from '../../img/atl.png'

const NavBar = () => {

  return (
    <nav className='navBar'>
      <div>
        {<img className='logoImg' src={logoImg} alt='Logo da Atlanta Tecnologia' />}
      </div>
      <div className="label">
        <p>Atlanta Network</p>
      </div>
      <ul className='list'>
        <li className='item'>
          <p>Login</p>
        </li>
      </ul>
    </nav>

  )
}

export default NavBar