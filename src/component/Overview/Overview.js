import './Overview.css'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from '../../actions/productAction';

function Overview({Product}) {
  const params = useParams();
  const dispatch = useDispatch();
  


  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);
  
  const inventory = useSelector((state) => state.inventory);
  const { error, loading, product } = inventory;

  return (
    <div><div className="pd-cont">
    <div className="product-details">
      <div className="primary-details">
        <div>
          <h3>Primary Details</h3>
          <div className="deet-cont">
            <p className="deet-header">Product name</p>
            <p className="deet-self">{product.name}</p>
          </div>
          <div className="deet-cont">
            <p className="deet-header">Product ID</p>
            <p className="deet-self">{product.id}</p>
          </div>
          <div className="deet-cont">
            <p className="deet-header">Product brand</p>
            <p className="deet-self">{product.brand}</p>
          </div>
          <div className="deet-cont">
            <p className="deet-header">Expiry Date</p>
            <p className="deet-self">Maggi</p>
          </div>
          <div className="deet-cont">
            <p className="deet-header">Quantity</p>
            <p className="deet-self">{product.quantity}</p>
          </div>
        </div>
      </div>
      <div className="supplier-details"></div>
      <div>
        <h3>Primary Details</h3>
        <div className="deet-cont">
          <p className="deet-header">Product name</p>
          <p className="deet-self">Maggi</p>
        </div>
        <div className="deet-cont">
          <p className="deet-header">Product name</p>
          <p className="deet-self">Maggi</p>
        </div>
      </div>
      <div className="stock-locations">
        <div>
            <h3> Stock Locations</h3>
        <div className="deet-cont">
            <h4 className="deet-header">Product name</h4>
            <h4 className="deet-self">{product.name}</h4>
          </div>
          {product.inventory?.map((sto) => (
            // console.log(sto)
            <div className="deet-cont">
            
            <p className="deet-header">{sto.store.name}</p>
            <p className="deet-self">{sto.quantity}</p>
          </div>
          ))}
          
          
        </div>
      </div>
    </div>
    <div className="product-details-img">
      <div className="pdicont">
        <div className="pdi"></div>
      </div>
      <div className="pd">
        <div className="pd-">
          <p>Opening Stock</p>
          <p>40</p>
        </div>
        <div className="pd-">
          <p>Remaining Stock</p>
          <p>34</p>
        </div>
        <div className="pd-">
          <p>On the way</p>
          <p>12</p>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Overview