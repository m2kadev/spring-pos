import React, { useContext } from 'react'
import FakeUser from '../images/fake-user.jpg'
import { AuthContext } from '../auth/AuthProvider'

const POSNAV = () => {

  const { user } = useContext(AuthContext)

  return (
    <div className='pos-nav'>
      <p>SPRING POS</p>
      <div className='user'>
        <div className='user-img'>
          <img src={FakeUser} alt="user" />
        </div>
        <div className='user-info'>
            <p className='username'>{user.username}</p>
        </div>
      </div>
    </div>
  )
}

export default POSNAV
