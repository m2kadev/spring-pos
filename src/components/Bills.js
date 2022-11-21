import React from 'react'
import useCart from '../cart-controller/CartContext'
import { AiFillCreditCard } from 'react-icons/ai'
import { BsCash } from 'react-icons/bs'

const Bills = ({setShowBill}) => {
  const { items, totalPrices, totalDiscount } = useCart()

  return (
    <div className='bills-wrapper'>
      <div className='bills'>
        <div className="header">
          <p>Spring POS</p>
          <button className='bills-delete' onClick={() => setShowBill(false)}>X</button>
        </div>

        <div className="bills-items">

          <div className="bills-left">
            <div className="bills-items-header bills-items-control">
              <p>ပစ္စည်းအမည်</p>
              <p>တန်ဖိုး</p>
              <p>ပမာဏ</p>
            </div>

            {items?.map(item => (
              <div key={item.id} className="bills-items-control items-list">
                <p>{item.name}</p>
                <p className='bills-price-list'>{item.price} ကျပ်</p>
                <p>{item.quantity} ခု</p>
              </div>
            ))}

            <div className="bills-items-control total-bills">
              <p>စုစုပေါင်း</p>
              <p className='total-bills-pill'><span>{totalDiscount} discount</span> {totalPrices - totalDiscount} ကျပ်</p>
            </div>

          </div>

          <div className="bills-right">
            <p className='bills-options-header'>ငွေပေးချေရန် - ရွေးချယ်မှုများ</p>

            <div className="bills-btn-group">
              <button className='bg-blue'><AiFillCreditCard />Card</button>
              <button className='bg-red'>ATM</button>
              <button className='bg-orange'><BsCash />Cash</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Bills
