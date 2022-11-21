import React, { useState } from 'react'
import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { AuthContext } from '../auth/AuthProvider'
import { usePost } from '../custom-hooks/usePost'

const initialCustomer = {
    name: '',
    email: '',
    address: '',
    phone: ''
}

const AddCustomer = ({ setShowCustomerForm }) => {

  const [customer, setCustomer] = useState(initialCustomer)
  const { user } = useContext(AuthContext)

  const config = {
    headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
    }
  }
  
  const url = 'http://127.0.0.1:8000/api/customers'

  const { postData } = usePost(url, config)

  const handleCustomer = (e) => {
    e.preventDefault()
    postData(customer)
    setShowCustomerForm(false)
  }

  return (
    <div className='customer-form-wrapper'>

        <form className='customer-form' onSubmit={e => handleCustomer(e)}>
            <h3>Add Customer</h3>
            <div className="customer-close" onClick={() => setShowCustomerForm(false)}>
                <MdClose className='customer-close-icon' />
            </div>
            <div className='customer-form-control'>
                <label>Name</label>
                <input type="text" onChange={e => setCustomer({...customer, name: e.target.value})} autoFocus placeholder='customer name' required />
            </div>

            <div className='customer-form-control'>
                <label>Email</label>
                <input type="email" onChange={e => setCustomer({...customer, email: e.target.value})} placeholder='example@gmail.com' required />
            </div>

            <div className='customer-form-control'>
                <label>Phone Number</label>
                <input type="text" onChange={e => setCustomer({...customer, phone: e.target.value})} placeholder='09*********' required />
            </div>

            <div className='customer-form-control'>
                <label>Address</label>
                <input type="text" onChange={e => setCustomer({...customer, address: e.target.value})} placeholder='myanmar, yangon' required />
            </div>

            <div className='customer-form-control'>
                <button type='submit' className='customer-add-btn'>Add Customer</button>
            </div>

        </form>
    </div>
  )
}

export default AddCustomer