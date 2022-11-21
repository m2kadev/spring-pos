import React, { useState } from 'react'
import { IoIosCart } from "react-icons/io"
import { HiUser, HiUserAdd } from 'react-icons/hi'
import {AiFillCaretDown} from 'react-icons/ai'
import { FaBarcode } from 'react-icons/fa'
import POSTABLE from './POSTABLE'
import SITOTAL from './SITOTAL'
import { useContext } from 'react'
import { AuthContext } from '../auth/AuthProvider'
import { useFetch } from '../custom-hooks/useFetch'

const SalesInvoice = ({ setShowBill, setShowCustomerForm }) => {
  const { user } = useContext(AuthContext)

  const config = {
    headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
    }
  }
  
  const url = 'http://127.0.0.1:8000/api/customers'

  const [toggleCustomer, setToggleCustomer] = useState(false)
 

  //customer data
  let { datas } = useFetch(url, config)
  
  const [customerValue, setCustomerValue] = useState('Customers')

  const onChange = (option) => {
    setCustomerValue(option)
  }

  const selectOption = (option) => {
    if (option !== customerValue) onChange(option)
  }

  const isOptionSelected = (option) => {
    return option === customerValue
  }

  return (
    <div className='pos-sales-invoice'>
      <div className='sales-invoice-header'>
        <IoIosCart className='si-cart-icon' />
        <p>
            Sales Invoice
        </p>
      </div>

      <div className='sales-invoice-options'>

        <div className='si-customers'>
            <div className='si-user'>
                <HiUser  />
            </div>
            <div className='text'>
                <div className='inner-text' 
                    onClick={() => {
                        setToggleCustomer(prev => !prev)  
                    }}
                    tabIndex={0}
                >
                    <p style={{fontWeight: 'bold'}}>{customerValue}</p>
                    <div className='icon'><AiFillCaretDown className={toggleCustomer && "rotate"} /></div>
                </div>
                <div className='inner' style={{display: toggleCustomer ? "block": "none"}} >
                    <div className='text-inner'>
                        <ul>
                            {datas?.map(option => (
                                <li 
                                key={option.id}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    selectOption(option.name)
                                    setToggleCustomer(false)
                                }}
                                className={isOptionSelected(option.name) ? 'active-option': ''}
                                >
                                    {option.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='si-user' onClick={() => setShowCustomerForm(prev => !prev)}>
                <HiUserAdd />
            </div>
        </div>

        <div className='si-qrcode'>
            <div className='si-barcode-icon'>
                <FaBarcode />
            </div>
            <input type="text" placeholder='item name/Barcode/Itemcode'  />
        </div>
      </div>

      <POSTABLE />

      <div className='si-other'>

        <div className='si-sms'>
            <input type='checkbox' />
            <p>Send SMS to customer?</p>
        </div>

        <div className='si-other-charges'>
            <p>Other Charges <span style={{color: "brown"}}>*</span></p>
            <input type="text" placeholder='0.00' />
        </div>

      </div>

      <SITOTAL setShowBill={setShowBill} />

    </div>
  )
}

export default SalesInvoice
