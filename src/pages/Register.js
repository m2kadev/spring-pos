import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/main_logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  const url = 'http://127.0.0.1:8000/api/register'

  const registerHandle = (e) => {
    e.preventDefault()
    sendRegister()
  }

  const sendRegister = async () => {
    try {
      const response = await axios.post(url,
      {
        username: username,
        password: password,
        password_confirmation: passwordConfirmation
      }
    )

    navigate('/login')
    return response

    } catch (error) {
      console.log(error)
    }
  }

  return (
   <div className='form-body'>
    <form className='form-wrapper' onSubmit={e => registerHandle(e)}>

        <img src={Logo} alt="Logo" />

        <p>Sign Up with your username</p>

        <div className='form-control'>
          <input onChange={(e) => setUsername(e.target.value)} type="text" required />
          <label className='username'>Username</label>
        </div>

        <div className='form-control'>
          <input onChange={e => setPassword(e.target.value)} type="password" required />
          <label className='password'>Password</label>
        </div>

        <div className='form-control'>
          <input onChange={e => setPasswordConfirmation(e.target.value)} type="password" required />
          <label className='password'>Confirm Password</label>
        </div>

        {/* <div className='checkbox-control'>
          <input type="checkbox" id='checkbox' />
          <label for="checkbox" >Remember me?</label>
        </div> */}


        <div className='btn-control'>
          <button type='submit' className='register-btn'>Sign Up</button>
        </div>

        <span>Already have an account or <Link to="/login">Login.</Link></span>
      
    </form>
   </div>
  )
}

export default Register
