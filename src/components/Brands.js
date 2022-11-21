import React from 'react'
import { useContext } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { AuthContext } from '../auth/AuthProvider'
import useCart from '../cart-controller/CartContext'
import { useFetch } from '../custom-hooks/useFetch'
import NoImage from '../images/no_image.jpg'
import Loading from './Loading'


const Brands = () => {
  const { addToCart } = useCart()
  const { user } = useContext(AuthContext)

  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const url = "http://127.0.0.1:8000/api/products"

  const { datas, loading, getDatas, setDatas  } = useFetch(url, config)

  const handleSearch = (e) => {
    if(e.target.value === "") {
      getDatas()
    } else {
      let searchProduct = datas.filter(p => p.name.includes(e.target.value))
      setDatas(searchProduct)
    }
  }

  const handleAdd = (product) => {
    if (product.stock === 0) {
      return 
    }
    else addToCart(product)
  }

  return (
    <div className='brands-container'>

      <div className='search-brands'>
        <div className='search-icon'>
           <IoIosSearch />
        </div>
        <input type="text" placeholder='Search Brands' onChange={handleSearch} />
      </div>

      {loading && <Loading />}
      <div className='brands-wrapper'>
        {datas?.map(product => (
          <div key={product.id} className='brands' onClick={() => handleAdd(product)} >
              <img src={product.image ? `http://127.0.0.1:8000/storage/${product.image}`: NoImage} alt="productimage" />
              <p className='b-name'>{product.name}</p>
              <p className='b-price'>{product.price}Kyats</p>
              <span className='b-disc'>{product.discount} discount</span>

              { product.stock === 0 ? 
              <div className='brands-notavailable'>
              </div> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
