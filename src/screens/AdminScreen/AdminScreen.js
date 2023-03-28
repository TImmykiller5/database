import React from 'react'
import './AdminScreen.css'
import Inventory from '../../component/Admin/Inventory/Inventory'
import Products from '../../component/Admin/Products/Products'
import AddProduct from '../../component/Admin/AddProduct.js/AddProduct'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productAction'

function AdminScreen() {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList);
  const [addProduct, setAddProduct] = useState(false)
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className='adminCont'>
      <AddProduct open={addProduct} set={setAddProduct}/>
      <div className='adminPanels'><Inventory ProductList={productList}/></div>
      <div className='adminPanels' ><Products ProductList={productList}  open={addProduct} set={setAddProduct} /></div>
    </div>
  )
}

export default AdminScreen