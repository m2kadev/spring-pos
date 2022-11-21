import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'
import NoImage from '../images/no_image.jpg'
import { useNavigate } from 'react-router-dom'
const SingleProduct = () => {

  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [productData, setProductData] = useState({})
  const navigate = useNavigate()
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  const getSingleProduct = async () => {
    const d = await (await axios.get(`http://127.0.0.1:8000/api/products/${id}`, config)).data
    setProductData(d)
    console.log(productData)
  }

  const deleteSellItem = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`, config)
    navigate('/products')
  }

  return (
    <div className='single-product'>
        <div className="card">
          <img src={productData.image ? `http://127.0.0.1:8000/storage/${productData.image}`: NoImage} alt="productimage" />
          <div className="card-body">
            <div className="row">
              <div className="card-title">
                <h4>{productData?.name}</h4>
                <h3>${productData?.price}</h3>
              </div>
              <div className="view-btn">
                <p>{productData?.discount} Discount</p>
              </div>
            </div>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
              dignissimos.
            </p>
            <div className="btn-group">
              <div className="btn">
                <button onClick={() => deleteSellItem(productData?.id)}>Delete</button>
              </div>
              <Link className='edit-link' to={`/products/${productData.id}/edit`}>Edit</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SingleProduct