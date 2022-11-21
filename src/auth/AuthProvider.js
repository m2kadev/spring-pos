import React, { createContext, useState, useEffect } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  let userFromDB = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''

  const [user, setUser] = useState(userFromDB)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
