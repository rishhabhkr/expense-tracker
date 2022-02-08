import React from 'react'

export const Transaction = () => {
  return (
    <>
      <h3>Transaction History</h3>
      <ul className='list'>
        <li className='minus'>
          Cash <span>-$400</span>
          <button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  )
}
