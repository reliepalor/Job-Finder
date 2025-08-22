import React from 'react'

const Cards = ({children, bg = 'bg-gray-100'}) => {
  return (
        <div className={`${bg} p-6 rounded-lg shadow-md hover:shadow-lg duration-200 ease-in-out`}>
            {children}
        </div>
  )
}

export default Cards
