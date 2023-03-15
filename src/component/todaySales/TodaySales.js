import React, {  useEffect, useState } from "react";
import "./TodaySales.css";
import { useSelector } from "react-redux";
import { 
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas

} from "react-vis";


function TodaySales() {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  const transactionRecord = useSelector((state) => state.transactionRecord);
  const {  record } = transactionRecord;
  const [tSale, setTsale] = useState({});
  const [unparsed, setUnparsed] = useState({});
  const [productSold, setproductSold] = useState({});
  // const m = Number(record[1]?.transactionDate.split("T")[0].split("-")[2]);
  function getNum(date) {
    return Number(date?.transactionDate.split("T")[0].split("-")[2]);
  }

  const todaysDate = new Date().getDate();
  const today = new Date();
  const yesterdaysDate = new Date(today);

  yesterdaysDate.setDate(yesterdaysDate.getDate() - 1);

  useEffect(() => {
    const todayTotal = record.reduce((acc, transaction) => {
      if (getNum(transaction) === todaysDate) {
        acc += Number(transaction.totalPrice);
      }
      return acc;
    }, 0);

    const yesTotal = record.reduce((acc, transaction) => {
      if (getNum(transaction) === yesterdaysDate.getDate())
        acc += Number(transaction.totalPrice);
      return acc;
    }, 0);

    const pSoldT = record.reduce((acc, sale) => {
      if (getNum(sale) === todaysDate){acc+=sale.quantity}
      return acc
  },0)

    const pSoldY = record.reduce((acc, sale) => {
      if (getNum(sale) === yesterdaysDate.getDate()){acc+=sale.quantity}
      return acc
  },0)
    setproductSold({yesterdayP:pSoldY, todayP:pSoldT})


    setTsale({
      todaySales: todayTotal.toLocaleString("en-US"),
      YesSales: yesTotal.toLocaleString("en-US"),
    });
    setUnparsed({ todaySales: todayTotal, YesSales: yesTotal });
  }, [record]);

  const { YesSales, todaySales } = tSale;
  const { todayP, yesterdayP } = productSold;
  const { YesSales: Ysales, todaySales: tSales } = unparsed;
  

  return (
    <div className="main1">
      <div className="saleSummary">
        <h2>Today's Sales</h2>
        <p>Sales Summary</p>
        <div className="sales">
          <div className="sales-boxes">
            <div className="sales-item">
              <div style={{ fontSize: 30, color: "#FEB95A", paddingB: "10px" }}>
                <svg
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7034 6.9514L11.7277 1.08334L1.75201 6.9514V18.6875L11.7277 24.5556L21.7034 18.6875V6.9514Z"
                    stroke="#FEB95A"
                    stroke-width="1.95"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.03326 13.9931V16.3403M11.7277 11.6458V16.3403V11.6458ZM16.4222 9.29861V16.3403V9.29861Z"
                    stroke="#FEB95A"
                    stroke-width="1.95"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h2 style={{ fontSize: 30 }}>₦{todaySales}</h2>
              <p>Total Sales</p>
              <p style={{ fontSize: 12, color: "#FEB95A" }}>
                {tSales > Ysales ? (
                  <span>
                    +{Math.round(((tSales - Ysales) / Ysales) * 100)}% up from
                    yesterday
                  </span>
                ) : (
                  <span>
                    -{Math.round(((Ysales - tSales) / Ysales) * 100)}% down from
                    yesterday
                  </span>
                )}
              </p>
            </div>
            <div className="sales-item">
              <div style={{ fontSize: 30, color: "#FEB95A", paddingB: "10px" }}>
                <svg
                  width="21"
                  height="24"
                  viewBox="0 0 21 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4987 1.69315H18.2645C18.5609 1.69315 18.8451 1.81204 19.0547 2.02367C19.2643 2.2353 19.382 2.52233 19.382 2.82163V21.4415C19.382 21.7408 19.2643 22.0279 19.0547 22.2395C18.8451 22.4511 18.5609 22.57 18.2645 22.57H2.61951C2.32313 22.57 2.03889 22.4511 1.82932 22.2395C1.61975 22.0279 1.50201 21.7408 1.50201 21.4415V2.82163C1.50201 2.52233 1.61975 2.2353 1.82932 2.02367C2.03889 1.81204 2.32313 1.69315 2.61951 1.69315H6.53076V3.38587H14.3533V1.69315H15.4987Z"
                    stroke="#A9DFD8"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h2 style={{ fontSize: 30 }}>$5k</h2>
              <p>Top Store</p>
              <p style={{ fontSize: 12, color: "#A9DFD8" }}>
                +10% down from yesterday
              </p>
            </div>
            <div className="sales-item">
              <div style={{ fontSize: 30, color: "#FEB95A", paddingB: "10px" }}>
                <div>
                  <svg
                    width="27"
                    height="26"
                    viewBox="0 0 27 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3006 7.24477H22.9059C23.1239 7.24499 23.3342 7.32613 23.4958 7.47249C23.6574 7.61885 23.759 7.81999 23.7808 8.03696L24.3177 13.4062H22.5468L22.1067 9.00519H19.3006V11.6458C19.3006 11.8793 19.2078 12.1031 19.0427 12.2682C18.8777 12.4333 18.6538 12.526 18.4203 12.526C18.1869 12.526 17.963 12.4333 17.7979 12.2682C17.6329 12.1031 17.5401 11.8793 17.5401 11.6458V9.00519H10.4985V11.6458C10.4985 11.8793 10.4057 12.1031 10.2407 12.2682C10.0756 12.4333 9.85171 12.526 9.61826 12.526C9.38482 12.526 9.16093 12.4333 8.99586 12.2682C8.83079 12.1031 8.73805 11.8793 8.73805 11.6458V9.00519H5.93019L4.52186 23.0885H14.0193V24.8489H3.54835C3.42541 24.8488 3.30385 24.8229 3.19152 24.773C3.07919 24.723 2.97857 24.6501 2.89614 24.5589C2.81372 24.4677 2.75131 24.3602 2.71295 24.2434C2.67459 24.1266 2.66112 24.003 2.67342 23.8807L4.25779 8.03696C4.2796 7.81999 4.38116 7.61885 4.54281 7.47249C4.70445 7.32613 4.91466 7.24499 5.13272 7.24477H8.73805V6.63039C8.73805 3.57782 11.09 1.08331 14.0193 1.08331C16.9486 1.08331 19.3006 3.57782 19.3006 6.63039V7.24653V7.24477ZM17.5401 7.24477V6.63039C17.5401 4.52845 15.9522 2.84373 14.0193 2.84373C12.0864 2.84373 10.4985 4.52845 10.4985 6.63039V7.24653H17.5401V7.24477ZM23.0802 20.3423C23.1605 20.2549 23.2576 20.1847 23.3657 20.1358C23.4739 20.0869 23.5907 20.0604 23.7094 20.0579C23.828 20.0554 23.9459 20.0768 24.0561 20.121C24.1662 20.1652 24.2662 20.2312 24.3502 20.3151C24.4342 20.3989 24.5003 20.4989 24.5447 20.6089C24.589 20.719 24.6106 20.8369 24.6083 20.9555C24.6059 21.0741 24.5796 21.1911 24.5308 21.2993C24.4821 21.4075 24.412 21.5047 24.3248 21.5851L20.804 25.106C20.6389 25.271 20.415 25.3637 20.1816 25.3637C19.9482 25.3637 19.7244 25.271 19.5593 25.106L16.0385 21.5851C15.9544 21.5039 15.8874 21.4068 15.8412 21.2994C15.7951 21.192 15.7708 21.0765 15.7698 20.9597C15.7688 20.8428 15.7911 20.7269 15.8353 20.6187C15.8796 20.5105 15.9449 20.4122 16.0276 20.3296C16.1102 20.247 16.2085 20.1816 16.3167 20.1373C16.4249 20.0931 16.5408 20.0708 16.6576 20.0718C16.7745 20.0728 16.89 20.0971 16.9974 20.1433C17.1048 20.1894 17.2019 20.2564 17.2831 20.3405L19.3006 22.3597V16.0469C19.3006 15.8134 19.3933 15.5895 19.5584 15.4245C19.7234 15.2594 19.9473 15.1666 20.1808 15.1666C20.4142 15.1666 20.6381 15.2594 20.8032 15.4245C20.9682 15.5895 21.061 15.8134 21.061 16.0469V22.3597L23.0802 20.3405V20.3423Z"
                      fill="#F2C8ED"
                    />
                  </svg>
                </div>
              </div>
              <h2 style={{ fontSize: 30 }}>{todayP}</h2>
              <p>Products Sold</p>
              <p style={{ fontSize: 12, color: "#F2C8ED" }}>
              {todayP > yesterdayP ? (
                  <span>
                    +{Math.round(((todayP - yesterdayP) / yesterdayP) * 100)}% up from
                    yesterday
                  </span>
                ) : (
                  <span>
                    -{Math.round(((yesterdayP - todayP) / yesterdayP) * 100)}% down from
                    yesterday
                  </span>
                )}
              </p>
            </div>
            <div className="sales-item">
              <div style={{ fontSize: 30, color: "#FEB95A", paddingB: "10px" }}>
                <div className='bid-svg'>
                  <svg
                  height='26'
                  width='27'
                  fill="#20AEF3"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_7"
                    data-name="Layer 7"
                    viewBox="0 0 64 64"
                  >
                    <title>
                      product, quality, seller, best seller, Best selling
                      products
                    </title>
                    <path d="M49.651,11.127c-.388-.044-1.337-.132-3.857,3.275l-.029-.033a1,1,0,1,0-1.513,1.306l.86,1a1,1,0,0,0,.757.347l.054,0a1,1,0,0,0,.769-.431,16.732,16.732,0,0,1,2.949-3.467,1,1,0,0,0,.01-1.992Z" />
                    <path d="M60,24.739,55,19.745a9.6,9.6,0,1,0-15.443,0l-4.994,4.994a1,1,0,0,0,.776,1.7l3.11-.213-.213,3.11a1,1,0,0,0,1.705.776l6.492-6.492c.279.024.56.042.846.042s.566-.018.845-.042l6.492,6.492a1,1,0,0,0,1.7-.776l-.213-3.11,3.11.213a1.013,1.013,0,0,0,.979-.584A1,1,0,0,0,60,24.739ZM40.416,26.816l.109-1.592a1,1,0,0,0-1.066-1.066l-1.592.109,3.041-3.042a9.594,9.594,0,0,0,3.206,1.894ZM39.684,14.07a7.6,7.6,0,1,1,7.6,7.6A7.606,7.606,0,0,1,39.684,14.07ZM55.1,24.158a1,1,0,0,0-1.066,1.066l.109,1.592-3.7-3.7a9.6,9.6,0,0,0,3.2-1.893L56.7,24.267Z" />
                    <path d="M42.4,57.527H40.02a2.428,2.428,0,0,0,.03-.78L36.628,32.508a2.449,2.449,0,0,0-2.415-2.1,1,1,0,0,0,0,2,.44.44,0,0,1,.434.378l1.628,11.528-14.458,5.47a.453.453,0,0,1-.324,0L7.508,44.324,9.136,32.787a.437.437,0,0,1,.436-.378h3.1v2.385a2.5,2.5,0,0,0,5,0V22.7a4.145,4.145,0,0,1,4.155-4.07h.113a4.154,4.154,0,0,1,4.177,4.07v7.706h-5.7a1,1,0,0,0,0,2h5.7v2.385a2.5,2.5,0,0,0,5,0V22.7a9.061,9.061,0,0,0-9.155-8.837H21.8A9.052,9.052,0,0,0,12.67,22.7v7.706h-3.1a2.451,2.451,0,0,0-2.416,2.1L3.734,56.747a2.44,2.44,0,0,0,2.416,2.78H42.4a1,1,0,0,0,0-2ZM14.67,22.7a7.045,7.045,0,0,1,7.141-6.837h.141A7.055,7.055,0,0,1,29.115,22.7V34.794a.518.518,0,0,1-1,0V22.7a6.162,6.162,0,0,0-6.169-6.07h-.129A6.153,6.153,0,0,0,15.67,22.7V34.794a.518.518,0,0,1-1,0ZM33.635,57.527H6.15a.44.44,0,0,1-.435-.5L7.22,46.358l13.545,5.288a2.453,2.453,0,0,0,1.761.009l14.035-5.31,1.508,10.681a.44.44,0,0,1-.435.5Z" />
                    <path d="M46.471,57.816c-.05-.04-.1-.08-.16-.12a.546.546,0,0,0-.17-.09.6.6,0,0,0-.19-.06.856.856,0,0,0-.39,0,.636.636,0,0,0-.18.06.7.7,0,0,0-.18.09l-.15.12a1.155,1.155,0,0,0-.21.33.839.839,0,0,0-.081.38,1,1,0,1,0,1.921-.38A1.155,1.155,0,0,0,46.471,57.816Z" />
                    <path d="M19.046,42.968a1,1,0,0,0,0,2h5.693a1,1,0,1,0,0-2Z" />
                    <path d="M4.653,12.844A5.7,5.7,0,0,1,8.6,16.963a1.34,1.34,0,0,0,1.24.971h.048a1.337,1.337,0,0,0,1.253-.876,6.514,6.514,0,0,1,3.963-4.2,1.318,1.318,0,0,0,.876-1.289,1.362,1.362,0,0,0-1-1.267,5.309,5.309,0,0,1-3.75-3.619,1.321,1.321,0,0,0-1.32-.9,1.346,1.346,0,0,0-1.25,1.025C8.234,8.52,6.938,9.65,4.7,10.267a1.343,1.343,0,0,0-.048,2.577Zm5.358-4.025a7,7,0,0,0,2.961,2.845,8.31,8.31,0,0,0-3.037,3.22,7.36,7.36,0,0,0-3.091-3.267A6.592,6.592,0,0,0,10.011,8.819Z" />
                    <path d="M52.307,39.431a5.166,5.166,0,0,1-3.647-3.522,1.289,1.289,0,0,0-1.314-.893,1.339,1.339,0,0,0-1.241,1.019c-.419,1.659-1.679,2.757-3.852,3.357a1.334,1.334,0,0,0-.05,2.562,5.544,5.544,0,0,1,3.84,4.007,1.331,1.331,0,0,0,1.234.965h.046a1.324,1.324,0,0,0,1.245-.871,6.341,6.341,0,0,1,3.858-4.085,1.311,1.311,0,0,0,.87-1.284A1.349,1.349,0,0,0,52.307,39.431Zm-4.936,4.443A7.21,7.21,0,0,0,44.4,40.735a6.465,6.465,0,0,0,3.042-2.688,6.846,6.846,0,0,0,2.843,2.734A8.1,8.1,0,0,0,47.371,43.874Z" />
                  </svg>
                </div>
              </div>
              <h2 style={{ fontSize: 30 }}>{record[0]?.ProductName} </h2>

              <p>Top product</p>
              <p style={{ fontSize: 12, color: "#20AEF3" }}>
                Based upon total sale volume
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="level"><div className="App">
      <XYPlot width={300} height={300} stackBy="y">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          < VerticalBarSeries data={[{x: 2, y: 10}, {x: 4, y: 5}, {x: 5, y: 15}]} />
          < VerticalBarSeries data={[{x: 2, y: 12}, {x: 4, y: 2}, {x: 5, y: 11}]} />
        </XYPlot>
      </div></div>
    </div>
  );
}

export default TodaySales;
