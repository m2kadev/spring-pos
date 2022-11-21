import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './auth/AuthProvider'

const ProtectedRoutes = ({ children }) => {
    
    const { user } = useContext(AuthContext)
    
    if (!user) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/register" />
    }

    // authorized so return child components
    return children
}

export default ProtectedRoutes