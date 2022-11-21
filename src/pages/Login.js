import React, { useState, useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../images/main_logo.png'
import axios from 'axios'

const Login = () => {

  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isUser, setIsUser] = useState(true)
  const navigate = useNavigate()
  const url = 'http://127.0.0.1:8000/api/login'

  const handleLogin = (e) => {
    e.preventDefault()
    sendLogin()
  }

  const sendLogin = async () => {
    try {
      const response = await axios.post(url, 
        {
          username: username,
          password: password
        }
      )
      setUser({token: response.data.token, username: response.data.user.username})
      navigate('/')
    } catch (error) {
      setIsUser(false)
    }
  }

  return (
   <div className='form-body'>
    <form className='form-wrapper' onSubmit={e => handleLogin(e)}>

        <img src={Logo} alt="Logo" />

        <p>Login to spring POS</p>

        <div className='form-control'>
          <input onChange={(e) => setUsername(e.target.value)} type="text" required />
          <label className='username'>Username</label>
        </div>

        <div className='form-control'>
          <input onChange={e => setPassword(e.target.value)} type="password" required />
          <label className='password'>Password</label>
        </div>

        <div className='checkbox-control'>
        <input type="checkbox" id='checkbox' />
        <label for="checkbox" >Remember me?</label>
        </div>

        {!isUser && <span style={{color: "red"}}>Something went wrong! please try again</span> }
        <div className='btn-control'>
          <button type='submit' className='register-btn'>Sign Up</button>
        </div>

        <span>Already don't have an account or <Link to="/register">Sign Up.</Link></span>
      
    </form>
   </div>
  )
}

export default Login
