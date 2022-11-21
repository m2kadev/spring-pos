import React, { useState, useEffect } from 'react'
import { FaRegHandPaper } from 'react-icons/fa'
import { BsCash } from 'react-icons/bs'
import useCart from '../cart-controller/CartContext'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import axios from 'axios'
import { useFetch } from '../custom-hooks/useFetch'

const SITOTAL = ({setShowBill}) => {

  const { totalPrices, totalDiscount, totalQuantity, orderItems, clearCart  } = useCart()
  const [orderData, setOrderData] = useState({})
  const { user } = useContext(AuthContext)
  const url = 'http://127.0.0.1:8000/api/order'
  const orderedProductUrl = 'http://127.0.0.1:8000/api/products/ordered'
  const productUrl = 'http://127.0.0.1:8000/api/products'

  const config = {
    headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
    }
  }

  const { setRefetch, getDatas } = useFetch(productUrl, config)

  useEffect(() => {

    setOrderData({
        customer_id: 1,
        total_amount: totalPrices,
        total_discount: totalDiscount,
        items: orderItems
    })

  }, [orderItems])

  const addToOrder = async () => {

    if (orderData.items.length === 0) {
      return
    }
    
    try {
      await axios.post(url, orderData, config)
      await axios.post(orderedProductUrl, orderItems, config)
      setRefetch({})
      getDatas()
      return clearCart()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='si-total-wrapper'>
        <div className='si-total'>
            <div>
                <p className='si-total-header'>Quantity:</p>
                <p className='si-total-amount'>{totalQuantity}<span style={{fontSize: "0.8rem"}}>Items</span></p>
            </div>
            <div>
                <p className='si-total-header'>Total Amount:</p>
                <p className='si-total-amount'>{totalPrices}<span style={{fontSize: "0.8rem"}}>Kyats</span></p>
            </div>
            <div>
                <p className='si-total-header'>Total Discount:</p>
                <p className='si-total-amount'>{totalDiscount}<span style={{fontSize: "0.8rem"}}>Kyats</span></p>
            </div>
            <div>
                <p className='si-total-header'>Grand Total:</p>
                <p className='si-total-amount'>{totalPrices - totalDiscount}<span style={{fontSize: "0.8rem"}}>Kyats</span></p>
            </div>
        </div>

        <div className='si-btn-group'>
            <button className='si-btn bg-red'><FaRegHandPaper /> Hold</button>
            <button className='si-btn bg-green'><BsCash />Multiple</button>
            <button className='si-btn bg-blue' onClick={addToOrder}><BsCash /> Cash</button>
            <button className='si-btn bg-orange' onClick={() => setShowBill(prev => (prev = !prev))}><BsCash /> Pay All</button>
        </div>
    </div>
  )
}

export default SITOTAL
