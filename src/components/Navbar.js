import React from 'react'
import Menu from '../images/menu.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <h1 className="nav-logo">SPRING POS</h1>
        <img className='menu-icon' src={Menu} alt="menu" />
        <span className='plus-icon' onClick={() => navigate('/products/add')}>+</span>
      </div>
      <div className='nav-right'>
        <div className='user'>

        </div>
      </div>
    </div>
  )
}

export default Navbar
