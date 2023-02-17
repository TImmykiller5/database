import React from "react";
import "./TopProducts.css";

function TopProducts() {
  return (
    <div className="main2">
      <div className="top-products">
        <h2>Top Products</h2>
        <div className="top-list">
          <div className="top-list-numbering">
            <p>#</p>
            <p>Name</p>
            <p>Popularity</p>
            <p>Sales</p>
            </div>
          <div className="top-list-item">
            <div className="Product-Position" style={{"fontWeight":"500"}}>01</div>
            <div className="Product-Name"  style={{"fontWeight":"500"}}>Home Decore Range</div>
            <div className="Product-popularity"><div className="bar"  style={{"--color":"#FCB859", "--barWidth":"46%"}}></div></div>
            <div className="Product-sales Sales-box" style={{"--bgcolor":"rgb(252 184 89 / 0.12)", "--color":"#FCB859"}}>46%</div>
          </div>
          <div className="top-list-item">
            <div className="Product-Position" style={{"fontWeight":"500"}}>02</div>
            <div className="Product-Name" style={{"fontWeight":"500"}}>Disney Princess Dress</div>
            <div className="Product-popularity"><div className="bar"  style={{"--color":"#A9DFD8", "--barWidth":"17%"}}></div></div>
            <div className="Product-sales Sales-box"  style={{"--bgcolor":"rgb(169 223 216 / 0.12)", "--color":"#A9DFD8"}}>17%</div>
          </div>
          <div className="top-list-item">
            <div className="Product-Position" style={{"fontWeight":"500"}}>03</div>
            <div className="Product-Name" style={{"fontWeight":"500"}}>Bathroom Essentials</div>
            <div className="Product-popularity"><div className="bar"  style={{"--color":"#28AEF3", "--barWidth":"19%"}}></div></div>
            <div className="Product-sales Sales-box" style={{"--bgcolor":"rgb(40 174 243 / 0.12)", "--color":"#28AEF3"}}>19%</div>
          </div>
          <div className="top-list-item">
            <div className="Product-Position" style={{"fontWeight":"500"}}>04</div>
            <div className="Product-Name" style={{"fontWeight":"500"}}>Apple Smartwatch</div>
            <div className="Product-popularity"><div className="bar"  style={{"--color":"#F2C8ED", "--barWidth":"29%"}}></div></div>
            <div className="Product-sales Sales-box" style={{"--bgcolor":"rgb(242 200 237 / 0.12)", "--color":"#F2C8ED"}}>29%</div>
          </div>
        </div>
      </div>
      <div className="customer-fulfilment">
      <div className="progress">
        
      </div>
      </div>
      


    </div>
  );
}

export default TopProducts;
