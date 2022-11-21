import React, { useState } from 'react'
import Brands from '../components/Brands'
import POSNAV from '../components/POSNAV'
import SalesInvoice from '../components/SalesInvoice'
import { CartProvider } from '../cart-controller/CartContext'
import Bills from '../components/Bills'
import AddCustomer from '../customer-form/AddCustomer'

const POS = () => {
  const [showBill, setShowBill] = useState(false)
  const [showCustomerForm, setShowCustomerForm] = useState(false)

  return (
    <CartProvider>
      <POSNAV />
      <div className='pos-child-wrapper'>
        <SalesInvoice setShowBill={setShowBill} setShowCustomerForm={setShowCustomerForm} />
        <Brands />
      </div>
      { showBill ? <Bills setShowBill={setShowBill} /> : null }

      { showCustomerForm ? <AddCustomer setShowCustomerForm={setShowCustomerForm} /> : null }
    </CartProvider>
  )
}

export default POS
