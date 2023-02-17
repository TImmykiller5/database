import React from 'react'
import './AdminScreen.css'

function AdminScreen() {
  return (
    <div className='adminCont'>
      <div className='adminPanels'>Transactions</div>
      <div className='adminPanels'>Product</div>
      <div className='adminPanels'>Inventory</div>
      <div className='adminPanels'>Stores</div>
    </div>
  )
}

export default AdminScreen