import React from "react";
import "./inventory.css";

function Inventory() {
  return (
    <div className="main">
    
      <h3>Overall Inventory</h3>
      <div className="inventoryCont">
        <div className="inventoryItem inventLine">
          <h3>Categories</h3>
          <div>
          <h3 className="countInStock">14</h3>
          <p className="inventory-highlight">Last 7 days</p>
          </div>
        </div>
        <div className="inventoryItem inventLine ">
          <h3>Total Products</h3>
          <div className="invenItem2">
            <div>
              <h3>868</h3>
              <p className="inventory-highlight ">Last 7 days</p>
            </div>
            <div>
              <h3>$2345.98</h3>
              <p className="inventory-highlight">Revenue</p>
            </div>
          </div>
        </div>
        <div className="inventoryItem inventLine">
          <h3>Top Selling</h3>
          <div className="invenItem2">
            <div>
              <h3>5</h3>
              <p className="inventory-highlight">Last 7 days</p>
            </div>
            <div>
              <h3>$454.89</h3>
              <p className="inventory-highlight">cost</p>
            </div>
          </div>
        </div>
        <div className="inventoryItem ">
          <h3>Low Stocks</h3>
          <div className="invenItem2">
            <div>
              <h3>12</h3>
              <p className="inventory-highlight">Ordered</p>
            </div>
            <div>
              <h3>2</h3>
              <p className="inventory-highlight">Not in Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
