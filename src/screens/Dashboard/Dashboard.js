import React from 'react'
import SideBar from '../../component/SideBar/SideBar'
import './DashBoard.css'
import TodaySales from '../../component/todaySales/TodaySales'
import TopProducts from '../../component/topProducts/TopProducts'
import Earnings from '../../component/earnings/Earnings'

function Dashboard() {
  return (
    <div>
      <div className='dash'>
        
        <div className='Main-View'>
          <p>hello</p>
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