import React, { createContext, useState } from 'react'
export const productContext = createContext()

const ProductProvider = ({ children }) => {
  const [success, setSuccess] = useState(false)
  const value = {
    success,
    setSuccess
  }
  return (
    <productContext.Provider value={value}>
        { children }
    </productContext.Provider>
  )
}

export default ProductProvider