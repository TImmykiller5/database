import React from 'react'
import SideBar from '../../component/SideBar/SideBar'
import './DashBoard.css'
import TodaySales from '../../component/todaySales/TodaySales'
import TopProducts from '../../component/topProducts/TopProducts'
import Earnings from '../../component/earnings/Earnings'
import { getTransactionRecord, getTopProduct } from '../../actions/inventoryActions'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { proxy } from '../../actions/inventoryActions'

function Dashboard() {
  const date = new Date().toJSON().split('T')[0].split('-')
  const params = {days:2}
  const dispatch = useDispatch()
  const [topPro, setTopProduct] = useState({ topProduct: {} });

  useEffect(() => {
    dispatch(getTransactionRecord(params))
    const getProduct = async () => {
      try {
        setTopProduct({ ...topPro, loading: true });
        const { data } = await axios.get(`${proxy}db/get-top-product/`);
        setTopProduct({ topProduct: data, loading: false });
      } catch (error) {
        console.log('error')
        setTopProduct({ err: error, loading: false, error: true });
      }
      console.log(topPro)
    };
    
    getProduct();
    // dispatch(getTopProduct());
  },[])
  return (
    <div>
      <div className='dash'>
        
        <div className='Main-View'>
          <div className='data'>
          <div> <TodaySales topP={topPro.topProduct && topPro}/> </div>
          <div> <TopProducts topP={topPro && topPro}/> </div>
          <div> <Earnings topP={topPro.topProduct && topPro}/> </div>
          </div>
        </div>
      </div>
        
    </div>
    
  )
}

export default Dashboard