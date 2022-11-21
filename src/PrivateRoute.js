import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'


import { Navigate, Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import AddProduct from './pages/AddProduct'
import ProductProvider from './product-ui-controller/ProductProvider'
import SingleProduct from './pages/SingleProduct'
import EditProduct from './pages/EditProduct'

const PrivateRoute = () => {

  return (
    <div className='App'>
      <Navbar />
      
      <Sidebar />

      <div className='main'>
        <Routes>
            <Route path='/' element={<Navigate to='/dashboard' replace={true} />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <ProductProvider>
            <Routes>
              <Route path='/products' element={<Products />} />
              <Route path='/products/add' element={<AddProduct />} />
              <Route path='/products/:id' element={<SingleProduct />}/>
              <Route path='/products/:id/edit' element={<EditProduct />} />
            </Routes>
        </ProductProvider>
      </div>
    </div>
  )
}

export default PrivateRoute
