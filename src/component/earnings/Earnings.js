import React from 'react'
import './Earnings.css'
import SemiCircleProgress from "react-progressbar-semicircle";


function Earnings() {
  return (
    <div className='eCont'>
        <div className='earning'>
            <div className='earning-header' style={{ fontSize: 25, color: "#FFFFFF", padding: "10px", "fontWeight":"600"}}>Earnings</div>
            <div className='earning-highlight' style={{ fontSize: 15, color: "#87888C", padding: "10px" }}>Earnings</div>
            <div className='earning-value' style={{ fontSize: 35, color: "#A9DFD8", padding: "10px", "fontWeight":"600"}}>$6078.76</div>
            <div className='earning-highlight' style={{ fontSize: 15, color: "#87888C", padding: "10px" }}>Profit is 48% More than last Month</div>
        <div className='arc'>
            <SemiCircleProgress percentage={80} strokeWidth={30} stroke="#A9DFD8" background="#2B2B36" diameter={250} showPercentValue />
        </div>
        </div>
        <div className='insight'>
            visitor insight
        </div>
    </div>
  )
}

export default Earnings