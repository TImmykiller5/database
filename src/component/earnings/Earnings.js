import React, {useEffect, useState} from "react";
import "./Earnings.css";
import SemiCircleProgress from "react-progressbar-semicircle";
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
} from "react-vis";

function Earnings(topP) {
  const TopThree = topP.topP?.topProduct[0];
  const profit = topP.topP?.topProduct[1];
  console.log()
  const [width, setwidth] = useState( window.innerWidth *0.55 )
  console.log(width)
  useEffect(()=>{
   function handleResize(){
    setwidth(window.innerWidth *0.55)
   }
    window.addEventListener('resize', handleResize)
  })
  
  return (
    <div className="eCont">
      <div className="earning">
        <div
          className="earning-header"
          style={{
            fontSize: 25,
            color: "#FFFFFF",
            padding: "10px",
            fontWeight: "600",
          }}
        >
          Earnings
        </div>
        <div
          className="earning-highlight"
          style={{ fontSize: 15, color: "#87888C", padding: "10px" }}
        >
          Earnings
        </div>
        <div
          className="earning-value"
          style={{
            fontSize: 35,
            color: "#A9DFD8",
            padding: "10px",
            fontWeight: "600",
          }}
        >
          ₦{profit}
        </div>
        <div
          className="earning-highlight"
          style={{ fontSize: 15, color: "#87888C", padding: "10px" }}
        >
          Profit is 48% More than last Month
        </div>
        <div className="arc">
          <SemiCircleProgress
            percentage={80}
            strokeWidth={30}
            stroke="#A9DFD8"
            background="#2B2B36"
            diameter={250}
            showPercentValue
          />
        </div>
      </div>
      <div className="insight" id='in1'>
        {}
      <XYPlot width={width} height={300}>
          <HorizontalGridLines />
          {/* <VerticalGridLines /> */}
          <XAxis />
          <YAxis />
          <ChartLabel 
            text="X Axis"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.025}
            yPercent={1.01}
            />

          <ChartLabel 
            text="Y Axis"
            className="alt-y-label"
            includeMargin={false}
            xPercent={0.06}
            yPercent={0.06}
            style={{
              transform: 'rotate(-90)',
              textAnchor: 'end'
            }}
            />
          <LineSeries
            className="first-series"
            data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
          />
          <LineSeries className="second-series" data={null} />
          <LineSeries
            className="third-series"
            curve={'curveMonotoneX'}
            data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
            strokeDasharray={'7, 3'}
          />
          
          </XYPlot>
      </div>
    </div>
  );
}

export default Earnings;
