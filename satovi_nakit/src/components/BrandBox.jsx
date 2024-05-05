import React from 'react'
import '../styles/BrandBox.css'

const BrandBox = ({imageUrl}) => {
  return (
    <div>
      <img className='brandImg' src={imageUrl} />
    </div>
  )
}

export default BrandBox