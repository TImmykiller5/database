import React from 'react'
import SideBar from '../../component/SideBar/SideBar'
import './DashBoard.css'
import TodaySales from '../../component/todaySales/TodaySales'
import TopProducts from '../../component/topProducts/TopProducts'
import Earnings from '../../component/earnings/Earnings'
import { getTransactionRecord, getTopProduct } from '../../actions/inventoryActions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function Dashboard() {
  const date = new Date().toJSON().split('T')[0].split('-')
  const params = {year:date[0], month:date[1], day:date[2]}
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTransactionRecord(params)
    )
    // dispatch(getTopProduct());
  },[])
  return (
    <div>
      <div className='dash'>
        
        <div className='Main-View'>
          <div className='data'>
          <div> <TodaySales/> </div>
          <div> <TopProducts/> </div>
          <div> <Earnings/> </div>
          </div>
        </div>
      </div>
        
    </div>
    
  )
}

export default Dashboard