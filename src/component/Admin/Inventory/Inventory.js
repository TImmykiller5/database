import React from "react";
import "./inventory.css";
import { useEffect } from "react";
import { proxy, getTransactionRecord } from "../../../actions/inventoryActions";
import { useDispatch, useSelector } from "react-redux";

function Inventory({ProductList}) {
  const { error, loading, products } = ProductList;
  const Record = useSelector((state)=>state.transactionRecord);
  const { error:tError, loading:tLoading, record } = Record
  const params = {days:30}
  // console.log(record)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTransactionRecord(params))
  },[])
  return (
    <div className="main">
    
      <h3>Overall Inventory</h3>
      <div className="inventoryCont">
        <div className="inventoryItem inventLine">
          <h3>Products</h3>
          <div>
          <h3 className="countInStock">{products?.length}</h3>
          <p className="inventory-highlight">All Products</p>
          </div>
        </div>
        <div className="inventoryItem inventLine ">
          <h3>Total Sale</h3>
          <div className="invenItem2">
            <div>
              <h3>{record?.length}</h3>
              <p className="inventory-highlight ">Last 30 days</p>
            </div>
            <div>
              <h3>${
              record?.reduce((acc, record)=>{
                acc += Number(record.totalPrice)
                return acc
              }, 0).toLocaleString("en-US")
              }</h3>
              <p className="inventory-highlight">Revenue</p>
            </div>
          </div>
        </div>
        <div className="inventoryItem inventLine">
          <h3>Top Selling</h3>
          <div className="invenItem2">
            <div>
              <h3>5</h3>
              <p className="inventory-highlight">Last 30 days</p>
            </div>
            <div>
              <h3>$454.89</h3>
              <p className="inventory-highlight">cost</p>
            </div>
          </div>
        </div>
        <div className="inventoryItem ">
          <h3>Stock</h3>
          <div className="invenItem2">
            <div>
              <h3>12</h3>
              <p className="inventory-highlight">In Stock</p>
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
