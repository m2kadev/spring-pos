import React from 'react'
import Spinner from '../images/loading.svg'

const Loading = () => {
  return (
    <div className='loading'>
        
        <img src={Spinner} alt="loading" className='loading-spinner' />
        <p>loading</p>
    </div>
  )
}

export default Loading