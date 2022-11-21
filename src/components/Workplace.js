import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'
const Workplace = () => {
  return (
    <div className='workplace-wrapper'>
        
      <div className='workplace customers bg-red'>
        <div className='workplace-flex'>
            <div>
                <h1>9</h1>
                <p>CUSTOMERS</p>
            </div>
            <FaUsers className='workplace-icon' />
        </div>
        <div className='workplace-link'>
            <Link to="/dashboard" className='workplace-link-tag'>VIEW <BsArrowRight /></Link>
        </div>
      </div>

      <div className='workplace suppliers bg-orange'>
        <div className='workplace-flex'>
            <div>
                <h1>9</h1>
                <p>SUPPLIERS</p>
            </div>
            <FaUsers className='workplace-icon' />
        </div>
        <div className='workplace-link'>
            <Link to="/dashboard" className='workplace-link-tag'>VIEW <BsArrowRight /></Link>
        </div>
      </div>

      <div className='workplace purchase-invoice bg-blue'>
        <div className='workplace-flex'>
            <div>
                <h1>9</h1>
                <p>PURCHASE INVOICE</p>
            </div>
            <MdOutlineLibraryBooks className='workplace-icon' />
        </div>
        <div className='workplace-link'>
            <Link to="/dashboard" className='workplace-link-tag'>VIEW <BsArrowRight /></Link>
        </div>
      </div>

      <div className='workplace sales-invoice bg-pink'>
        <div className='workplace-flex'>
            <div>
                <h1>9</h1>
                <p>SALES INVOICE</p>
            </div>
            <MdOutlineLibraryBooks className='workplace-icon' />
        </div>
        <div className='workplace-link'>
            <Link to="/dashboard" className='workplace-link-tag'>VIEW <BsArrowRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default Workplace
