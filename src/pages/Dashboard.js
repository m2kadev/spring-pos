import React from 'react'
import { BiDollar } from 'react-icons/bi'
import { BsFillCartPlusFill, BsHandbag } from 'react-icons/bs'
import { MdDoNotDisturbOnTotalSilence } from 'react-icons/md'
import Workplace from '../components/Workplace'

const Dashboard = () => {
  return (
    <div>
      <p className='dashboard'>Dashboard <span>Overall Information on Single Screen</span></p>

      <div className='paid-info-wrapper'>

        <div className='paid bg-red'>
          <div className='paid-icon'>
            <BsHandbag />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

        <div className='paid bg-green'>
          <div className='paid-icon '>
            <BiDollar />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

        <div className='paid bg-blue'>
          <div className='paid-icon '>
            <BsFillCartPlusFill />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

        <div className='paid bg-orange'>
          <div className='paid-icon '>
            <MdDoNotDisturbOnTotalSilence />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

        <div className='paid bg-pink'>
          <div className='paid-icon '>
            <BsHandbag />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

        <div className='paid bg-red'>
          <div className='paid-icon'>
            <BiDollar />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

        <div className='paid bg-green'>
          <div className='paid-icon '>
            <BsFillCartPlusFill />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

        <div className='paid bg-blue'>
          <div className='paid-icon '>
            <MdDoNotDisturbOnTotalSilence />
          </div>
          <div className='paid-info'>
            <p>TOTAL PURCHASE DUE</p>
            <p>234.343</p>
          </div>
        </div>

      </div>


      <Workplace />
    </div>
  )
}

export default Dashboard
