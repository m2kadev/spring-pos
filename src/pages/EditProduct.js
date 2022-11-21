import React, { useState, useEffect } from 'react'
import { BsArrowReturnLeft } from 'react-icons/bs'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'

const EditProduct = () => {

  const [productData, setProductData] = useState({})
  const [photo, setPhoto] = useState(null)
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

   const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json'
        }
   }

  useEffect(() => {
    getSingleProduct()
  }, [])

  const getSingleProduct = async () => {
    const d = await (await axios.get(`http://127.0.0.1:8000/api/products/${id}`, config)).data
    setProductData(d)
  }

  const updateProduct = (e) => {
    e.preventDefault()

    sendProduct()
  }

  const sendProduct = async () => {
        let formData = new FormData() 
        formData.append('name', productData.name)
        formData.append('price', productData.price)
        formData.append('stock', productData.stock)
        formData.append('discount', productData.discount)
        formData.append('quantity', productData.quantity)

        if (photo !== null) {
            formData.append('image', photo)
        }
      
        await axios.put(`http://127.0.0.1:8000/api/products/${id}`, formData, config)

        return navigate('/products')
    }

  return (
     <div className='product-form-wrapper'>
        <div className="product-back-arrow" >
          <BsArrowReturnLeft />
        </div>
        <p>Update Product</p>
        <form className='product-form' onSubmit={e => updateProduct(e)}>

            <div className='product-form-control'>
                <label className='username'>Product Name</label>
                <input type="text" onChange={(e) => setProductData({...productData, name: e.target.value})} value={productData.name} required />
            </div>

            <div className='product-form-control'>
                <label className='username'>Stock</label>
                <input type="text" onChange={(e) => setProductData({...productData, stock: e.target.value})} value={productData.stock} required />
            </div>

            

            <div className='product-form-control'>
                <label className='username'>Price</label>
                <input type="text" onChange={(e) => setProductData({...productData, price: e.target.value})} value={productData.price} required />
            </div>

            <div className='product-form-control'>
                <label className='username'>Discount</label>
                <input type="text" onChange={(e) => setProductData({...productData, discount: e.target.value})} value={productData.discount} required />
            </div>

            <div className="product-form-control">
                <label className='username'>Product Image</label>
                <img src={productData.image && `http://127.0.0.1:8000/storage/${productData.image}`} />
                <input type="file" onChange={e => setPhoto(e.target.files[0])}  />
            </div>

            <div className='product-btn-control'>
                <button type='submit' className='new-product-btn'>Update</button>
            </div>
        
        </form>
    </div>
  )
}

export default EditProduct