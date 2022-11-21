import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'
import { AiFillCaretDown } from 'react-icons/ai'
import Alert from '../components/Alert'
import Loading from '../components/Loading'
import { productContext } from '../product-ui-controller/ProductProvider'
import { useFetch } from '../custom-hooks/useFetch'

let options = [
  {
    option: 'Categories',
    value: ''
  },
  {
    option: 'option1',
    value: 'option1'
  },
  {
    option: 'option2',
    value: 'option2'
  },
  {
    option: 'option3',
    value: 'option3'
  }
]

const Products = () => {
  const { success } = useContext(productContext)
  const [toggleCategory, setToggleCategory] = useState(false)
  const [category, setCategory] = useState(options[0])


  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  }

  const url = 'http://127.0.0.1:8000/api/products'

  const { datas, loading } = useFetch(url, config)


  return (
    <div className='products-list'>
        {success && <Alert />}
        
        <div className="product-heading-wrapper">
          <p className='products-heading'>Products List</p>
          <div className="product-category-wrapper">

            <div className='category' tabIndex={0} onClick={() => setToggleCategory(!toggleCategory)}>
              {category.option}
              <AiFillCaretDown />
            </div>

            {
              toggleCategory && <ul className="product-categories">
              {
                options.map((option) => (
                  <li
                  key={option.value}
                  className={option.option === category.option ? 'active-category': null}
                  onClick={() => {
                    setCategory(option)
                    setToggleCategory(false)
                  }}
                  >{option.option}</li>
                ))
              }
            </ul>
            }

          </div>
        </div>

        <div className="product-info">
          { loading && <Loading />}

          
          <span className='product-total'>Total Products - {datas?.length} Products</span>
        </div>
        <table className='products-table'>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Discount</th>
                </tr>
            </thead>
            
            <tbody>
                { datas?.map((product, index) => (
                  <tr 
                  key={product.id} 
                  style={{ background: product.stock < 1 ? 'rgb(255 205 198)': null }}
                  onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <td>{product.name}</td>
                    <td>{product.stock}</td>
                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Products