import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineDashboard, MdPointOfSale, MdProductionQuantityLimits } from 'react-icons/md';
import { AiOutlineDown } from 'react-icons/ai'
import { AuthContext } from '../auth/AuthProvider';
import FakeUser from '../images/fake-user.jpg'

const Sidebar = () => {

  const navigate = useNavigate()
  const [salesToggle, setSalesToggle] = useState(false)
  const { user } = useContext(AuthContext)

  const toggleDropdown = (s, c) => {
    c(!s)
  }

  return (
    <div className='sidebar'>

      <div className='user'>
        <div className='user-img'>
          <img src={FakeUser} alt="user" />
        </div>
        <div className='user-info'>
            <p className='username'>{user.username}</p>
            <span className='status'>
                <span className='status-circle'></span>
                Online
            </span>
        </div>
      </div>

      <div className='sidebar-contents'>

        <div className='space-start sidebar-components' onClick={() => navigate('/dashboard')}>
            <MdOutlineDashboard className='sidebar-logo' />
            Dashboard
        </div>

        <div className='sidebar-dropdown-wrapper'>

          <div onClick={() => toggleDropdown(salesToggle, setSalesToggle)} className='space-between sidebar-components'>
              <div className='flex-align-center'>
                <MdPointOfSale className='sidebar-logo' />
                Sales
              </div>
              <AiOutlineDown className='sidebar-down' />
          </div>

          <div style={{display: salesToggle ? "block" : "none"}} className='dropdown-items'>
            <div className='pointer flex-align-center' onClick={() => navigate("/pos")}>
              <MdPointOfSale className='sidebar-logo' />
              <span>POS</span>
            </div>
          </div>

          <div style={{display: salesToggle ? "block" : "none"}} className='dropdown-items'>
            <div className='pointer flex-align-center' onClick={() => navigate("/products")}>
              <MdProductionQuantityLimits className='sidebar-logo' />
              <span>Products List</span>
            </div>
          </div>

        </div>


        <div className='space-start sidebar-components' onClick={() => navigate('/dashboard')}>
            <MdOutlineDashboard className='sidebar-logo' />
            Others
        </div>


      </div>
    </div>
  )
}

export default Sidebar
