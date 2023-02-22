import React from 'react'
import './AdminScreen.css'
import Inventory from '../../component/Admin/Inventory/Inventory'
import Products from '../../component/Admin/Products/Products'
import AddProduct from '../../component/Admin/AddProduct.js/AddProduct'
import { useState } from 'react'

function AdminScreen() {
  const [addProduct, setAddProduct] = useState(false)
  
  return (
    <div className='adminCont'>
      <AddProduct open={addProduct} set={setAddProduct}/>
      <div className='adminPanels'><Inventory/></div>
      <div className='adminPanels' ><Products  open={addProduct} set={setAddProduct} /></div>
    </div>
  )
}

export default AdminScreen