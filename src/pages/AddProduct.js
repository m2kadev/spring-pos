import axios from 'axios'
import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useNavigate } from 'react-router-dom' 
import { productContext } from '../product-ui-controller/ProductProvider'

import { BsArrowReturnLeft } from 'react-icons/bs'

const initialProduct = {
    name: '',
    image: '',
    price: 0,
    quantity: 1,
    stock: 1,
    discount: 0
}

const AddProduct = () => {
  const [product, setProduct] = useState(initialProduct)
  const { user } = useContext(AuthContext)
  const { setSuccess } = useContext(productContext)
  const navigate = useNavigate()

  const config = {
    headers: { 
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${user.token}`
    }
  }

  const addProduct = (e) => {
    e.preventDefault()
    sendProduct()
  }

  const sendProduct = async () => {
    let formData = new FormData()
    formData.append('name', product.name)
    formData.append('price', product.price)
    formData.append('quantity', product.quantity)
    formData.append('stock', product.stock)
    formData.append('discount', product.discount)
    formData.append('category', product.category)

    if (product.image !== '') {
      formData.append('image', product.image)
    }

    await axios.post('http://127.0.0.1:8000/api/products', formData, config )
    setSuccess(true)
    
    setTimeout(() => {
        setSuccess(false)
    }, 3000)

    return navigate('/products')
  }

  return (
    <div className='product-form-wrapper'>
        <div className="product-back-arrow" onClick={() => navigate('/products')}>
          <BsArrowReturnLeft />
        </div>
        <p>Add New Product</p>
        <form className='product-form'  onSubmit={e => addProduct(e)}>

            <div className='product-form-control'>
                <label className='username'>Product Name</label>
                <input type="text" onChange={e => setProduct({...product, name: e.target.value})} required />
            </div>

            <div className="product-form-control">
                <label className='username'>Product Image</label>
                <input type="file" onChange={e => setProduct({...product, image: e.target.files[0]})} />
            </div>

            <div className='product-form-control'>
                <label className='username'>Price</label>
                <input type="text"  onChange={e => setProduct({...product, price: e.target.value})} required />
            </div>

            <div className='product-form-control'>
                <label className='username'>Discount</label>
                <input type="text"  onChange={e => setProduct({...product, discount: e.target.value})} required />
            </div>

            <div className='product-form-control'>
                <label className='username'>Stock</label>
                <input type="text"  onChange={e => setProduct({...product, stock: e.target.value})} required />
            </div>

            <div className='product-form-control'>
                <label className='username'>Category</label>
                <select name="options" onChange={e => setProduct({...product, category: e.target.value})} required>
                  <option value="">Choose an Option</option>
                  <option value="snack">Snack</option>
                  <option value="milk">Milk</option>
                  <option value="juice">Juice</option>
                  <option value="bread">Bread</option>
                  <option value="beauty">Beauty</option>
                  <option value="fruit">fruit</option>
                  <option value="coffee">Coffee</option>
                </select>
            </div>


            <div className='product-btn-control'>
                <button type='submit' className='new-product-btn'>Add Product</button>
            </div>
        
        </form>
    </div>
  )
}

export default AddProduct